import React from 'react'
import {createPortal} from 'react-dom'

const RulesModal = (prop) => {

    const Modal = (props) => {
        return <div>{props.chilren}</div>
    }

    const Backdrop = (props) => {
        return <div>{props.chilren}</div>
    }

  return (
    <div>
        {createPortal(<Modal></Modal>,document.getElementById('body'),<Backdrop></Backdrop>,document.getElementById('body'))}
        {createPortal(<Modal></Modal>,document.getElementById('body'))}
    </div>
  )
}

export default RulesModal