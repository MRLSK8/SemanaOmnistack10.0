import React from "react";
import "./App.css";
import "./Global.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  return (
    <div id="app">
      <aside>
        <h1>Cadastrar</h1>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              type="text"
              name="github_username"
              id="github_username"
              required
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input type="text" name="techs" id="techs" />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" name="latitude" id="latitude" />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="text" name="longitude" id="longitude" />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/39857752?s=460&v=4"
                alt="Marcelo Lima"
              />
              <div className="user-info">
                <h1>Marcelo Lima</h1>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              I'm majoring in Information Systems at the university of
              Pernambuco (UPE). Currently in the 5th period!
            </p>
            <a
              href="https://github.com/MRLSK8"
              rel="noopener noreferrer"
              target="_blank"
            >
              Acessar perfil no github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/39857752?s=460&v=4"
                alt="Marcelo Lima"
              />
              <div className="user-info">
                <h1>Marcelo Lima</h1>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              I'm majoring in Information Systems at the university of
              Pernambuco (UPE). Currently in the 5th period!
            </p>
            <a
              href="https://github.com/MRLSK8"
              rel="noopener noreferrer"
              target="_blank"
            >
              Acessar perfil no github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/39857752?s=460&v=4"
                alt="Marcelo Lima"
              />
              <div className="user-info">
                <h1>Marcelo Lima</h1>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              I'm majoring in Information Systems at the university of
              Pernambuco (UPE). Currently in the 5th period!
            </p>
            <a
              href="https://github.com/MRLSK8"
              rel="noopener noreferrer"
              target="_blank"
            >
              Acessar perfil no github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/39857752?s=460&v=4"
                alt="Marcelo Lima"
              />
              <div className="user-info">
                <h1>Marcelo Lima</h1>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              I'm majoring in Information Systems at the university of
              Pernambuco (UPE). Currently in the 5th period!
            </p>
            <a
              href="https://github.com/MRLSK8"
              rel="noopener noreferrer"
              target="_blank"
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
