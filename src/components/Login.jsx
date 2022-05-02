import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../context/Userlogin";

export const Login = () => {
// const [user,setUser] = useState("");
const {user,setUser} = useContext(UserContext);
const navigate = useNavigate();


 const handlelogin = ()=>{
  if(user == "admin")
  {
    navigate("/orders");
  }
  else{
    navigate("/neworder");
  }
 }

  return (
    <div>
      <input
      onChange={(e)=>{setUser(e.target.value)}}
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button onClick={handlelogin} className="submit">Login</button>
    </div>
  );
};
