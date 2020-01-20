import React, { useState, useEffect } from 'react';

import './styles.css';

export default function DevForm({ onSubmit }) {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithub_username] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      possition => {
        const { latitude, longitude } = possition.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handelSubmit(event) {
    event.preventDefault();

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });

    
    setGithub_username('');
    setTechs('');
  }

  return (
    <form onSubmit={handelSubmit}>
      <div className='input-block'>
        <label htmlFor='github_username'>Usuário do Github</label>
        <input
          type='text'
          name='github_username'
          id='github_username'
          required
          value={github_username}
          onChange={event => setGithub_username(event.target.value)}
        />
      </div>

      <div className='input-block'>
        <label htmlFor='techs'>Tecnologias</label>
        <input
          type='text'
          name='techs'
          id='techs'
          value={techs}
          onChange={event => setTechs(event.target.value)}
        />
      </div>

      <div className='input-group'>
        <div className='input-block'>
          <label htmlFor='latitude'>Latitude</label>
          <input
            type='number'
            value={latitude}
            name='latitude'
            id='latitude'
            onChange={event => setLatitude(event.target.value)}
          />
        </div>

        <div className='input-block'>
          <label htmlFor='longitude'>Longitude</label>
          <input
            type='number'
            value={longitude}
            name='longitude'
            id='longitude'
            onChange={event => setLongitude(event.target.value)}
          />
        </div>
      </div>

      <button type='submit'>Salvar</button>
    </form>
  );
}
