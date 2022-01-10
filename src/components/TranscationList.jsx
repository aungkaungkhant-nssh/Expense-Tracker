import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transcation from './Transcation'

function TranscationList() {
    const {transcations}=useContext(GlobalContext)
    return (
        <>  
        <h3>History</h3>
            <ul id="list" className="list">
                {
                    transcations.map((transcation)=>(
                        <Transcation key={transcation.id} text={transcation.text} amount={transcation.amount} id={transcation.id}/>
                    ))
                }
                
            </ul>  
        </>
    )
}

export default TranscationList
