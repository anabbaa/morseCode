
import React, {useState}from "react";
import Header from "./components/Header";
import Data from "./data.json";

function App() {
  const [userInput, setUserInput] = useState("");
  const [info, setInfo] = useState(Data);
  const [translatedText, setTranslatedText] = useState("");

  function handelInfo(e){

setUserInput(e.target.value);
}
function translated(e){
  e.preventDefault();
let text = userInput;
  let result = "";
  for (let i = 0; i < text.length; i++) {
      result += " " + info[text[i].toLowerCase()];
    }
    setTranslatedText(result);

  }
  
  return (
    <React.Fragment>
      <Header />
      <form>
        <div className="container">
          <div className="Input">Input Message:</div>
          <textarea
            cols="50"
            rows="8"
            onChange={handelInfo}
            onKeyUp={translated}
            placeholder="Type a message here"
          />
        </div>
        
        <div className="container">
          <div className="Output"> Output Message:</div>
          <textarea
            cols="50"
            rows="8"
            placeholder="Here comes Morse code"
            value={translatedText}
            readOnly
          />
        </div>
      </form>
    </React.Fragment>
  );
};
export default App;
