import React,{useState} from 'react'


export default function TextForm(props) {
    const UpHandle =()=>{
        // console.log("UpperCase Button is clicked");
        let newText=text.toUpperCase();
        setText(newText);
      
    }
    const handle =(event)=>{
        // console.log("handle Button is clicked");
        setText(event.target.value)
    }
    const [text, setText]= useState("Enter Your Text Here");
    const [darkMode, setDarkMode]=useState({
        color:'black',
        backgroundColor:'white'
    });
    const [btnText, setBtnText]=useState("Enable Dark Mode")
   const dark=()=>{
        if(darkMode.color==='black'){
            setDarkMode({
                color:"white",
                backgroundColor:'black'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setDarkMode({
                color:"black",
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode")
        }
    }
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'#022d58'}}>
         <h1>{props.heading}</h1>
        <div className="mb-3">
            
            <textarea   className="form-control" value={text} onChange={handle}  style={{backgroundColor:props.mode==='dark'?'gray':'white', color : props.mode==='dark'?'white':'#022d58'}} id="myBox" rows="8" ></textarea>
        </div>
        <button type="button" className="btn btp-primary" onClick={UpHandle}>Convert to UpperCase</button>
        <button className="btn btp-primary" onClick={dark}>{btnText}</button>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'#022d58'}}> 
    <h1>Your Text </h1>
    <p> {text.split(" ").length}word and {text.length}characters </p>
    <p>{0.008*text.split(" ").length} Minute to read </p>
    </div>
    </>
  )
}
