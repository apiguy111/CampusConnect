import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtpBOcOKvZX90BQskKe6ou95VpRwpUdLI",
  authDomain: "familiarity-455c4.firebaseapp.com",
  projectId: "familiarity-455c4",
  storageBucket: "familiarity-455c4.appspot.com",
  messagingSenderId: "759345106323",
  appId: "1:759345106323:web:7947379997ecb12ef1ec66",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
