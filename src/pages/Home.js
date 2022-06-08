import { getDocs, collection } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../firebase-config'
import './Home.css'

const Home = () => {

  const navigate = useNavigate()

  const [postLists, setPostLists] = useState([])

  const getPosts = async () => {
    const postsCollectionRef = collection(db, 'posts')
    const data = await getDocs(postsCollectionRef)
    setPostLists(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));

  }

  useEffect(() => {
    getPosts()
  }, [])

  const goToBlog = (post) => {
    navigate('/blog', { state: post })
  }

  return (
    <div className='homePage'>
      {postLists.map(post => {
        return <div className='post' key={post.id} onClick={() => goToBlog(post)}>
          <div className='post-container'>
            <div className='postHeader'>
              <div className='title'>
                <img src={post.image} alt='Google User' className='user-icon' />
                <div>
                  <h2>{post.title}</h2>
                  <p className='authorText'>Author: {post.author.name}</p>
                </div>
              </div>
            </div>
            <div className='postTextContainer'>
              <p>{post.post}</p>
            </div>
          </div>
          <div className='tools-container'>
            <div className='fav-icon'>
              <span className="material-symbols-outlined">
                favorite
              </span>
              <p>132</p>
            </div>
            <div className='comment-icon'>
              <span className="material-symbols-outlined">
                comment
              </span>
              <p>13</p>
            </div>
          </div>
        </div>
      })}
    </div>
  )
}

export default Home