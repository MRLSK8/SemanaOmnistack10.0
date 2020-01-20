import React from 'react';

import './styles.css';

export default function DevItem({dev }) {
  return (
    <li className='dev-item'>
    <header>
      <img src={dev.avatar_url} alt={dev.name} />
      <div className='user-info'>
        <h1>{dev.name}</h1>
        <span>{dev.techs.join(', ')}</span>
      </div>
    </header>
    <p>{dev.bio}</p>
    <a
      href={`https://github.com/${dev.github_username}`}
      rel='noopener noreferrer'
      target='_blank'
    >
      Acessar perfil no github
    </a>
  </li>
  );
}
