import React, {useState} from 'react';
import './App.css';
import Display from './components/Display'
import Dashboard from './components/Dashboard';

// export const addBall = currentBall => {
//   if (currentBall > 4) {
//     return currentBall + 1;
//   }else{
//     return 0;
//   };
// };

// export const addStrile = currentStrike => {
//   if (currentStrike > 3) {
//     return currentStrike + 1;
//   }else{
//     return 0;
//   };
// };

// export const addHit = currentBall => {
//   if (currentBall > 4) {
//     return currentBall + 1;
//   }else{
//     return 0;
//   };
// };


function App() {
  

  
  return (
   <div>
     <h1>Welcome to the Ball Game</h1>
     <Dashboard />

   </div>
  );
}

export default App;
