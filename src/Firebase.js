
import { initializeApp } from "firebase/app";
import {signInWithEmailAndPassword , createUserWithEmailAndPassword,
     getAuth, 
     signOut} from "firebase/auth";

import { addDoc,
     collection, 
     getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAKvuX5Et2oyLH6-fhtkkKqqmJRCAFshpo",
  authDomain: "netflix-clone-c7bad.firebaseapp.com",
  projectId: "netflix-clone-c7bad",
  storageBucket: "netflix-clone-c7bad.appspot.com",
  messagingSenderId: "543720063324",
  appId: "1:543720063324:web:f90a446798cfe14459c199"
};


const app = initializeApp(firebaseConfig);

const auth =  getAuth(app);
const db = getFirestore(app);

const signup=async( name ,email,password)=>{

    try{
       const res= await createUserWithEmailAndPassword (auth,email,password)

       const user=res.user;

       await addDoc(collection(db, "user") ,{

        uid:user.uid,
        name,
        authProvider,
        email,
       });
    }
    catch(error){

        console.log(error);
       toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async(email, password)=>{

    try{
await signInWithEmailAndPassword(auth,email,password)


    }
    catch (error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
    
}

const logout=()=>{

    signOut(auth)
}

export {auth , db, login, signup, logout}