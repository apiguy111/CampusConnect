import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSy**************ou95VpRwpUdLI",
  authDomain: "fam**********.firebaseapp.com",
  projectId: "fa**********",
  storageBucket: "familia***********com",
  messagingSenderId: "75*******3",
  appId: "1:75934510************ec66",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
