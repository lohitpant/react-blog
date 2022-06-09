import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-content'>
                <h4>Made with<span className="material-symbols-outlined fav">
                    favorite
                </span> by Lohit Pant</h4>
                <p>Send feedback at lohitpant@gmail.com</p>
            </div>

        </footer>
    )
}

export default Footer