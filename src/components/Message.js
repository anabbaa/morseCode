import React from "react";




const MorseCode = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    }; 

const Message = (props)=>{


        
function handelinfo(e)

{

props.setUserinput(e.target.value);


}


 
    function convertToMorse() {

        
        props.setResult(props.userinput
            .toLowerCase()
            .split("")
            .map((el)=>{
                if (el === MorseCode.key ){
                    props.result = MorseCode.value.join("");

                }
                return props.result;
            
            }));
            props.setUserinput("");
            

    
    }
    


return (<div>
        <input type="text" value={props.userinput} onChange={handelinfo}/>
        <button onClick={convertToMorse}>Morse</button>
    
        <textarea
      rows="44"
      cols="44"

      value={props.result}
    ></textarea>
    </div>
    );
}
export default Message;