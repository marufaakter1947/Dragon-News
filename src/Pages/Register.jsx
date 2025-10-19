import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createUser,setUser,updateUser} = use(AuthContext)
    const [nameError,setNameError] = useState("");
    const handleRegister = (e)=>{
        
        e.preventDefault();
        console.log(e.target);
        const form = e.target;
        const name = form.name.value;
        if(name.length<5){
            setNameError("Name should be more than 5 character!");
            return;
        }
        else{
            setNameError("");
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name,photo,email,password});
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            const user = result.user;
            updateUser({displayName:name,photoURL: photo}).then(()=>{
 setUser({...user,displayName:name,photoURL: photo});
            }).catch((error)=>{
                console.log(error);
                setUser(user);
            })
           
        })
        .catch(error=>{
            alert(error.message);
        })

    }
    return (
         <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register Your account</h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
            <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Enter your name" />

{nameError && <p className='text-red-400 text-sm'>{nameError}</p>}

          <label className="label">Photo URL</label>
          <input type="text" name='photo' className="input" placeholder="Enter your image URL" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required/>
         
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          <p className='font-semibold text-center pt-5'>Already Have an account? <Link className='text-secondary' to="/auth/login">Login</Link></p>
        </fieldset>
      </form>
    </div>
        </div>
    );
};

export default Register;