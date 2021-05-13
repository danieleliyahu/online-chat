import React from 'react'

const ChatMessage = (props) => {
    const {text,uid,photoURL} = props.messages;
    const messageClass = uid === props.auth.currentUser.uid ? 'sent' : 'received'
    return (
        <div className={`${messageClass}`}>
            <img src={photoURL} />
            <p>{text}</p>

        </div>
    )
}

export default ChatMessage
