import React, {useContext } from 'react'
import {userContext} from '../context/UserProvider'
import { Link } from 'react-router-dom'

const Inicio = () => {

  const {user, signIn, signOut} = useContext(userContext)

  return (
    <div>
        <h1>Inicio</h1>
        <h2>{user ? 'Conectado' : 'Desconectado'}</h2>
        {
          user ? (
            <>
              <button className='btn btn-primary' onClick={signOut}>
                Desconectar
              </button>
              <Link to="/protegida" className='btn btn-warning'>Ruta Protegida</Link>
            </>
          ): (
            <button className='btn btn-primary' onClick={signIn}>
              Acceder
            </button>
          )
        }

    </div>
  )
}

export default Inicio