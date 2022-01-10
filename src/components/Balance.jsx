import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'
function Balance() {
    const {transcations}=useContext(GlobalContext)
    const balance=transcations.map((t)=>t.amount).reduce((acc,item)=>acc+=item,0)
    let moneyTransfer=(num)=>{
        const p=num.toFixed(2).split('.');
        return(
            "$ "+(p[0].split('')[0]==="-"?"-":"")+
            p[0].split('').reverse().reduce((acc,current,i,array)=>{
                return current==="-"? acc: current+(i && !(i%3) ? "," : "" )+acc
            },'')+
            "."+p[1]
        )
       
    }
    return (
        <>
            <h4>Your Balance</h4>
           
            <h1 id="balance">{moneyTransfer(balance)}</h1>
        </>
    )
}

export default Balance
