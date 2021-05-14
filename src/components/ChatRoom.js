import React , {useState,useRef} from 'react'
import firebase from 'firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';


const ChatRoom = ({firestore,auth,x}) => {
    const storage = firebase.storage();
    const [imageFile, setImageFile] = useState();
    const [imgUrl, setimgUrl] = useState();
    const updateProfileImage  = () =>{
        console.log(imageFile.name) 
        const uploadTask = storage.ref(imageFile.name).put(imageFile);
        uploadTask.on('state_changed', () =>{

            storage.ref().child(imageFile.name).getDownloadURL().then(url =>{
                setimgUrl(url)
            })
        })
    }
    const messagesRef = firestore.collection(`room${x}`);
    const query = messagesRef.orderBy('createAt').limit(25);
    const [messages] = useCollectionData(query, {idField: 'id'})
    const [formValue, setFormValue] = useState('')
    const dummy = useRef();
    const sendMessage = async(e) =>{
        e.preventDefault();
        const {uid,photoURL} = auth.currentUser;
        console.log(auth.currentUser)

        await messagesRef.add({
            text: formValue,
            createAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL:photoURL?photoURL:imgUrl?imgUrl:null
        })
        setFormValue('');
        dummy.current.scrollIntoView({behavior:'smooth'})

    }
    return (
        <>
        <main>
            <div className={"updatePhoto"}><input type="file" onChange={e=>{setImageFile(e.target.files[0])}}  />
            <button onClick={updateProfileImage}>update profile image</button>
            </div>
            {messages && messages.map(msg => <ChatMessage key={msg.id} auth={auth} formValue={formValue} setFormValue={setFormValue} messages={msg}/>)}
            <div ref={dummy}></div>
 
        </main>
        <form onSubmit={sendMessage}> 
            <input value={formValue} onChange={(e)=>setFormValue(e.target.value)} />

            <button type='submit'>🗨</button>
        </form>
        </>
    )
}

export default ChatRoom
