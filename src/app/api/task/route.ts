import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../firebase/firestore';
import { NextRequest } from 'next/server';

const taskCollectionRef = collection(db, 'task');

export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get('date');

  if (!validateDateString(date)) {
    return Response.json({}, { status: 400 });
  }

  const tasks = (await getDocs(query(taskCollectionRef, where('date', '==', date)))).docs.map((doc) => doc.data());

  return Response.json({ tasks });
}

const regexHHmm = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;

export async function POST(req: Request) {
  const { title, date, description = '', startedAt, endedAt } = (await req.json()) ?? {};

  if (!title || !date || !startedAt || !endedAt) {
    return Response.json({}, { status: 400 });
  }

  if (!validateDateString(date)) {
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
    getDocs(query(taskCollectionRef, where('date', '==', date), where('startedAt', '>=', startedAt), where('startedAt', '<', endedAt))),
    getDocs(query(taskCollectionRef, where('date', '==', date), where('endedAt', '>', startedAt), where('endedAt', '<=', endedAt))),
    getDocs(query(taskCollectionRef, where('date', '==', date), where('startedAt', '<=', startedAt))), // 불일치 비교 복합 쿼리는 단일 필드에서만 가능 - https://firebase.google.com/docs/firestore/query-data/queries#query_limitations
  ]);

  if (!busyTask1.empty || !busyTask2.empty || busyTask3.docs.filter((doc) => doc.data().endedAt >= endedAt).length) {
    return Response.json({}, { status: 409 });
  }

  const doc = await addDoc(taskCollectionRef, { title, date, description, startedAt, endedAt });

  return Response.json({ id: doc.id });
}

const regexYYYYmmdd = /^\d{4}\d{2}\d{2}$/;

function validateDateString(dateString: string | null) {
  if (!dateString) {
    return false;
  }

  if (!regexYYYYmmdd.test(dateString)) {
    return false;
  }

  const year = parseInt(dateString.substring(0, 4));
  const month = parseInt(dateString.substring(4, 6));
  const day = parseInt(dateString.substring(6, 8));
  const date = new Date(year, month - 1, day);

  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}
