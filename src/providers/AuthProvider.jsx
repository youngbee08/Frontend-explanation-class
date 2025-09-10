import { UserContext } from "../contexts/UserContext"
import { toast } from "sonner";
const baseUrl = import.meta.env.VITE_BASE_URL;

const UserProvider = ({children})=>{
  function greetUser() {
    alert("Hi User")
  }
  const login = async(data,action)=>{
    const res = await fetch(`${baseUrl}/auth/login`, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    });
    const resData = await res.json();
    console.log(resData);
    if (res.status === 200) {
      toast.success("Log in successfull")
      localStorage.setItem("session", resData.accessToken)
      action("/login")
    } else{
      toast.error("An unexpected error occured while loggin in")
    }
  }
  function checkIsAuthenticated() {
    const hasToken = localStorage.getItem("session");
    if (hasToken) {
      return true
    } else{
      return false
    }
  }
  const value = {
    greetUser,
    login,
    checkIsAuthenticated
  }
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider