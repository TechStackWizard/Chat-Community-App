import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
export default function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
    </>
  );
}




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // import OpenAI from "openai";
// import { GoogleGenAI } from "@google/genai";

// function App() {


// const ai = new GoogleGenAI({ apiKey: "AIzaSyDcW2wOfAjvSPpfF0SkLPs64UEbMcwUf4I" });

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Explain how AI works in a few words",
//     config: {
//       thinkingConfig: {
//         thinkingBudget: 0, // Disables thinking
//       },
//     }
//   });
//   console.log(response.text);
// }

//   return (
//     <>
//       <button onClick={main}>Call the Google_Gemini main function</button>
//     </>
//   )
// }

// export default App
