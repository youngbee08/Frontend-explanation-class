import * as yup from "yup"
import { useForm } from "react-hook-form";
import Button from "./Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";

function Login2() {
  const {login} = useContext(UserContext)
  const logInSchema = yup.object({
    username:yup.string().required("Please input your username").min(6, "Username must be at least 8 characters"),
    password:yup.string().required("Please input your password").min(8, "Password must be at least 8 characters").max(12, "Password must not be more than 12 characters")
  });

  const {register,handleSubmit,formState:{errors,touchedFields}} = useForm({
    resolver:yupResolver(logInSchema),
    reValidateMode:"onChange",
    mode:"onChange"
  })


  return(
    <form action="" onSubmit={handleSubmit(login)}>
      <label htmlFor="">Username</label>
      <input type="text" {...register("username")}/>
      {touchedFields.username && errors.username && (<p className="errorPara">{errors.username.message}</p>)}

      <label htmlFor="">Password</label>
      <input type="password" {...register("password")}/>
      {touchedFields.password && errors.password && (<p className="errorPara">{errors.password.message}</p>)}
      <Button text={"Log In"}/>
      <Link to={"/admin"}>Visit Admin</Link>
    </form>
  )
}

export default Login2