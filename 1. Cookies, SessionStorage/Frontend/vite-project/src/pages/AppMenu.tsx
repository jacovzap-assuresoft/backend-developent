import useLogin from '../hooks/useLogin'
import Button from '../components/Button'

const AppMenu = () => {
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
        <h1>{document.cookie}</h1>
        <Button
          label='Cerrar sesion'
          bgColor='#880808'
          onClick={login.handleLogoutCookies}
        />
      </div>
    </div>
  )
}

export default AppMenu
