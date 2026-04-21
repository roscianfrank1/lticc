import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy, 
  limit,
  setDoc,
  getDoc
} from 'firebase/firestore';
import { db } from '@/src/lib/firebase';

export interface Fixture {
  id?: string;
  team: string;
  opponent: string;
  date: string;
  venue: string;
  type: 'Home' | 'Away';
  status: 'Scheduled' | 'Cancelled' | 'Postponed';
}

export interface Result {
  id?: string;
  team: string;
  opponent: string;
  date: string;
  lticcScore: string;
  opponentScore: string;
  outcome: 'Win' | 'Loss' | 'Draw' | 'Cancelled';
  margin: string;
}

export interface NewsPost {
  id?: string;
  title: string;
  content: string;
  publishedAt: string;
  imageUrl?: string;
}

// Fixtures
export const getFixtures = async () => {
  const q = query(collection(db, 'fixtures'), orderBy('date', 'asc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Fixture[];
};

export const saveFixture = async (fixture: Partial<Fixture>, id?: string) => {
  if (id) {
    await updateDoc(doc(db, 'fixtures', id), fixture);
  } else {
    await addDoc(collection(db, 'fixtures'), fixture);
  }
};

export const deleteFixture = async (id: string) => {
  await deleteDoc(doc(db, 'fixtures', id));
};

// Results
export const getResults = async (limitCount = 0) => {
  let q = query(collection(db, 'results'), orderBy('date', 'desc'));
  if (limitCount > 0) q = query(q, limit(limitCount));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Result[];
};

export const saveResult = async (result: Partial<Result>, id?: string) => {
  if (id) {
    await updateDoc(doc(db, 'results', id), result);
  } else {
    await addDoc(collection(db, 'results'), result);
  }
};

export const deleteResult = async (id: string) => {
  await deleteDoc(doc(db, 'results', id));
};

// News
export const getNews = async () => {
  const q = query(collection(db, 'news'), orderBy('publishedAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as NewsPost[];
};

export const saveNews = async (post: Partial<NewsPost>, id?: string) => {
  if (id) {
    await updateDoc(doc(db, 'news', id), post);
  } else {
    await addDoc(collection(db, 'news'), post);
  }
};
