import React, { useEffect, useState } from 'react';
import './App.css';
import './Global.css';
import './Sidebar.css';
import './Main.css';

function App() {
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

  const handelSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div id='app'>
      <aside>
        <h1>Cadastrar</h1>
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
      </aside>
      <main>
        <ul>
          <li className='dev-item'>
            <header>
              <img
                src='https://avatars1.githubusercontent.com/u/39857752?s=460&v=4'
                alt='Marcelo Lima'
              />
              <div className='user-info'>
                <h1>Marcelo Lima</h1>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              I'm majoring in Information Systems at the university of
              Pernambuco (UPE). Currently in the 5th period!
            </p>
            <a
              href='https://github.com/MRLSK8'
              rel='noopener noreferrer'
              target='_blank'
            >
              Acessar perfil no github
            </a>
          </li>

          <li className='dev-item'>
            <header>
              <img
                src='https://avatars1.githubusercontent.com/u/39857752?s=460&v=4'
                alt='Marcelo Lima'
              />
              <div className='user-info'>
                <h1>Marcelo Lima</h1>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              I'm majoring in Information Systems at the university of
              Pernambuco (UPE). Currently in the 5th period!
            </p>
            <a
              href='https://github.com/MRLSK8'
              rel='noopener noreferrer'
              target='_blank'
            >
              Acessar perfil no github
            </a>
          </li>

          <li className='dev-item'>
            <header>
              <img
                src='https://avatars1.githubusercontent.com/u/39857752?s=460&v=4'
                alt='Marcelo Lima'
              />
              <div className='user-info'>
                <h1>Marcelo Lima</h1>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              I'm majoring in Information Systems at the university of
              Pernambuco (UPE). Currently in the 5th period!
            </p>
            <a
              href='https://github.com/MRLSK8'
              rel='noopener noreferrer'
              target='_blank'
            >
              Acessar perfil no github
            </a>
          </li>

          <li className='dev-item'>
            <header>
              <img
                src='https://avatars1.githubusercontent.com/u/39857752?s=460&v=4'
                alt='Marcelo Lima'
              />
              <div className='user-info'>
                <h1>Marcelo Lima</h1>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              I'm majoring in Information Systems at the university of
              Pernambuco (UPE). Currently in the 5th period!
            </p>
            <a
              href='https://github.com/MRLSK8'
              rel='noopener noreferrer'
              target='_blank'
            >
              Acessar perfil no github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
