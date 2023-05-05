// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {signInWithPopup, signInWithEmailAndPassword,createUserWithEmailAndPassword,signInWithRedirect, getAuth,GoogleAuthProvider} from "firebase/auth"
import {doc,setDoc,getFirestore,getDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO864WUQf1FsUuvj3MncBWgiqtNQ70c2k",
  authDomain: "pizza-app-10463.firebaseapp.com",
  projectId: "pizza-app-10463",
  storageBucket: "pizza-app-10463.appspot.com",
  messagingSenderId: "874313773430",
  appId: "1:874313773430:web:6a70f2410a6bc3046e4a57",
  measurementId: "G-BB0FXLJKXK"
};

// Initialize Firebase
const firebaseApp=initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const googleprovider = new GoogleAuthProvider();
  googleprovider.setCustomParameters({
    prompt:"select_account"
  });
  export const db=getFirestore();
export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,googleprovider);

export const signInEmailAndPassword=async(Email,Password)=>{
    if(!Email || !Password) return;
    return await createUserWithEmailAndPassword(auth,Email,Password);
  }
  export const SignInAuthUserWithEmailAndPassword=async(Email,Password)=>{
    if(!Email || !Password) return;
    return await signInWithEmailAndPassword(auth,Email,Password);
  }

export const createUserDocumentFromAuth=async(userAuth,additionalinfo={})=>{
    const userDocRef=doc(db,"users",userAuth.uid);
    console.log(userDocRef);
    const usersnapshot=await getDoc(userDocRef);
    if(!usersnapshot.exists()){
        const {Email,displayName}=userAuth;
        const createdAt= new Date();
        try{
            await setDoc(userDocRef,{
                Email,
                displayName,
                createdAt,
                additionalinfo

            })

        }
        catch{

        }


    }
    return userDocRef;


}