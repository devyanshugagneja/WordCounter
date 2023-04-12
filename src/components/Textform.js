import React, {useState} from "react";

export default function Textform(props) {

  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!", "success")
  }

  const handleLowClick = ()=>{
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!", "success")
  }

  const handleClearClick = ()=>{
    console.log("textarea was cleared" + text);
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared!", "success")
  }

  const handleCopy = () => {
    console.log("text is copied");
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success")
  }

  const handleExtraSpaces = () => {
    console.log("Extra spaces are handled");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success")
  }

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value)
  }

  const [text, setText] = useState("");
  //? text = "new text"; Wrong way to change the state
  //? setText("new text"); Correct way to change the state

  const alphabets = text.match(/[a-zA-Z]/g);
  // The code text.match(/[a-zA-Z]/g) is a regular expression in JavaScript. It 
  // matches all the alphabetic characters (both lowercase and uppercase) in a given 
  // string and returns an array of all the matches.
  const alphabetCount = alphabets ? alphabets.length : 0;
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
    {/* split() method splits a string into an array based on a separator character or regular expression. */}
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{alphabetCount} characters excluding space between words</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
