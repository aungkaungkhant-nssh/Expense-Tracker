import React,{createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initalState={
    transcations:[
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

export const GlobalContext=createContext(initalState);

function GlobalProvider({children}){
    const [state,dispatch]=useReducer(AppReducer,initalState);
    const addTranscation=(newTranscation)=>{
        dispatch({type:"ADD_TRANSCATION",payload:newTranscation})
    }
    const deleteTranscation=(id)=>{
        dispatch({type:"DELETE_TRANSCATION",payload:id})
    }
    return(
        <GlobalContext.Provider value={{transcations:state.transcations,addTranscation,deleteTranscation}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider;


