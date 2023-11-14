import { useState } from 'react'
import useLogin from '../hooks/useLogin'
import Button from '../components/Button'

const LoginSession = () => {
  const login = useLogin()
  const [name, setName] = useState<string>('')
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column'
      }}
    >
      <div>
        <h1
          style={{
            fontSize: '40px'
          }}
        >
          Login Session
        </h1>
        <p
          style={{
            fontSize: '20px'
          }}
        >
          Introduzca su nombre
        </p>
        <form
          action='submit'
          onSubmit={e => {
            e.preventDefault()
            login.handleLoginSessionStorage(name)
          }}
          style={{
            display: 'flex',
            gap: '10px'
          }}
        >
          <input
            type='text'
            style={{
              fontSize: '20px',
              padding: '9px'
            }}
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Button
            label='Iniciar sesion'
            isSubmit={true}
            bgColor='#0F52BA'
            onClick={() => {}}
          />
        </form>
      </div>
    </div>
  )
}

export default LoginSession
