import React from 'react'
import Login from './components/Login'
import "./index.css"
import AdminDashboard from './page/AdminDashboard'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Error404 from './components/Error404'
import { Toaster } from 'sonner'
import Login2 from './components/Login2'
import UserProvider from './providers/AuthProvider'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login2/>}/>
            <Route element={<ProtectedRoute/>}>
              <Route path="/admin" element={<AdminDashboard/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<Error404/>}/>
          </Routes>
          <Toaster richColors closeButton position='top-right' visibleToasts={1}/>
        </BrowserRouter>
      </UserProvider>
    </>
  )
}

export default App