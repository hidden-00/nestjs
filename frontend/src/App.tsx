import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/Home'
import LoginPage from './pages/Login'
import { HelmetProvider } from 'react-helmet-async'
import RegisterPage from './pages/Register'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}