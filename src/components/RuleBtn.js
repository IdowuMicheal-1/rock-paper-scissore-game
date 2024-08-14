import React,{useContext, useState} from 'react'
import { RuleContext } from '../context/rule-provider'

const RuleBtn = () => {
  
  const {showRule,setShowRule} = useContext(RuleContext);
  const setRuleHandler = () => {
    setShowRule((prev) => !prev)
    console.log('click')
  }
  
  return (
        <div className='mt-16 mx-auto md:ml-[90%]'>
            <div className=' bg-radialGradient border border-white rounded-md max-w-24 px-4 py-2 text-center cursor-pointer'>
            <p className='font-serif uppercase text-sm text-white font-semibold' onClick={setRuleHandler} >Rules</p>
            </div>
        </div>
  )
}

export default RuleBtn