import React from 'react'

const ScoreTab = () => {
  return (
        <div className='border-2 border-headerOutline rounded-xl flex px-4 py-4 justify-between items-center md:max-w-xl md:mx-32 lg:mx-64 lg:max-w-2xl'>
            <div className='font-serif text-white font-bold text-2xl uppercase md:text-3xl'>
                <p className='-mb-3'>Rock</p>
                <p className='-mb-3'>Paper</p>
                <p>Scissors</p>
            </div>
            <div className='bg-white rounded-md uppercase text-scoreText px-6 py-3 font-serif items-center'>
                <p className='font-semibold text-lg'>Score</p>
                <h4 className='text-6xl font-bold text-darkText'>12</h4>
            </div>
        </div>
  )
}

export default ScoreTab