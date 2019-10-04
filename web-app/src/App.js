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
  const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);

  
  return (
   <div>
     <h1>Welcome to the Ball Game</h1>
     <Dashboard strikes={strikes} balls={balls} setStrikes={setStrikes} setBalls={setBalls}/>
     <Display strikes={strikes} balls={balls} />

   </div>
  );
}

export default App;
