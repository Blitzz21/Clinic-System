import LoginPage from './routes/Login/LoginPage.jsx'
import Dashboard from './routes/Dashboard/Dashboard.jsx'
import Form from './routes/Medical-Form/Form.jsx'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/form' element={<Form />} />
      </Routes>
  )
}

export default App
