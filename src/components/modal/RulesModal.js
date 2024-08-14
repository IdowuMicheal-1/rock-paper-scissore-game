import React,{useState} from 'react'
import {createPortal} from 'react-dom'

const RulesModal = (props) => {

    const Modal = (props) => {
        return <div>
            <div className='bg-white fixed w-screen h-screen rounded-lg z-40 lg:w-1/3 lg:h-2/3 lg:ml-[30%] lg:mt-[5%]'>{props.children}</div>
            </div>
    }

    const Backdrop = (props) => {
        return( 
        <div>
        </div>)
    }

  return (
    <div>
        {createPortal(<Modal>{props.children}</Modal>,document.getElementById('overlay'))}
        {createPortal(<Backdrop />,document.getElementById('overlay'))}
    </div>
  )
}

export default RulesModal