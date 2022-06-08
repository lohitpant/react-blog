import React from 'react'
import { auth, provider } from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useLocation, useNavigate } from 'react-router-dom'
import './Login.css'

const Login = ({ setIsAuth }) => {

    const navigate = useNavigate()

    const { state } = useLocation()

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then(result => {
            localStorage.setItem('isAuth', true)
            setIsAuth(true)
            localStorage.setItem('photoURL', auth.currentUser.photoURL)
            localStorage.setItem('userName', auth.currentUser.displayName.split(' ')[0])
            navigate('/')
        })
    }

    return (
        <div className='loginPage'>
            <h1>{state && state}</h1>
            <p>Sign In with Google to continue</p>
            <button className='login-with-google-btn' onClick={signInWithGoogle}>
                Sign In
            </button>
        </div>
    )
}

export default Login