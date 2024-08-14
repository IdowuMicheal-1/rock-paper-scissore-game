import React,{useContext, useState} from 'react'
import rock from '../assets/images/icon-rock.svg'
import paper from '../assets/images/icon-paper.svg'
import scissors from '../assets/images/icon-scissors.svg'
// import pentagon from '../assets/images/bg-pentagon.svg'
import triangle from '../assets/images/bg-triangle.svg'
import ScoreTab from '../components/ScoreTab'
import RuleBtn from '../components/RuleBtn'
import Rule from '../components/Rule'
import { RuleContext } from '../context/rule-provider'

const Main = () => {
  
  const {showRule, setShowRule} = useContext(RuleContext)
  return (
    <div className='bg-color'>
      {showRule &&  <Rule />}
     
        {/* Score Tab */}
        <ScoreTab />

        {/* Boby  */}
        <div className='md:max-w-2xl md:mx-auto md:px-28 md:py-4 mx-auto mt-24'>
            <div className='px-8 py-4 relative mx-auto'>
                <img src={triangle}  alt='triangle'/>
                <div>
                    <img src={rock} alt='rock' className='absolute top-0 left-0 mt-44 ml-32 bg-white rounded-full p-6 border-rockGradient border-12'/>
                    <img src={paper} alt='paper' className='absolute top-0 left-0 ml-5 bg-white rounded-full p-5 border-paperGradient border-12'/>
                    <img src={scissors} alt='scissors' className='absolute top-0 left-0 ml-60 bg-white rounded-full p-4 border-scissorsGradient border-12'/>
                </div>
            </div>
        </div>

        {/* Rule Btn */}
        <RuleBtn />
    </div>
  )
}

export default Main