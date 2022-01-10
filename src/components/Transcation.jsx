import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

function Transcation({id,text,amount}) {
    const sign=amount>0 ? "+" : "-";
    const {deleteTranscation}=useContext(GlobalContext)
    let moneyTransfer=(num)=>{
        let p=num.toFixed(2).split('.');
        return (
            (p[0].split('')[0]==="-"?"-":"+")
            +"$ "+
            p[0].split('').reverse().reduce((acc,current,i,array)=>{
                return current==="-" ? acc :current+(i && !(i%3)? ",":"" )+acc
            },"")
            +"."
            +p[1]
        )
    }
    return (
        <li className={amount>0 ? "plus": "minus"}>
               {text} <span>{moneyTransfer(amount)}</span><button className="delete-btn" onClick={()=>deleteTranscation(id)}>x</button>
        </li>
    )
}

export default Transcation
