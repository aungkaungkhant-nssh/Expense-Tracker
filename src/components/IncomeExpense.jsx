import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'
function IncomeExpense() {
    const {transcations}=useContext(GlobalContext)
    const income=transcations.filter((t)=>t.amount>0).reduce((acc,item)=>acc+=item.amount,0);
    const expense=transcations.filter((t)=>t.amount<0).reduce((acc,item)=>acc+=item.amount,0);
    let moneyTransfer=(num)=>{
        const p=num.toFixed(2).split('.');
        return(
            (p[0].split('')[0]==="-"?"-":"+")+
            "$ "+
            p[0].split('').reverse().reduce((acc,current,i,array)=>{
                return current==="-"? acc: current+(i && !(i%3) ? "," : "" )+acc
            },'')+
            "."+p[1]
        )
       
    }
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">{moneyTransfer(income)}</p>
                </div>
                <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">{moneyTransfer(expense)}</p>
            </div>
      </div>
    )
}

export default IncomeExpense
