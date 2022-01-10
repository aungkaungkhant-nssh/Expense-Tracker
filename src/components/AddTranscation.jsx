import React,{useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'

function AddTranscation() {
    const {transcations,addTranscation}=useContext(GlobalContext)
    const [text,setText]=useState("")
    const [amount,setAmount]=useState(0)
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newTranscation={
            id:transcations.length,
            text,
            amount:+amount
        }
        addTranscation(newTranscation)
        setText("")
        setAmount("")
    }
    return (
       <>
            <h3>Add new transaction</h3>
            <form id="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" placeholder="Enter text..."  value={text} onChange={(e)=>setText(e.target.value)}/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                        >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" id="amount" placeholder="Enter amount..."
                    value={amount} onChange={(e)=>setAmount(e.target.value)}
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>
       
       </>
    )
}

export default AddTranscation
