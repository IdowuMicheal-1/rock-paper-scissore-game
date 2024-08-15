import React, { useContext, useEffect, useState } from 'react';
import ScoreTab from '../components/ScoreTab';
import RuleBtn from '../components/RuleBtn';
import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';
import { RuleContext } from '../context/rule-provider';
import { Navigate, useNavigate } from 'react-router-dom';

const Choose = () => {
  const navigate = useNavigate();
  const { choice, setChoice, setRandomNumbers, setScore, score } = useContext(RuleContext);
  const [loading, setLoading] = useState(true);
  const [random, setRandom] = useState(0);

  // Generate a random number and set it to state
  useEffect(() => {
    const generatedRandom = Math.trunc(Math.random() * 3) + 1;
    setRandom(generatedRandom);
    setRandomNumbers(generatedRandom);
  }, [setRandomNumbers]);

  // Handle the loading state and navigate based on choice and random values
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);

      // Determine navigation based on choice and random values
      if (choice === 1) {
        if (random === 2) {
          if (score > 0) {
            setScore(prevScore => prevScore - 1);
          }
          navigate('/lose');
        } else if (random === 3) {
          setScore(prevScore => prevScore + 1);
          navigate('/win');
        } else if (random === 1) {
          navigate('/draw');
        }
      } else if (choice === 2) {
        if (random === 1) {
          setScore(prevScore => prevScore + 1);
          navigate('/win');
        } else if (random === 3) {
          if (score > 0) {
            setScore(prevScore => prevScore - 1);
          }
          navigate('/lose');
        } else if (random === 2) {
          navigate('/draw');
        }
      } else if (choice === 3) {
        if (random === 1) {
          if (score > 0) {
            setScore(prevScore => prevScore - 1);
          }
          navigate('/lose');
        } else if (random === 2) {
          setScore(prevScore => prevScore + 1);
          navigate('/win');
        } else if (random === 3) {
          navigate('/draw');
        }
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [choice, random, navigate, setScore, score]);

  return (
    choice ? 
    <div className='bg-color'>
      {/* Score */}
      <ScoreTab />

      <div className='flex mt-28 justify-between md:max-w-2xl md:px-6 lg:px-28 md:ml-20 lg:ml-56'>
        <div className='flex flex-col items-center'>
          <p className='hidden text-white uppercase font-serif font-semibold md:block md:mb-4'>You Picked</p>
          {choice === 1 && <img src={rock} alt='rock' className='bg-white rounded-full p-6 border-rockGradient md:border-18 md:p-10 border-12 mb-4' />}
          {choice === 2 && <img src={paper} alt='paper' className='bg-white rounded-full p-6 border-paperGradient md:border-18 md:p-10 border-12 mb-4' />}
          {choice === 3 && <img src={scissors} alt='scissors' className='bg-white rounded-full p-6 border-scissorsGradient md:border-18 md:p-10 border-12 mb-4' />}
          <p className='md:hidden text-white uppercase font-serif font-semibold'>You Picked</p>
        </div>

        <div className='flex flex-col items-center'>
          <p className='hidden text-white uppercase font-serif font-semibold md:block md:mb-4'>The house picked</p>
          {loading && <div className='bg-toRadialGradient rounded-full p-14 md:p-16 mb-4'></div>}
          {!loading && random === 1 && <img src={rock} alt='rock' className='bg-white rounded-full p-6 border-rockGradient md:border-18 md:p-10 border-12 mb-4' />}
          {!loading && random === 2 && <img src={paper} alt='paper' className='bg-white rounded-full p-6 border-paperGradient md:border-18 md:p-10 border-12 mb-4' />}
          {!loading && random === 3 && <img src={scissors} alt='scissors' className='bg-white rounded-full p-6 border-scissorsGradient md:border-18 md:p-10 border-12 mb-4' />}
          <p className='md:hidden text-white uppercase font-serif font-semibold'>The house picked</p>
        </div>
      </div>
      {/* Rules */}
      <RuleBtn />
    </div> : <Navigate to='/' />
  );
};

export default Choose;
