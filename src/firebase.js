
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBtpLxqcFjN8kz6eY1yfYcF5x31wTjd9cE",
  authDomain: "netflix-clone-9f7e7.firebaseapp.com",
  projectId: "netflix-clone-9f7e7",
  storageBucket: "netflix-clone-9f7e7.appspot.com",
  messagingSenderId: "738261052047",
  appId: "1:738261052047:web:f19b0bab24e5bbba0f9efa",
  measurementId: "G-VFP29S1WW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth=getAuth(app);
const db=getFirestore(app);

const signup=async(name,email,password)=>{
    try{
        const response=await createUserWithEmailAndPassword(auth,email,password);
        const user=response.user;
        await addDoc(collection(db,"user"), {
            uid : user.uid,
            name,
            authProvider:"local",
            email,
        })
    }catch(error){
        console.log(error)
        alert(error)
    }
}

const login=async(email,password)=>{
    try{
        signInWithEmailAndPassword(auth,email,password)
    }catch(error){
        console.log(error)
        alert(error)
    }
}

const logout=async()=>{
    signOut(auth)
}

export {auth, db, signup, login, logout};