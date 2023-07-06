import React, { useState } from 'react'
import "./operation.css";
let num1,num2;
const Operations = () => {
    let [ans,setAns] = useState("");
    const firstValue =(event)=>{
        num1 = event.target.value;
        
    }
    const secondValue =(event)=>{
         num2 = event.target.value;

    }
    const Addition = () =>{
        setAns("Your ans is : "+(Number(num1)+Number(num2)));
    }
  return (
    <div style={{margin:"1%"}}>
      <h2>Enter the digits :</h2>
      <input type="text" style={{padding:"1%",margin:"1%"}} onChange={firstValue} placeholder='Enter number'/> 
      
      <input type="text" style={{padding:"1%",margin:"1%"}} onChange={secondValue} placeholder='Enter number'/>

      <br/>

      <input className='btn' style={{margin:"1%"}} type='button' onClick={Addition}  value={"Add"}/>
      <input className='btn' style={{margin:"1%"}} type='button' value={"Sub"}/>
      <input className='btn' style={{margin:"1%"}} type='button' value={"Mul"}/>
      <input className='btn' style={{margin:"1%"}} type='button' value={"Div"}/>
      <br />
      <input style={{margin:"1%", border:"1px"}} className='btn' value={ans} readOnly/>

    </div>
  )
}

export default Operations
