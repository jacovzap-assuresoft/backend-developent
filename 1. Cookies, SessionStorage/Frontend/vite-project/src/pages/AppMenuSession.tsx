import useLogin from '../hooks/useLogin'
import Button from '../components/Button'

const AppMenuSession = () => {
  const login = useLogin()
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <div
        style={{
          textAlign: 'center'
        }}
      >
        <h1>BIENVENIDO</h1>
        <h1>{sessionStorage.getItem('name')}</h1>
        <Button
          label='Cerrar sesion'
          bgColor='#880808'
          onClick={login.handleLogoutSessionStorage}
        />
      </div>
    </div>
  )
}

export default AppMenuSession
