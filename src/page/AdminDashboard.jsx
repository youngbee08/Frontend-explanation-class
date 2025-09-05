import React, { useEffect, useState } from 'react'

const AdminDashboard = () => {
  const [users,setUsers] = useState([])
  async function getUsers() {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    try {
      const res = await fetch(`${baseUrl}/users`);
      const data = await res.json();
      console.log(data);
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUsers()
  }, [])
  
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <table>
        <thead>
          <tr>Name</tr>
          <tr>Username</tr>
          <tr>Password</tr>
          <tr>Address</tr>
          <tr>Action</tr>
        </thead>
        <tbody>
         {
          users.map
         }
        </tbody>
      </table>
    </div>
  )
}

export default AdminDashboard
