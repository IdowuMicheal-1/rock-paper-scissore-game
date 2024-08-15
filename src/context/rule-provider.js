import { createContext,useState} from "react";

export const RuleContext = createContext();
export const RuleProvider = ({children}) => {
    const [showRule,setShowRule] = useState(false)
    const [choice,setChoice] = useState('');
    const [randomNumbers,setRandomNumbers] = useState();
    const [score,setScore] = useState(0);

return (
    <RuleContext.Provider value={{showRule,setShowRule,choice,setChoice,randomNumbers,setRandomNumbers,score,setScore}}>
        {children}
    </RuleContext.Provider>
)

}