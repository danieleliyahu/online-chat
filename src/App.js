import './App.css';
import React ,{useState}  from 'react'


import firebase from 'firebase/app'
import  'firebase/firestore'
import  'firebase/auth'

import {useAuthState} from 'react-firebase-hooks/auth'
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import Rooms from './components/Rooms';

firebase.initializeApp({
  apiKey: "AIzaSyAYxtp6mmE_CqraKJ3h1wkOhWr6aH1zFQU",
  authDomain: "onlinechat-5091c.firebaseapp.com",
  projectId: "onlinechat-5091c",
  storageBucket: "onlinechat-5091c.appspot.com",
  messagingSenderId: "838041888145",
  appId: "1:838041888145:web:74efb2da03ce2be31ba630"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
function App() {


  const [user] = useAuthState(auth)
  const [room, setroom] = useState('')

  let rooms = []
  for (let x = 0 ; x<5 ; x++){
     let room = <ChatRoom x={x} firestore={firestore} firebase={firebase} auth={auth} />
     rooms.push(room)
  }
  const room0 = () =>{
      setroomButtons("") 
    return setroom(rooms[0]) 
  }
  const room1 = () =>{
      setroomButtons("") 
    return setroom(rooms[1])  
  }
  const room2 = () =>{
      setroomButtons("") 
    return setroom(rooms[2]) 
  }
  const room3 = () =>{
      setroomButtons("") 
    return setroom(rooms[3])  
  }
  const [roomButtons, setroomButtons] = useState(
      <div className={"roombuttonsdiv"}> <button onClick={room0}>ROOM 1</button>
          <button onClick={room1}>ROOM 2</button>
          <button onClick={room2}>ROOM 3</button>
          <button onClick={room3}>ROOM 4</button></div>)
            const backToRooms = () =>{
            return setroom(     <div className={"roombuttonsdiv"}> <button onClick={room0}>ROOM 1</button>
            <button onClick={room1}>ROOM 2</button>
            <button onClick={room2}>ROOM 3</button>
            <button onClick={room3}>ROOM 4</button></div>)  
          }
          const singout = () =>{
            auth.signOut()
            return setroom(     <div className={"roombuttonsdiv"}> <button onClick={room0}>ROOM 1</button>
            <button onClick={room1}>ROOM 2</button>
            <button onClick={room2}>ROOM 3</button>
            <button onClick={room3}>ROOM 4</button></div>)  
          }
          // 
  return (
    <div className={"App"}>
      <header>
        <h1>Chat Room</h1>
        <SignOut auth={auth} singout={singout} />
        {user?<button onClick={backToRooms}>Back To Rooms</button>:""}
      </header>
      <section>
        {user? <Rooms room={room} roomButtons={roomButtons} firestore={firestore} auth={auth}firebase={firebase} ></Rooms>   : <SignIn firebase={firebase} auth={auth} /> }
        {/*  */}
        {/* <ChatRoom firestore={firestore} auth={auth}firebase={firebase} */}
      </section>
    </div>
  );
}

export default App;
