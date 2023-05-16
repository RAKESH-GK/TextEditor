import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUPcase=()=>{
    setText(text.toUpperCase());
    props.showAlert("Text converted to uppercase","success");
  }
  const handleLOcase=()=>{
    setText(text.toLowerCase());
    props.showAlert("Text converted to lowercase","success");
  }

  const handleClearText=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard..","success");
  }

  const handleChange=(event)=>{
    setText(event.target.value);
  }
  const clearText=()=>{
    if(text.length>0){
    setText('');
    props.showAlert("Text has cleared..","success");
    }else{
      props.showAlert("Please put some text","warning");
    }
  }

  const [text, setText ]=useState("");
  return (
    <>
    <div className={`container my-3 text-${props.mode==='dark'?'light':'dark'}`}>
      <div className="mb-3">
          <h2>{props.heading}</h2>
          <textarea className={`form-control border-0 bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} value={text} onChange={handleChange} id="myTextBox" rows="10"></textarea>
      </div>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1 my-1`} onClick={handleUPcase}>convert to uppercase</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1 my-1`} onClick={handleLOcase}>convert to lowercase</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1 my-1`} onClick={clearText}>Clear Text</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='dark'?'dark':'primary'} mx-1 my-1`} onClick={handleClearText}>Copy to clipboard</button>
    </div>
    <div className={`container my-3 text-${props.mode==='dark'?'light':'dark'}`}>
        <h2>Text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
    </div>
    <div hidden={text.length===0} className={`container my-3 text-${props.mode==='dark'?'light':'dark'}`}>
    <h3>Preview</h3>
    <p>{text}</p>
    </div>
    </>
  )
}
