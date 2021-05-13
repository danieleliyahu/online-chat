import React , {useState} from 'react'

const SignIn = ({firebase,auth}) => {
    const [state, setstate] = useState("")

    // const singUpWithEmail = () =>{
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //     .then((userCredential) => {

    //       var user = userCredential.user;

    //     })
    //     .catch((error) => {
    //       var errorCode = error.code;
    //       var errorMessage = error.message;

    //     });
    // }

    const signInWithGoogle = () =>{
        const provider = new firebase.auth.GoogleAuthProvider();
        console.log(provider)

        auth.signInWithPopup(provider);
    }
    // const signInWithGoogle = () =>{
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     auth.signInWithPopup(provider);
    // }
    const signInWithFacebook = () =>{
        const provider = new firebase.auth.FacebookAuthProvider();
        console.log(provider)
        firebase
  .auth()
  .signInWithPopup(provider)
    }

    return (
        <>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        <button onClick={signInWithFacebook}>Sign in with Facebook</button>
        
        {/* <button onClick={singUpWithEmail}>Sign up with Email</button>
        <button onClick={singUpWithEmail}>Sign in with Email</button> */}
        </>
    )
}

export default SignIn
