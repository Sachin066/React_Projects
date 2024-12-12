import React, { useState } from 'react'


export default function Home() {
    const [inputText, setInputText] = useState("");
    const [displayText, setDisplayText] = useState("");

    const Changetext =(e) =>{
        setInputText(e.target.value);
    };

    // Uppercase

    const hendelUc = () =>{
        if (inputText.trim() !== "") {
            setDisplayText([...displayText, inputText.toUpperCase()]); 
            setInputText(""); 
          }
        
    }

    // Loarcase

    const hendelLc = () =>{
        if (inputText.trim() !== "") {
            setDisplayText([...displayText, inputText.toLowerCase()]); 
            setInputText(""); 
          }
        
    }

// copy 

    const hendelCopy = () =>{
        if (inputText.trim() !== "") {
            setDisplayText([...displayText, inputText.toLowerCase()]); 
            setInputText(""); 
          }
        
    }


    const handleClearClick = () => {
        setDisplayText([]);
      };

  return (
    
    <div className="h-screen flex  flex-col">
      {/* Input field */}
      <input 
        type="text" 
        value={inputText}
        onChange={Changetext}
        className="w-2/4 h-52 ml-96 mt-32 mb-4 p-2 border border-gray-300 rounded-lg text-[32px]" 
        placeholder="Enter text"
      />

      {/* Buttons */}
      <div className="flex space-x-4 ml-96">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg" onClick={hendelUc}>Uppercase</button>
        <button className="bg-red-500 text-white px-6 py-2 rounded-lg"onClick={hendelLc}>lowercase</button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg"onClick={handleClearClick}>Clear Text</button>
        <button className="bg-red-500 text-white px-6 py-2 rounded-lg">Copy to Clipboard</button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Clear Space</button>
        <button className="bg-red-500 text-white px-6 py-2 rounded-lg">Reverse the Sentence/word</button>
      </div>

      <div className= "p-4  ml-96 mt-5 w-2/4 h-52 ml text-center border rounded-md bg-white text-black border-gray-300">
      
      
      </div>
    </div>
  )
}
