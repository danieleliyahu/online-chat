import React from 'react'
import ChatRoom from './ChatRoom'
import SignIn from './SignIn'

const Rooms = ({firebase,auth,firestore,roomButtons,room}) => {
    
    return (
        <>
           { room?room:roomButtons}
        </>
    )
}

export default Rooms
