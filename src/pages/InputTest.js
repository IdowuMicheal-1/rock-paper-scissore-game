import React, { useId } from 'react'

const InputTest = () => {
    const id= useId()
    const username= `${id}-username`
    const password= `${id}-password`
  return (
    <div>
        <div>
        <label htmlFor={username}>Username</label>
        <input id={username} type='text'/>
        </div>
        <div>
        <label htmlFor={password}>Password</label>
        <input id={password} type='password'/>
        </div>
      
    </div>
  )
}

export default InputTest
