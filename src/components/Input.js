import React, { useState } from "react";

const Input = () =>{
const [num1, setNum1] = useState("");
const [num2 , setNum2] = useState("");
const [result ,setResult] =useState("");
const [error , setError] = useState("");

function validation(){
    if(num1===""){
        setError("Num1 cannot be Empty ");
        return false;
    }
    if(num2===""){
        setError("Num2 cannot be Empty ");
        return false;
    }
    if (!/^-?\d+(\.\d+)?$/.test(num1) || !/^-?\d+(\.\d+)?$/.test(num2)) {
        setError('Please enter valid numbers.');
        return false;
      }
      setError('');
    return true;
}

function Add(){
    if(validation()){
        const sum = parseFloat(num1)+parseFloat(num2);
        
        setResult(`Result: ${sum}`);
    }
}
function sub(){
    if(validation()){
        const subrt = parseFloat(num1)-parseFloat(num2);
        setResult(`Result: ${subrt}`);
    }
}
function prod(){
    if(validation()){
        const pr = parseFloat(num1)*parseFloat(num2);
        setResult(`Result: ${pr}`);
    }
}
function div(){
    if(validation()){
        const div = parseFloat(num1)/parseFloat(num2);
        setResult(`Result: ${div}`);
    }
}


    return(
        <div className="Main">
        <h1>React Calculator</h1>
<input type="text" placeholder="Num1" value={num1} onChange={(e)=>setNum1(e.target.value)}/> <br/>
<input type="text" placeholder="Num2" value={num2} onChange={(e)=>setNum2(e.target.value)}/><br/>

<button onClick={Add}>+</button>
<button onClick={sub}>-</button>
<button onClick={prod}>*</button>
<button onClick={div}>/</button>
        
        {result && <p style={{color:"green"}}>{result}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      

        </div>
    )
 }
 export default Input;