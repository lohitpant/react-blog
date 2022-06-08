import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function CreatePostWrapper({ isAuth, Comp, path }) {

    const navigate = useNavigate()

    useEffect(() => {
        if (!isAuth) {
            navigate(path, { state: 'Please Login to Continue' })
        }
    }, [])

    return (
        <div>
            {isAuth && <Comp />}
        </div>
    )
}

export default CreatePostWrapper