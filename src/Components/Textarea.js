import React, { useState } from 'react';
import '../index.css';

export default function Textarea(props) {
    const convertUpper = ( )=>{
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleOnChange =(e)=>{
     setText(e.target.value)
    }
    const [text, setText] = useState('Enter Text To Analyze.......');
  return (

<>
    <div className='part1'>
  <h1 className='text-center'>{props.title}</h1>      
<textarea id="myBox" name="" value={text} onChange={handleOnChange} cols="30" rows="10">Enter Text To Analyze........</textarea>
<button className='upper' onClick={convertUpper} >Convert to Upper</button>
  </div>
  <div className="part2">
    <div className="summary">
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").length} words and {text.length} characters</p>
</div> 
 </div>
 </>
  )
}
