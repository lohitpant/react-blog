import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import default_img from '../assets/def_user.png'

function Navbar({ isAuth, setIsAuth }) {

    let navigate = useNavigate()

    const userImage = localStorage.getItem('photoURL')
    const userName = localStorage.getItem('userName')

    const signUserOut = () => {
        signOut(auth).then(res => {
            localStorage.clear()
            setIsAuth(false)
            navigate('/login', { state: 'Logged Out Successfully!' })
        })
    }

    return (
        <nav>
            <Link to='/' className='user-img'>
                <img src={userImage ? userImage : default_img} alt='Google User' />
                <div>Namaste, {userName ? userName : "Guest"}</div>
            </Link>
            <div className='nav-icons'>
                <Link to='/'>Home</Link>
                {isAuth && <Link to='/create'>Create Post</Link>}
                {!isAuth ? <Link to='/login'>Login</Link> :
                    <button className='signout-btn' onClick={signUserOut}>
                        <span className="material-symbols-outlined signout-icon" title='LogOut'>
                            logout
                        </span>
                    </button>}
            </div>
        </nav>
    )
}

export default Navbar