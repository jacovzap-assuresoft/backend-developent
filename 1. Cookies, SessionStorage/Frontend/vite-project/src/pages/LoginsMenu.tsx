import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

const LoginsMenu = () => {
  const navigate = useNavigate()

  const handleGoLoginCookie= () => {
    navigate('/login')
  }

  const handleGoLoginSession = () => {
    navigate('/login-session')
  }

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
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <Button
          label='Login with COOKIES'
          onClick={handleGoLoginCookie}
          isSubmit={false}
          bgColor='gray'
        />
        <Button
          label='Login with SESSION STORAGE'
          onClick={handleGoLoginSession}
          isSubmit={false}
          bgColor='gray'
        />
      </div>
    </div>
  )
}

export default LoginsMenu
