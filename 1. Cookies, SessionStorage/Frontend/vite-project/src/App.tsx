import { Routes, Route } from 'react-router-dom'

import NotFound from './pages/NotFound'
import Login from './pages/Login'
import AppMenu from './pages/AppMenu'
import AppMenuSession from './pages/AppMenuSession'
import LoginsMenu from './pages/LoginsMenu'

import LoginSession from './pages/LoginSession'

function App () {
  return (
    <>
      <Routes>
          <Route path='/home' element={<LoginsMenu />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login-session' element={<LoginSession />} />
          <Route path='/app' element={<AppMenu />} />
          <Route path='/app-session' element={<AppMenuSession />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
