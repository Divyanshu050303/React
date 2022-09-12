import React,{useState} from 'react'


export default function TextForm() {
    const UpHandle =()=>{
        console.log("UpperCase Button is clicked")
        setText("Text time ")
      
    }
    const handle =()=>{
        console.log("handle Button is clicked")
        setText(event.target.value)
    }
    const [text, setText]= useState("Enter Your Text Here")
  return (
    <div>
         
        <div className="mb-3">
            <label for="myBox" className="form-label" value={text} onChange={handle}>Enter Your Text Below</label>
            <textarea className="form-control" id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btp-primary" onClick={UpHandle}>Convert to UpperCase</button>
    </div>
  )
}
