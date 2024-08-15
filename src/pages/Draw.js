import React,{useContext,useState} from 'react'
import ScoreTab from '../components/ScoreTab'
import RuleBtn from '../components/RuleBtn'
import rock from '../assets/images/icon-rock.svg'
import scissors from '../assets/images/icon-scissors.svg'
import paper from '../assets/images/icon-paper.svg'
import { Navigate, useNavigate } from 'react-router-dom'
import { RuleContext } from '../context/rule-provider'
import Rule from '../components/Rule'


const Draw = () => {
    const navigate = useNavigate()
    const redirectHandler = () => {
        navigate('/')
    }

    const {choice,setChoice,randomNumbers,showRule} = useContext(RuleContext)
  return (
    choice ?
    
    <div className='bg-color'>
         {showRule &&  <Rule />}
        {/* Scores */}
        <ScoreTab />

        <div>
        <div className='flex mt-28 justify-between md:max-w-2xl lg:max-w-4xl md:px-6 lg:px-28 md:ml-20 lg:ml-32 items-center lg:space-x-4'>
            {/* styles */}

    {/* <!-- The radial background --> */}
    {/* <div class="absolute inset-0 rounded-full bg-gradient-radial from-blue-500 to-transparent opacity-75"></div> */}
            {/*  */}

        <div className='flex flex-col items-center justify-center'>
        <p className='hidden text-white uppercase font-serif font-semibold md:block md:mb-4'>You Picked</p>
            {/* <img src={rock} alt='rock' className='bg-white rounded-full p-6 border-rockGradient  md:border-18 md:p-10 border-12 mb-4'/> */}
            {
            choice === 1 &&  <img src={rock} alt='rock' className='bg-white rounded-full p-6 border-rockGradient  md:border-18 md:p-10 border-12 mb-4'/>
        }
        {
            choice === 2 &&  <img src={paper} alt='rock' className='bg-white rounded-full p-6 border-paperGradient  md:border-18 md:p-10 border-12 mb-4'/>
        }
        {
            choice === 3 &&  <img src={scissors} alt='rock' className='bg-white rounded-full p-6 border-scissorsGradient  md:border-18 md:p-10 border-12 mb-4'/>
        }
            <p className='md:hidden text-white uppercase font-serif font-semibold'>You Picked</p>
        </div>

        <div className='hidden md:flex md:flex-col items-center'>
            <h4 className='text-white text-5xl lg:text-4xl font-serif font-bold mb-2'>DRAW</h4>
            <p className='font-serif text-rockGradient bg-white w-56 rounded-md text-lg font-bold text-center px-2 py-2 cursor-pointer' onClick={redirectHandler}>PLAY AGAIN</p>
        </div>

        <div className='flex flex-col items-center'>
        <p className='hidden text-white uppercase font-serif font-semibold md:block md:mb-4'>The house picked</p>
        {/* <img src={scissors} alt='rock' className='bg-white rounded-full p-4 border-scissorsGradient  md:border-18 md:p-8 border-12 mb-4'/> */}
        {
            randomNumbers === 1 && <img src={rock} alt='rock' className='bg-white rounded-full p-6 border-rockGradient  md:border-18 md:p-10 border-12 mb-4'/>
        }
            {
            randomNumbers === 2 && <img src={paper} alt='rock' className='bg-white rounded-full p-6 border-paperGradient  md:border-18 md:p-10 border-12 mb-4'/>
        }
            {
            randomNumbers === 3 && <img src={scissors} alt='rock' className='bg-white rounded-full p-6 border-scissorsGradient  md:border-18 md:p-10 border-12 mb-4'/>

        }
            <p className='md:hidden text-white uppercase font-serif font-semibold'>The house picked</p>
        </div>
    </div>
        </div>
        <div className='mt-14 mx-auto flex flex-col items-center md:hidden'>
            <h4 className='text-white text-5xl font-serif font-bold mb-2'>DRAW</h4>
            <p className='font-serif text-scoreText bg-white w-56 rounded-md text-xl font-bold text-center px-2 py-4 cursor-pointer' onClick={redirectHandler}>PLAY AGAIN</p>
        </div>

        {/* Rules */}
        <RuleBtn />
    </div> : <Navigate to='/'/>
  )
}

export default Draw;