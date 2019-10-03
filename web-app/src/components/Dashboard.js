import React, {useState} from 'react';
import Display from './Display'


const Dashboard = props => {

    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0)
    
    const addBall = balls => {
        if (balls < 4) {
          return balls + 1;
        }else{
          return 0;
        };
    };

    const addFoul = strikes => {
        if (strikes === 0) {
          return strikes + 1;
        }else if (strikes === 1){
          return strikes + 2;
        } else return strikes;
    };
      
    const addStrike = strikes => {
        if (strikes < 3) {
          return strikes + 1;
        }else{
          return 0;
        };
    };
      
    const addHit = strikesBalls => {
        return strikesBalls = 0;
    };

    return(
        <>
        
        <p>Hello from Dashboard</p>
        <button onClick={ () => setBalls(addBall)}>Ball</button>

        <button onClick={ () => setStrikes(addStrike)}>Strike</button>

        <button onClick={ () => setStrikes (addHit(strikes), setBalls(addHit))}>hit</button>
        
        <button onClick={ () => setStrikes(addFoul)}>Foul</button>
        
        <Display 
        />
       
       
        <p>Balls: {balls}</p><p>Strikes: {strikes}</p>
 </>
    )

}

export default Dashboard;