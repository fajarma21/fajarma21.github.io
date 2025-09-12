import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore/lite';

import {
  FS_API_KEY,
  FS_APP_ID,
  FS_AUTH_DOMAIN,
  FS_MEASUREMENT_ID,
  FS_MESSAGING_SENDER_ID,
  FS_PROJECT_ID,
  FS_STORAGE_BUCKET,
} from '@/constants/env';

const firebaseApp = initializeApp({
  apiKey: FS_API_KEY,
  authDomain: FS_AUTH_DOMAIN,
  projectId: FS_PROJECT_ID,
  storageBucket: FS_STORAGE_BUCKET,
  messagingSenderId: FS_MESSAGING_SENDER_ID,
  appId: FS_APP_ID,
  measurementId: FS_MEASUREMENT_ID,
});

const firestore = initializeFirestore(firebaseApp, {});

export default firestore;
