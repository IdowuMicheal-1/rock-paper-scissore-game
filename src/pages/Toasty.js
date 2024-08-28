import React,{useEffect, useRef, useState} from 'react'
import classes from './Toasty.module.css'


const Toasty = () => {
    const [isShown,setIsShown] = useState(false)
    const wrapperRef = useRef()
    useEffect(() => {
        // const wrapperElement = document.querySelector('.toasty-wrapper')
        const observer = new IntersectionObserver((entries) => {
            console.log(entries)
        const [entry] = entries;
    
       
        setIsShown(entry.isIntersecting) 
    
    })
    observer.observe(wrapperRef.current)

    return () => {
        observer.disconnect()
    }
    })
    const translateX = isShown ? '0%' : '120%'

  return (
    <div ref={wrapperRef} className="relative pointer-events-none">
    <div className="absolute right-0 bottom-0 text-9xl transform duration-500" style={{transform:`translateX(${translateX})`}}>🧒</div>
    </div>
  )
}

export default Toasty