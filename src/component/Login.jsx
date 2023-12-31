import React ,{useState, useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext) 

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
     <>
        <h2 className='text-center text-3xl text-green-900 font-bold'>Login</h2>
        <div className='flex flex-col w-1/3 gap-5 m-auto mt-5 bg-slate-400 p-5'>
            <p>User Name</p>
            <input type="text" placeholder='username' 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            className='px-2 rounded-md'/>
            {" "}
            <p>Password</p>
            <input type="text" placeholder='password' 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className='px-2 rounded-md'/>
            <br />
            <button onClick={handleSubmit} className='bg-blue-600 px-5 py-1 rounded-lg text-white font-semibold'>Submit</button>
        </div>
     </>
  )
}

export default Login 