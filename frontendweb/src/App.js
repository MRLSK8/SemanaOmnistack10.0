import React, { useEffect, useState } from 'react';
import './App.css';
import './Global.css';
import './Sidebar.css';
import './Main.css';
import api from './services/api';
import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    loadDevs();
  }, [devs]);

  async function handelSubmit(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }

  return (
    <div id='app'>
      <aside>
        <h1>Cadastrar</h1>
        <DevForm onSubmit={handelSubmit} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
