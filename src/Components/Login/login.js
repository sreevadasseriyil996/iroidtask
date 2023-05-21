import React,{useState} from "react";
import "./login.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
 

const LoginComponent=()=>{
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')

    const navigate = useNavigate();

    const handleLogin = (e) =>{
      e.preventDefault();
      if(email === ""){
        alert("Please enter email");
      }else if(password === ""){
        alert("Please enter password");
      }else{
        const body = {
          email:email,
          password:password
        }
        axios.post("http://localhost:8000/login",body)
        .then((response)=>{
            setEmail("");
            setPassword("");
            console.log(response);
            localStorage.setItem("userDetail",JSON.stringify(response?.data?.data));
            alert("Login Successful");
            navigate("/home")
        })
        .catch((error)=>{
            let err = error.response.data.message;
            alert(err);
        })
      }

    }


    return(
        <div style={{backgroundColor:"#fff",flex:1}}>
         <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
            <div style={{marginTop:"15px" ,alignItems:"center"}}>Don't you have an account?</div> 
            <button type="button" className={"signupBtn"} onClick={()=>{navigate('/register')}} >Sign up</button>
            
         </div>
          <div className={"semiCircle"}>
            <div className={"loginBox"}>
 
            <form>
                <h3>Welcome back!</h3>
      <label>Email</label> 
      <br></br>
      <input type="text" placeholder="Email address" className={"loginfield"}  onChange={(e)=>setEmail(e.target.value)} />
      <label>Password</label> 
      <br></br>
      <input type="password" placeholder="Password" className={"loginfield"}  onChange={(e)=>setPassword(e.target.value)}/>

      <button type="submit" className={"loginBtn"} onClick={handleLogin} >Login</button>
       
    </form>

            </div>

          </div>
          
        </div>
        
    )
}

export default LoginComponent;