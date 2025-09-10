import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoute = () => {
  const {checkIsAuthenticated} = useContext(UserContext);
  const navigate = useNavigate()
  useEffect(() => {
    if (!checkIsAuthenticated()) {
      toast.warning("Oops! You have to be authenticated to visit this page");
      navigate("/")
    }
  }, [checkIsAuthenticated(),navigate])
  
  return (
    checkIsAuthenticated() && <Outlet/>
  )
}

export default ProtectedRoute