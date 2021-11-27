import { useState, useEffect } from "react"
import initializeAuthentication from "../Firebase/firebase.init"
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  TwitterAuthProvider,
  getIdToken,
} from "firebase/auth"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import swal from "sweetalert"

initializeAuthentication()
toast.configure()

const useFirebase = () => {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const googleProvider = new GoogleAuthProvider()
  const facebookProvider = new FacebookAuthProvider()
  const twitterProvider = new TwitterAuthProvider()

  const auth = getAuth()

  //Function to sign up user with details
  const registerUser = (
    firstName,
    lastName,
    email,
    address,
    password,
    router
  ) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const name = firstName + " " + lastName
        const newUser = { email, displayName: name }
        setUser(newUser)

        //Add user to database
        saveUserToDb(email, name, "POST")
      

        // Send name to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            swal(
              "Account Created Successfully!",
              "You can now enjoy loyalty programs",
              "success"
            )
            router.push("/")
          })
          .catch((error) => {})
      })
      .catch((error) => {
        // ..
      })
      .finally(() => setIsLoading(false))
  }

  //Observing change of user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        setUser(user)
        setIsLoading(false)
        // logOut();
      } else {
        setUser({})
        setIsLoading(false)
      }
    })
  }, [auth])

  const signInWithGoogle = (router) => {
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user
        setUser(user)
        //Add user to db (USING put method because user might login directly using external auth without signing up)
        saveUserToDb(user.email, user.displayName, "PUT")

        router.replace("/")
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false))
  }
  const signInWithFacebook = (router) => {
    setIsLoading(true)
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user
        setUser(user)
        //Add user to db (USING put method because user might login directly using external auth without signing up)
        saveUserToDb(user.email, user.displayName, "PUT")
        router.replace("/")
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false))
  }
  const signInWithTwitter = (router) => {
    setIsLoading(true)
    signInWithPopup(auth, twitterProvider)
      .then((result) => {
        const user = result.user
        setUser(user)
        //Add user to db (USING put method because user might login directly using external auth without signing up)
        saveUserToDb(user.email, user.displayName, "PUT")
        router.replace("/")
      })
      .catch((error) => {})
      .finally(() => setIsLoading(false))
  }

  const loginUser = (email, password, router) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        router.replace("/")
        toast.success(
          `Welcome back ${auth.currentUser.displayName.split(" ")[0]}`
        )
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          swal(
            "Invalid Password!",
            "Please check your email & password and then try again",
            "error"
          )
        } else if (error.message === "Firebase: Error (auth/user-not-found).") {
          swal(
            "User Not Found!",
            "Please check your email & password and then try again",
            "warning"
          )
        }
      })
      .finally(() => setIsLoading(false))
  }
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({})
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false))
  }

  //Function to add users to database MONGO DB
  const saveUserToDb = (email, displayName, method) => {
    const user = { 
      email, displayName
  }
    fetch("/api/users", {
      method: method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return {
    user,
    isLoading,
    registerUser,
    loginUser,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
    logOut,
  }
}

export default useFirebase