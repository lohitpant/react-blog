import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { db } from '../firebase-config'
import './BlogPost.css'
import def_user from '../assets/def_user.png'
import { auth } from '../firebase-config'

function BlogPost({ isAuth }) {

    const { state } = useLocation()

    const navigate = useNavigate()

    const deletePost = async () => {
        const postDoc = doc(db, 'posts', state.id)
        await deleteDoc(postDoc)
        navigate('/')
    }

    return (
        <div className='blogPostContainer'>
            <div className='headerContainer'>
                <img src={state.image ? state.image : def_user} alt='User Display' />
                <h1>{state.title}</h1>
                <button disabled={isAuth ? isAuth && auth.currentUser && auth.currentUser.uid !== state.author.id :
                    !isAuth} onClick={deletePost} className='del-btn'>
                    <span className="material-symbols-outlined trashIcon"  >
                        delete
                    </span>
                </button>
            </div>
            <div className='post-content'>
                <p>{state.post}</p>
                <div>@{state.author.name}</div>
            </div>
        </div>
    )
}

export default BlogPost