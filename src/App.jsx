// src/App.jsx

import { useState } from "react";

const App = () => {
  
  function handleAddFighter(zombieFighter){
    if(money >= zombieFighter.price){
      const newTeam =[... team, zombieFighter];
      setTeam(newTeam)
      setZombieFighters(zombieFighters.filter(z => z.id !== zombieFighter.id))
      //console.log(zombieFighter.price)
      setMoney(money - zombieFighter.price)
      const totalStrength = team.reduce(
        (totalStrength, zombieFighter) => totalStrength + zombieFighter.strength, 0
      )
      const totalAgility = team.reduce(
        (totalAgility, zombieFighter) => totalAgility + zombieFighter.agility, 0
      )
      console.log(totalAgility)
      console.log(totalStrength)
    } else {
      console.log("Not Enough Money")
    }
    
    
  }
  function handleRemoveFighter(teamMember){
    const newZombieFighters=[...zombieFighters, teamMember]
    setZombieFighters(newZombieFighters)
    setTeam(team.filter(z => z.id !== teamMember.id))
    setMoney(money + teamMember.price)
  }
  const [team, setTeam] = useState([

  ]);

  const [money, setMoney] = useState(100);

  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]
  )
  return (
    <>
      <h1>Money : {money}</h1>
      {zombieFighters.map((zombieFighter, id) => {
        return(
          <ul key={id}>
            <img src={zombieFighter.img} alt={zombieFighter.altImg}/>
            <li>Name : {zombieFighter.name}</li>
            <li>Price : {zombieFighter.price}</li>
            <li>Strength : {zombieFighter.strength}</li>
            <li>Agility : {zombieFighter.agility}</li>
            <button onClick={() => handleAddFighter(zombieFighter)}>＋</button>

          </ul>
        )
      })}
      <h2>Your Team</h2>
      {team.length === 0 ? <p>Pick Some Team Members!!</p> : ''}
      {team.map((teamMember, id) => {
          return(
            <ul key={id}>
              <img src={teamMember.img} alt={teamMember.altImg}/>
              <li>{teamMember.name}</li>
              <li>{teamMember.price}</li>
              <li>{teamMember.strength}</li>
              <li>{teamMember.agility}</li>
              <button onClick={() => handleRemoveFighter(teamMember)}>❌</button>
            </ul>
  
          )

      })}


    </>

  );
}

export default App

