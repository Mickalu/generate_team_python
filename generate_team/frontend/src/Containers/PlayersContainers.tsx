import React, { useState } from 'react';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { v4 as uuid } from 'uuid';

import { PlayerType } from '../types/PlayerType';
import PlayerComponent from '../Components/PlayerComponent';



const PlayersContainers = () => {
  const initPlayer = {
    id: uuid(),
    level: 0,
    username: '',
  }

  const [playersList, setPlayersList] = useState<PlayerType[]>([])

  const addPLayer = () => (
     setPlayersList([...playersList, initPlayer])
  );

  const generatTeams = () => {
    console.log('coucou');
  };

  return (
    <> 
      <div style={{width:'50%'}}>
        <div style={{display: 'flex', flexDirection:'row-reverse', marginBottom:'20px'}}>
          <Button label='Add' className='mb-3 md:mb-0' onClick={() => addPLayer()}/>
        </div>

        <div style={{display: 'flex', flexDirection:'column', gap:'10px 0px', width:'100%'}}> 
          {playersList.map((player) => <PlayerComponent
              key={`player-${player.id}`} 
              id={player.id} 
              setPlayersList={setPlayersList} 
              playersList={playersList} 
              />
            )
          }
        </div>

        <div style={{display: 'flex', flexDirection:'row-reverse', marginTop:'20px'}}> 
          <Button label='Générer' onClick={() => generatTeams() }/>
        </div>
      </div>
    </>
  )
};

export default PlayersContainers;
