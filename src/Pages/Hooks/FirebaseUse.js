import initializeAuthentication from "../firebaseAuth/firebaseInit";
import {
     getAuth, 
     signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
     GoogleAuthProvider ,
    onAuthStateChanged,
    signOut
    }from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user)
            setError("")
        })
        .catch((error) => {
            setError(error.message)
        });
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const logOutAuth = () =>{
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        });
    }

    return { signInWithGoogle, user, registerNewUser, logOutAuth, error, processLogin};
}

export default useFirebase ;