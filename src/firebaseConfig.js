import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB07zSvipLX9jQMRAx1VlxA1A7AxDDMWb4",
  authDomain: "curso-react-coder-47fbc.firebaseapp.com",
  projectId: "curso-react-coder-47fbc",
  storageBucket: "curso-react-coder-47fbc.firebasestorage.app",
  messagingSenderId: "52335715839",
  appId: "1:52335715839:web:94af4a91ace1a060c333ca"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )