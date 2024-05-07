import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB98unZyaGc165tW9W9D6eqffN6bxbl_zs",
  authDomain: "minidevblognicolas.firebaseapp.com",
  projectId: "minidevblognicolas",
  storageBucket: "minidevblognicolas.appspot.com",
  messagingSenderId: "624135809707",
  appId: "1:624135809707:web:da2e22580fd160cd0ae5ee",
  measurementId: "G-728WVGC6BC"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db}