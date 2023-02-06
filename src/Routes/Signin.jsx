import React from 'react'

const SignIn = () => {
  return (
    <div className='text-center flex flex-col items-center justify-center min-h-[400px] w-full'>
       <p className='p-3'>Sign In</p>
    
        <div className=''>
          <form className='flex flex-col max-w-[300px]'>
        <input className='text-black rounded-lg p-2 h-8'
        placeholder='Enter your email'
        type="text"/>
         
         <label className='' >Hello</label>
         <input 
         type="password"
          className='text-black rounded-lg p-2 h-8'
          placeholder='Enter Password'
          />
          </form>
        </div>
    
    
    
    </div>


  )
}

export default SignIn