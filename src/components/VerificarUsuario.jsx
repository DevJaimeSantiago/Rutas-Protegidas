import React, {useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { userContext } from '../context/UserProvider'

const VerificarUsuario = ({children}) => {

    const { user } = useContext(userContext)

    if (!user) {
        return <Navigate to="/" />
    }

    return children
}

export default VerificarUsuario