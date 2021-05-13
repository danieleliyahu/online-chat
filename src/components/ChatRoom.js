import React , {useState,useRef} from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage';


const ChatRoom = ({firestore,auth,firebase,x}) => {
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
            photoURL
        })
        setFormValue('');
        dummy.current.scrollIntoView({behavior:'smooth'})

    }
    return (
        <>
        <main>
            {messages && messages.map(msg => <ChatMessage key={msg.id} auth={auth} formValue={formValue} setFormValue={setFormValue} messages={msg}/>)}
            <div ref={dummy}></div>
        </main>
        <form onSubmit={sendMessage}> 
            <input value={formValue} onChange={(e)=>setFormValue(e.target.value)} />

            <button type='submit'>'🗨'</button>
        </form>
        </>
    )
}

export default ChatRoom
