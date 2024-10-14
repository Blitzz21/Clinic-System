import LoginPage from './routes/Login/LoginPage.jsx'
import Dashboard from './routes/Dashboard/Dashboard.jsx'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
  )
}

export default App
