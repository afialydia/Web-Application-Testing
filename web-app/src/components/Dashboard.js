import React from 'react';


const Dashboard = props => {

    
    
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
        <button onClick={ () => props.setBalls(addBall)}>Ball</button>

        <button onClick={ () => props.setStrikes(addStrike)}>Strike</button>

        <button onClick={ () => props.setStrikes (addHit(props.strikes), props.setBalls(addHit))}>hit</button>
        
        <button onClick={ () => props.setStrikes(addFoul)}>Foul</button>
        
      
       
       
 </>
    )

}

export default Dashboard;