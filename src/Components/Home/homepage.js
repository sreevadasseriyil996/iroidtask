import React,{useState,useEffect} from "react";
import "./home.css";
import {useNavigate} from "react-router-dom";



const HomeComponent=()=>{



    const [name,setName] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
      let userDetail = JSON.parse( localStorage.getItem('userDetail'));
      if(userDetail != null){
        setName(userDetail.name);
      }else{
        navigate('/login');
      }
      
    },[])

    const logout = () =>{
        localStorage.removeItem('userDetail');
        navigate('/login');
    }
    return(
        <div style={{backgroundColor:"white",color:"#000"}}>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
            <div style={{marginTop:"15px" ,alignItems:"center"}}>Hi,{name}</div> 
            <button type="button" className={"signupBtn"} onClick={logout}>logout</button>
            
         </div>

        <div> Name your Organization
            
            </div>
        
        <div>
              
         <input style={{marginTop:"10px"}} className={"search"}  type="text" placeholder="enter organization name" ></input>
        <div style={{marginTop:"10px",marginBottom:"20px"}}>Select your Organization Type below</div>
        </div>
        <div style={{display:"flex"}}>
        <div className={"child-div"} ><img src={require('../images/img.png')} /></div>
        <div className={"child-div"}><img src={require('../images/construction.png')}  />
        <div style={{textAlign:"center"}}>Construction</div>  
       
        </div>
        <div className={"child-div"}><img src={require('../images/education.png')} />
        <div style={{textAlign:"center"}}>Education</div>  
        </div>
        <div className={"child-div"}><img src={require('../images/consulancy.png')} />
        <div style={{textAlign:"center"}}>Consultancy</div>  </div>
        </div>
        <div style={{display:"flex",marginTop:"100px"}}>
        <div className={"child-div"}><img src={require('../images/logistics.png')} />
        <div style={{textAlign:"center"}}>Logistics</div>  </div>
        <div className={"child-div"}><img src={require('../images/manufacturing.png')} />
        <div style={{textAlign:"center"}}>Manufacturing</div>  </div>
        <div className={"child-div"}><img src={require('../images/tourism.png')} />
        <div style={{textAlign:"center"}}>Tourism</div>  </div>
        <div className={"child-div"}><img src={require('../images/it.png')} />
        <div style={{textAlign:"center"}}>IT</div>  </div>

        </div>
         
        <div style={{display:"flex",justifyContent:"center"}}>
           <button type="button" className={"signupBtn"} >Next</button>
        </div>
        
        
        </div>
      
    )
}

export default HomeComponent;