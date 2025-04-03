import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WweSuperstar from  '../components/WweSuperstar.jsx'

function Homepage() {

    const [wweSuperstars , setWweSuperstars] = useState([]);

    const loadWweSuperstars = async() =>{
        const response = await axios.get("http://localhost:5002/wwe-superstars");

        setWweSuperstars(response.data.data);
    };

    useEffect(()=>{
        loadWweSuperstars();
    },[]);

  return (
    <div>
      <h1>This is Homepage</h1>
      {wweSuperstars.map((wrestler, i)=>{
        const{_id, wwename, height, finisher, aka, thumbnail} = wrestler;
        return(
           <WweSuperstar
           key={i}
           _id={_id}
           wwename={wwename}
           height={height}
           finisher={finisher}
           aka={aka}
           thumbnail={thumbnail}
           />
        )
      })}
    </div>
  )
}

export default Homepage;
