import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { setDoc, doc, getDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

function OAuth() {
  const navigate = useNavigate()

  async function onGoogleClick() {
    try {
      const auth = getAuth()
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      

      //check for the user 

      const docRef = doc(db, "users", user.uid) //to get a copy of the users database 
      const docSnap = await getDoc(docRef) //Later

      if (!docSnap.exists()) {
        await setDoc(docRef, { fullName: user.displayName, email: user.email, timestamp: serverTimestamp()})
      } 
      // await setDoc(doc(db, "users", user.uid), )
     navigate("/")
    } catch (error) {
      toast.error("Could not authorize with Google")
    }
  }
  return (
    <button
    onClick={onGoogleClick}
      type="button"
      className="flex items-center justify-center w-full bg-white text-black border border-black px-7 py-3 rounded-3xl text-sm font-medium uppercase hover:bg-gray-200 transition duration-200 ease-in-out active:bg-gray-300"
    >
      <FcGoogle className="text-2xl mr-4" />
      Continue with Google
    </button>
  );
}

export default OAuth;
