import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Label,TextInput,Button, Alert, Spinner } from 'flowbite-react'
import { useState } from 'react';
import {signInStart,signInSuccess,signInFailure} from '../redux/user/userSlice.js'
import { useDispatch,  } from 'react-redux';
import { useSelector } from 'react-redux';
import OAuth from '../components/OAuth.jsx';

function SignIn() {
  const dispatch=useDispatch();
  const {loading,error:errorMessage}=useSelector(state=>state)
  const navigate=useNavigate();
  const [formData,setFormData]=useState({});
  // const [errorMessage,setErrorMessage]=useState(null);
  // const [loading,setLoading]=useState(false);
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()})
    console.log(e.target.value)
  }
  // console.log(formData);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!formData.email || !formData.password){
      return dispatch(signInFailure("All fields are mandatory"));
    }
    try{
      dispatch(
        signInStart()
      )
      const res=await fetch('/api/auth/signin',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify(formData)
      });
      const data=await res.json();
      if(data.success==false){
        
        return dispatch(signInFailure(data.message));
      }
      
      if(res.ok){
        dispatch(signInSuccess(data));

        navigate('/');
      }
      console.log(data);

    }catch(error){
      dispatch(signInFailure(error.message));
      

    }
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
        <Link to='/' className=' text-sm sm:text-xl font-bold dark:text-white '>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white text-4xl'>Abhi's</span>
        <span className='text-4xl'>Blog</span>
        
      </Link>
      <p className='text-sm mt-5'>
        This is a demo Project. You can sign in with your email and password
        or with Google.
      </p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div >
              <Label value="Your email"/>
              <TextInput
              type="email"
              placeholder="Email"
              id='email'
              onChange={handleChange}
              />
            </div>
            <div >
              <Label value="Your password"/>
              <TextInput
              type="password"
              placeholder="*********"
              id='password'
              onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {loading  ?(
                <>
                <Spinner size='sm'/>
                <span className='pl-3'>Loading...</span>
                </>
              ) : 'Sign In'}

              
              </Button>
              <OAuth/>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>Sign Up</Link>

          </div>
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  )
}

export default SignIn