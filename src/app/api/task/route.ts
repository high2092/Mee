import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../firebase/firestore';

const taskCollectionRef = collection(db, 'task');

const regexHHmm = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;

export async function POST(req: Request) {
  const { title, description = '', startedAt, endedAt } = (await req.json()) ?? {};

  if (!title || !startedAt || !endedAt) {
    return Response.json({}, { status: 400 });
  }

  if (!regexHHmm.test(startedAt) || !regexHHmm.test(endedAt)) {
    return Response.json({}, { status: 400 });
  }

  if (startedAt >= endedAt) {
    return Response.json({}, { status: 400 });
  }

  // 기존 태스크와 시간이 겹치는지 검사
  const [busyTask1, busyTask2, busyTask3] = await Promise.all([
    getDocs(query(taskCollectionRef, where('startedAt', '>', startedAt), where('startedAt', '<', endedAt))),
    getDocs(query(taskCollectionRef, where('endedAt', '>', startedAt), where('endedAt', '<', endedAt))),
    getDocs(query(taskCollectionRef, where('startedAt', '<=', startedAt))), // 불일치 비교 복합 쿼리는 단일 필드에서만 가능 - https://firebase.google.com/docs/firestore/query-data/queries#query_limitations
  ]);

  if (!busyTask1.empty || !busyTask2.empty || busyTask3.docs.filter((doc) => doc.data().endedAt <= endedAt).length) {
    return Response.json({}, { status: 409 });
  }

  const doc = await addDoc(taskCollectionRef, { title, description, startedAt, endedAt });

  return Response.json({ id: doc.id });
}
