import React, {useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import './signUpFormular.css'

function SignUpFormular() {

const navigate= useNavigate()

const {id}=useParams();
const startData={
    userName:'',
    firstName:'',
    lastName:'',
    email:'',
    password:''
};
const [data, setData]=useState(startData);

async  function registerUser(e){
    e.preventDefault();
    const rawResponse= await fetch(`http://localhost:4001/register`,{
        method:'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userName:e.target.userName.value,
             firstName:e.target.firstName.value,
             lastName:e.target.lastName.value,
             email:e.target.email.value,
             password:e.target.password.value,
        }),
    });
console.log(rawResponse.status);
if( rawResponse.status === 201){
    navigate('/success')
}else {
    console.error('failed')
}


}



  return (
    <div className="signup-formular">
     <h1>Sign Up</h1>
     <form className="form" onSubmit={registerUser}>
         <label>User Name
             <input name='userName' type='string' maxlength={30} required />
         </label>

         <label>First Name
             <input name='firstName' type='string' maxlength={30} required />
         </label>

         <label>Last Name
             <input name='lastName' type='string' maxlength={30} required />
         </label>


         <label>Email
             <input name='email' type='email' maxlength={30} required />
         </label>


         <label name="password">
               Password (between 5 and 10 characters)
               <input
                  name="password"
                  type="password"
                  minLength={5}
                  maxLength={10}
                  required
               />
            </label>

            <button type="submit">Send</button>

     </form>



    </div>
  )
}

export default SignUpFormular