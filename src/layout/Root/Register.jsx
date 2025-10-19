import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthContext';

const Register = () => {

const {createUser, setUser} = use(AuthContext)
const [succes, setSucces] = useState('')
const [error, setError] = useState('')
 const [nameError, setNameError] = useState('')

  const handleRegister = (event)=>{
   
   
   
    event.preventDefault()
    const name = event.target.name.value;
    if(name.lengt < 5){
      setError("Name should be more then 5 character")
      return;
    }
    else{
      setNameError('')
    }
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photoUrl = event.target.photoUrl.value;
    event.target.reset()
    setSucces('')
    setError('')
    console.log(name, email, password, photoUrl)
   createUser( email, password)
   .then(result =>{
    console.log(result.user)
    setUser(result.user)
    setSucces('succesfully registered')
  
   })
   .catch(error => {
    console.log(error)
    setError(error)
   })
  }



    return (
        <div className=" bg-base-200 w-[400px] ml-100 ">
      
        <div className="bg-base-100 shadow-2xl">
          <div className="card-body  rounded-[10px]">
              <h1 className="text-3xl font-bold">Register your account</h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                {/* Name  */}
                <label className=" text-xl font-bold py-2">Name</label>
                <input type="text" name='name' required className="input w-full bg-base-200 py-3" placeholder="Your Name" />
                {
                  nameError && <p className='text-red-600'>{nameError}</p>
                }
                {/* photo url  */}
                <label className=" text-xl font-bold py-2">Photo URL</label>
                <input type="text"
                name='photoUrl'  className="input w-full bg-base-200 py-3" placeholder="Your Photo URL" />
                {/* Email  */}
                <label className=" text-xl font-bold py-2">Email</label>
                <input type="email"
                name='email' required className="input w-full bg-base-200 py-3" placeholder="Your Email" />
                {/* password  */}
                <label className=" text-xl font-bold py-2">Password</label>
                <input
                name='password' required
                  type="password"
                  className="input w-full bg-base-200 py-3"
                  placeholder="Enter a Password"
                />
                <div className='flex gap-2'>
                    <input type="checkbox" defaultChecked className="checkbox" />
                    <p>Accept Term & Conditions</p>
                </div>
                <button
                type='submit' className="btn btn-neutral mt-4 w-full">Register</button>
                <p className="flex gap-2 justify-center">Already Have An Account ?<Link className="text-[red]" to='/auth/register'>Login</Link></p>
               
              </fieldset>
                  {succes && <p className="text-green-600 font-semibold mt-2">{succes}</p>}
              {error && <p className="text-red-600 font-semibold mt-2">{error}</p>}
            </form>
          </div>
        </div>
     </div>
    );
};

export default Register;