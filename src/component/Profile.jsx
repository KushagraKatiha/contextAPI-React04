import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if (!user) return <h2 className='text-center text-2xl mt-3 bg-black px-3 py-1 rounded-md w-fit m-auto text-white'>Please Login</h2>

    return <div className='text-center text-2xl mt-3 bg-black px-3 py-1 rounded-md w-fit m-auto text-white'>Welcome {user.username}</div>
}

export default Profile