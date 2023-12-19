import { setDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/firestore';

const countDocumentRef = doc(db, 'data', 'count');

export async function GET(req: Request) {
  const countDocument = await getDoc(countDocumentRef);
  const count = (countDocument.exists() ? countDocument.data().count : 0) + 1;
  await setDoc(countDocumentRef, { count });
  return Response.json({ count });
}
