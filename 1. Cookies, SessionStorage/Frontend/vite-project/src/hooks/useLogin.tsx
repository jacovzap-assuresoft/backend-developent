import { useNavigate } from 'react-router-dom'

const useLogin = () => {
  const navigate = useNavigate()

  const handleLoginCookies = async (name: string) => {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ name }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.ok) {
      alert('Login exitoso!')
      navigate('/app')
    }
  }

  const handleLogoutCookies = async () => {
    const response = await fetch('http://localhost:3000/logout', {
      method: 'POST',
      credentials: 'include'
    })

    if (response.ok) {
      alert('Logout exitoso!')
      navigate('/home')
    }
  }

  const handleLoginSessionStorage = async (name: string) => {
    sessionStorage.setItem('name', name)
    alert('Login exitoso!')
    navigate('/app-session')
  }

  const handleLogoutSessionStorage = async () => {
    sessionStorage.removeItem('name')
    alert('Logout exitoso!')
    navigate('/home')
  }

  return {
    handleLoginCookies,
    handleLogoutCookies,

    handleLoginSessionStorage,
    handleLogoutSessionStorage,
  }
}

export default useLogin
