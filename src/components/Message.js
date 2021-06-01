import React, {useState} from "react";




    const code =  {
        "alpha" : ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
         "m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x", "y",
          "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "!", ",", "?",
			".", "'" ],

"morse" : [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..",
			"--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----",
			"..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----", "-.-.--", "--..--",
			"..--..", ".-.-.-", ".----.",]

        };
const Message = ()=>{
    
const [userinput, setUserinput] = useState("");
function handelinfo(e)

{

setUserinput(e.target.value);

}
    return (<div>
        <input type="text" value={userinput} onChange={handelinfo}/>
        <input type="text" />

        
        


    
    </div>
    
    );

}
    

export default Message;