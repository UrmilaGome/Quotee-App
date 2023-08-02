
import {createContext, useReducer } from "react";
import QuoteReducer from "./QuoteReducer";

const QuoteContext = createContext();

export const QuoteProvider = ({children}) => {

const initialstate = {
    quoteData :{}
};

const[state,dispatch] = useReducer(QuoteReducer,initialstate)


    return (
        <QuoteContext.Provider value = {{...state,dispatch}}>
            {children}
        </QuoteContext.Provider>
    );
};

export default QuoteContext;