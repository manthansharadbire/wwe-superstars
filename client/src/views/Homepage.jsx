import React from 'react';
import axios from 'axios';

const WWE_SUPERSTARS = ([
    {
        "_id": "67ecf8ceb364ccd14a1d2355",
        "wwename": "Roman Reigns",
        "height": "6.1ft",
        "finisher": "Prodigal Spear",
        "aka": "Tribal Chief",
        "thumbnail": "https://www.usanetwork.com/sites/usablog/files/2022/09/wwe-roman-reigns-titles.jpg",
        "__v": 0
    },
    {
        "_id": "67ecf925b364ccd14a1d2357",
        "wwename": "Seth Rollins",
        "height": "6.1ft",
        "finisher": "Curb Stomp",
        "aka": "The Architect",
        "thumbnail": "https://cdn.wrestletalk.com/wp-content/uploads/2023/07/seth-rollins-wwe-world-heavyweight-champion-july-2-b.jpg",
        "__v": 0
    }
])

function Homepage() {
  return (
    <div>
      <h1>This is Homepage</h1>
    </div>
  )
}

export default Homepage;
