import React, { useContext } from 'react'
import RulesModal from './modal/RulesModal'
import { MdOutlineCancel } from "react-icons/md";
import { RuleContext } from '../context/rule-provider';
import rules from '../assets/images/image-rules.svg'

const Rule = () => {
    const {showRule,setShowRule} = useContext(RuleContext)

    const setRuleHandler = () => {

        setShowRule((prev) => !prev)
      }

    
  return (
    <RulesModal>
        <div className='mx-auto  flex flex-col items-center justify-center mt-14'>
            <div className='flex justify-between'>
            <h4 className='text-toRadialGradient font-serif font-bold text-2xl'>RULES</h4>
            <MdOutlineCancel onClick={setRuleHandler} onChange={setRuleHandler} size={40} className='text-radialGradient hidden md:block'/>
            </div>
            {/* <h4 className='text-toRadialGradient font-serif font-bold text-2xl'>RULES</h4> */}
            <div className='mt-20 mb-28 lg:mt-10'>
                <img src={rules} alt='rules'/>
            </div>
        <MdOutlineCancel onClick={setRuleHandler} onChange={setRuleHandler} size={40} className='text-radialGradient md:hidden'/>
        </div>
    </RulesModal>
  )
}

export default Rule