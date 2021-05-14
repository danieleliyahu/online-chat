import React , {useState,useRef} from 'react'

const SignIn = ({firebase,auth}) => {
    // const [email, setemail] = useState("")
    // const [password, setpassword] = useState("")


    const singUpWithEmail = () =>{
        console.log(email)
        firebase.auth().createUserWithEmailAndPassword(email.current.value, password.current.value)
        .then((userCredential) => {

          var user = userCredential.user;
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;

        });
    }
    let popupvaild = useRef(null)
    let email = useRef("")
    let password = useRef("")
    const togglePopup = () => {
        console.log(popupvaild.current.className="popup")
     }
    const [state, setstate] = useState(<div className="popup " ref={popupvaild} id="popup-1">
    <div className="overlay "></div>
    <div ref={popupvaild} className="contentPopup active" >
    <div class="close-btn" onClick={togglePopup} >&times;</div>
    <h1>sign up</h1>
    <form>
    <input  type={"email"} ref={email} placeholder={"email"} />
    <input type={"password"} ref={password} value={password} placeholder={"password"} />
    <button onClick={singUpWithEmail}>Sign up with email</button>
    </form>
    <div className="closeVaildButton"><i className="fas fa-check-circle"></i></div>
    </div>
</div>)


    const singUp = () =>{
        
          setstate(<div className="popup active " ref={popupvaild} id="popup-1">
          <div className="overlay "></div>
          <div ref={popupvaild} className="contentPopup active" >
          <div class="close-btn" onClick={togglePopup} >&times;</div>
          <h1>sign up</h1>
          <input type={"email"} ref={email}  placeholder={"email"} />
          <input type={"password"} ref={password} placeholder={"password"} />
          <button onClick={singUpWithEmail}>Sign up with email</button>
          <div className="closeVaildButton"><i className="fas fa-check-circle"></i></div>
          </div>
      </div>)
    }


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

    // const singUp = () =>{
    //     setHome(
    //         <div>
    //         <form>
    //             <input type={"email"} onChange={((e)=>{setemail(e.target.value)})} placeholder={"email"} />
    //             <input type={"password"} onChange={((e)=>{setpassword(e.target.value)})} placeholder={"password"} />
    //             <button onClick={singUpWithEmail}>Sign up with email</button>
    //         </form>
    //         </div>

    //     )
    // }
    const [Home, setHome] = useState(        <><button onClick={signInWithGoogle}>Sign in with Google</button>
        <button onClick={signInWithFacebook}>Sign in with Facebook</button>
        <button onClick={singUp}>Sign up with email</button></>)

{/* <form>
<input type={"email"} value={email} onChange={((e)=>{setemail(e.target.value)})} placeholder={"email"} />
<input type={"password"} value={password} onChange={((e)=>{setpassword(e.target.value)})} placeholder={"password"} />
<button onClick={singUpWithEmail}>Sign up with email</button>
</form> */}
    return (
        <>
        {state}
        <button onClick={signInWithGoogle}>Sign in with Google</button>
        <button onClick={signInWithFacebook}>Sign in with Facebook</button>
        <button onClick={singUp}>Sign up with email</button>
 
        </>
    )
}

export default SignIn
