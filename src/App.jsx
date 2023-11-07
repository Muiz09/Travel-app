import { Routes, Route } from 'react-router-dom'
import FormLogin from './pages/formLogin/FormLogin';
import HomePage from './pages/home/HomePage'
import FormRegister from './pages/register/formRegister';
import ProfilePage from './pages/profile/ProfilePage';
import Detail from './pages/detail/DetailPage';
// import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/register" element={<FormRegister />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path="/posts/:id" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App