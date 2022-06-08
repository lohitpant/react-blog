import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth, db } from '../firebase-config'
import './CreatePost.css'

function CreatePost() {

    const [title, setTitle] = useState('')
    const [post, setPost] = useState('')

    const navigate = useNavigate()

    const postsCollectionRef = collection(db, 'posts')

    const createPost = async (e) => {
        e.preventDefault()
        await addDoc(postsCollectionRef, {
            title, post, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
            image: auth.currentUser.photoURL
        })
        navigate('/')
    }

    return (
        <main className='createPostPage'>
            <form className='cpContainer' onSubmit={createPost}>
                <h1>Create New Post</h1>
                <div className='inputGroup'>
                    <label>Title:</label>
                    <input placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} autoFocus />
                </div>
                <div className='inputGroup'>
                    <label>Post:</label>
                    <textarea placeholder='Content Goes Here...' rows='15' cols='50'
                        value={post} onChange={e => setPost(e.target.value)}></textarea>
                </div>
                <button>Publish Post</button>
            </form>
        </main>
    )
}

export default CreatePost