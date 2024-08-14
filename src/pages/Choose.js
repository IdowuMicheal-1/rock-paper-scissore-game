import React from 'react'
import ScoreTab from '../components/ScoreTab'
import RuleBtn from '../components/RuleBtn'
import rock from '../assets/images/icon-rock.svg'

const Choose = () => {
  return (
    <div className='bg-color'>

        {/* Score */}
        <ScoreTab />

    <div className='flex mt-28 justify-between md:max-w-2xl md:px-6 lg:px-28 md:ml-20 lg:ml-56'>
        <div className='flex flex-col items-center'>
        <p className='hidden text-white uppercase font-serif font-semibold md:block md:mb-4'>You Picked</p>
            <img src={rock} alt='rock' className='bg-white rounded-full p-6 border-rockGradient  md:border-18 md:p-10 border-12 mb-4'/>
            <p className='md:hidden text-white uppercase font-serif font-semibold'>You Picked</p>
        </div>
        <div className='flex flex-col items-center'>
        <p className='hidden text-white uppercase font-serif font-semibold md:block md:mb-4'>The house picked</p>
            <div className='bg-toRadialGradient rounded-full p-14 md:p-16 mb-4'></div>
            <p className='md:hidden text-white uppercase font-serif font-semibold'>The house picked</p>
        </div>
    </div>
        {/* Rules */}
        <RuleBtn />
    </div>
  )
}

export default Choose