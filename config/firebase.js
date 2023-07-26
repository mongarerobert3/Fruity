import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { Constants } from 'expo-constants';

//Firebase Config
const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
	databaseUrl: Constants.manifest.extra.databaseUrl
};

// Initialize Firebase
if (!firebaseConfig.apps.length) {
  firebaseConfig.initializeApp(firebaseConfig);
}

export const auth = getAuth();
export const database = getFirestore();