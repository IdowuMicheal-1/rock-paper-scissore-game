import { createContext,useEffect,useState} from "react";

export const RuleContext = createContext();
export const RuleProvider = ({children}) => {
    const [showRule,setShowRule] = useState(false)
    const [choice,setChoice] = useState('');
    const [randomNumbers,setRandomNumbers] = useState();
    
    const [score,setScore] = useState(() => {
        const storedValue = localStorage.getItem('score');
        if( (storedValue === 'undefined') || (storedValue === 'null')) {
            return Number(0)
        }
        return Number(storedValue)});
    // const score = localStorage.getItem('score')


    useEffect(() => {
        localStorage.setItem('score',score)
    },[score])

return (
    <RuleContext.Provider value={{showRule,setShowRule,choice,setChoice,randomNumbers,setRandomNumbers,score,setScore}}>
        {children}
    </RuleContext.Provider>
)

}