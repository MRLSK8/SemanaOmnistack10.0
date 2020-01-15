import React from 'react';
import './Global.css';
import './App.css';
import './Sidebar.css';

function App() {
  return (
    <div id='app'>
      <aside>
        <h1>Cadastrar</h1>
        <form>
          <div className='input-block'>
            <label htmlFor='github_username'>Usuário do Github</label>
            <input
              type='text'
              name='github_username'
              id='github_username'
              required
            />
          </div>

          <div className='input-block'>
            <label htmlFor='techs'>Tecnologias</label>
            <input type='text' name='techs' id='techs' />
          </div>

          <div className='input-group'>
            <div className='input-block'>
              <label htmlFor='latitude'>Latitude</label>
              <input type='text' name='latitude' id='latitude' />
            </div>

            <div className='input-block'>
              <label htmlFor='longitude'>Longitude</label>
              <input type='text' name='longitude' id='longitude' />
            </div>
          </div>

          <button type='submit'>Salvar</button>
        </form>
      </aside>
      <main></main>
    </div>
  );
}

export default App;
