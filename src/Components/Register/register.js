import React,{useState} from "react";
import "../Login/login.css"
import axios from "axios";
import {useNavigate} from "react-router-dom"



const RegisterComponent=()=>{

    const navigate = useNavigate();
    const [uname,setUname]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleRegister = (e)=>{
        e.preventDefault();
        if(uname === ""){
          alert("Please enter Name");
        }else if(email === ""){
          alert("Please enter email");
        }else if(password === ""){
          alert("Please enter password");
        }else{
          const body={
            uname: uname,
             email:email,
             password:password
         }
         console.log(body);
 
        axios.post('http://localhost:8000/register',body)
        .then((result)=>{
          setUname("");
          setEmail("");
          setPassword("");
          alert("Register Successfully");
          navigate("/login");
          
        })
        .catch((error)=>{
         let err = error.response.data.message
         alert(err);
        })
        
        }
        


    }


    return(
        <div style={{backgroundColor:"#fff",flex:1}}>
           <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
              <div style={{marginTop:"15px" ,alignItems:"center"}}>Go back to login ?</div>
              <button type="button" className={"signupBtn"} onClick={()=>{navigate('/login')}} >Sign in</button>
           </div>
          <div className={"semiCircle"}>
            <div className={"loginBox"}>

           
            <form>
                <h3>Register now</h3>
      <label>Name</label> 
      <br></br>
      <input type="text" placeholder="Name" className={"loginfield"}  onChange={(e)=>setUname(e.target.value)} />
      <label>Email</label> 
      <br></br>
      <input type="text" placeholder="Email address" className={"loginfield"}  onChange={(e)=>setEmail(e.target.value)} />
      <label>Password</label> 
      <br></br>
      <input type="password" placeholder="Password" className={"loginfield"}  onChange={(e)=>setPassword(e.target.value)}/>

      <button type="submit" className={"loginBtn"} onClick={handleRegister}>Register</button>
       
    </form>
 

            </div>
          </div>
          
        </div>
        
    )
}

export default RegisterComponent;