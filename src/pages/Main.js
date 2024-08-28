import React,{useContext, useEffect, useId, useState} from 'react'
import rock from '../assets/images/icon-rock.svg'
import paper from '../assets/images/icon-paper.svg'
import scissors from '../assets/images/icon-scissors.svg'
// import pentagon from '../assets/images/bg-pentagon.svg'
import triangle from '../assets/images/bg-triangle.svg'
import ScoreTab from '../components/ScoreTab'
import RuleBtn from '../components/RuleBtn'
import Rule from '../components/Rule'
import { RuleContext } from '../context/rule-provider'
import { useNavigate } from 'react-router-dom'
import InputTest from './InputTest'
import Toasty from './Toasty'


const Main = () => {
  const navigate = useNavigate()
  const {showRule, setShowRule} = useContext(RuleContext)
  const {choice,setChoice} = useContext(RuleContext)
  // const [mousePosition,setMousePosition] = useState({x:window.innerHeight,y:window.innerWidth})

  // useEffect(() => {
  //   function mouseHandler(event) {
  //     setMousePosition({
  //       x:window.innerHeight,
  //       y:window.innerWidth,
  //     })
  //   }
  //   window.addEventListener('resize',mouseHandler)
  // },[])

  // const getRockHandler = () => {
  //   setChoice(1)
  //   navigate('/game')
  // }

  // const getPaperHandler = () => {
  //   setChoice(2)
  //   navigate('/game')
  // }

  // const getScissorsHandler = () => {
  //   setChoice(3)
  //   navigate('/game')
  // }

  const getChoiceHandler = (choice) => {
    switch(choice){
      case 'rock':
        setChoice(1)
        break;
      case 'paper':
        setChoice(2)
        break;
      default:
        setChoice(3)
    }
    navigate('/game')
  }
  return (
    
    <div className='bg-color overflow-x-hidden'>
      <div className="wrapper">
 {/* <p>
 {mousePosition.x} / {mousePosition.y}
 </p> */}
 </div>
      
      {showRule &&  <Rule />}
     
        {/* Score Tab */}
        <ScoreTab />

        {/* Boby  */}
        <div className='md:max-w-2xl md:mx-auto md:px-28 md:py-4 mx-auto mt-24 mb-14'>
            <div className='px-8 py-4 relative mx-auto'>
                <img src={triangle}  alt='triangle' className='w-[100%] h-[100%]'/>
                <div>
                    <img onClick = {() => getChoiceHandler('rock')} src={rock} alt='rock' className='absolute top-0 left-0 mt-44 ml-[6.5rem] bg-white rounded-full p-6 border-rockGradient border-12 lg:ml-[8rem] md:ml-[8rem] cursor-pointer hover:border-toRockGradient lg:border-20' />
                    <img onClick = {() => getChoiceHandler('paper')} src={paper} alt='paper' className='absolute top-0 left-0 ml-5 bg-white rounded-full p-5 border-paperGradient border-12 cursor-pointer hover:border-toPaperGradient lg:border-20'/>
                    <img onClick = {() => getChoiceHandler('scissors')} src={scissors} alt='scissors' className='absolute top-0 left-0 ml-[13rem] bg-white rounded-full p-5 border-scissorsGradient border-12 lg:ml-[16rem] md:ml-[15rem] cursor-pointer hover:border-toScissorsGradient lg:border-18'/>
                </div>
            </div>
        </div>

        {/* Rule Btn */}
        <RuleBtn />
       
    </div>
  )
}

export default Main