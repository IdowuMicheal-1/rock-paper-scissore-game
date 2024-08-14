import { createContext,useState} from "react";

export const RuleContext = createContext();
export const RuleProvider = ({children}) => {
    const [showRule,setShowRule] = useState(false)

return (
    <RuleContext.Provider value={{showRule,setShowRule}}>
        {children}
    </RuleContext.Provider>
)

}