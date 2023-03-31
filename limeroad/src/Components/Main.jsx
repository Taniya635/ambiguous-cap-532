import React from 'react'
// import {Box,Button, Img} from '@chakra-ui/react'
// import {Image} from '@chakra-ui/react'
import {Navigate} from 'react-router-dom'


const Main = () => {
  return (
    <div>
        <img style={{width:"1450px", height:"800px"}} src="https://media.istockphoto.com/id/1376080879/photo/cheerful-smiling-model-profile-side-view-brunette-beauty-woman-with-nude-make-up-smooth-skin.jpg?s=612x612&w=0&k=20&c=rXhqph_-RJOU8IpIBUnLAUM6QTsEPLNjwQSGunh7YXk=" alt="" />
        <div style={{position:"relative", bottom:"650px",right:"300px"}} >
            <h1 style={{fontFamily:"revert-layer", color:"white", fontSize:"60px",bottom:"400px"}}>Fashionista</h1>
            <h1 style={{fontFamily:"-moz-initial",color:"white",fontSize:"40px"}}>India's most loved</h1>
            <h1 style={{fontFamily:"-moz-initial",color:"white",fontSize:"40px"}}>Fashion Platform</h1>
            
            <button style={{background:"green", border:"black", margin:"5px", width:"180px", height:"40px",borderRadius:"0.2rem",fontSize:"20px",cursor:"pointer"}}>Shop men</button>
            <button style={{background:"green", border:"black", margin:"5px", width:"180px",height:"40px",borderRadius:"0.2rem",fontSize:"20px",cursor:"pointer"}}>Shop women</button>
            <p style={{color:"white"}}>Have an account?  <a href="#" style={{textDecoration:"none", color:"white"}}>Log in</a> </p>
        </div>
    </div>

  )
}

export default Main