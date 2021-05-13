import React from 'react'

const SignOut = ({auth,singout}) => {
    return auth.currentUser && (
        <button onClick={()=>singout() }>Sign Out </button>
    )

}

export default SignOut
