import React, { useState } from 'react'
import axios from 'axios'
import CreatePotluck from './CreatePotluck';
// const credentials = {
//     username: "",
//     password: ""
// }
const Login = ()=>{
    const [value, setValue]= useState({username: "",
    password: ""})
    

    const handleChange = e => {
        setValue({
              ...value,
            [e.target.name]: e.target.value
        });
      };
      
     const login = e => {
        e.preventDefault(); 
        axios.post('https://potluck-planner-2.herokuapp.com/api/auth/login', value)
          .then(res => {
              console.log(res)
            localStorage.setItem("token", res.data.token);
         
            // this.props.history.push('/friends')
          })
          .catch(err=> {
            console.log(err);
          });
      };
return(
    <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={value.username}
            onChange={handleChange}
            placeholder='Username'
            style={{padding:'10px'}}
          /><br/>
          <input
            type="password"
            name="password"
            value={value.password}
            onChange={handleChange}
            placeholder='Password'
            style={{padding:'10px', margin:'10px'}}
          /><br/>
          <button style={{padding:'10px'}}>Log in</button>
        </form>
        
    </div>
)
}
export default Login