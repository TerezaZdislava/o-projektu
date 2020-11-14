import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.html';
import './danca.html';
import './main.html';

ReactDOM.render(
  <div>
    <div className="navigace">
      <a href="main.html">Zpět domů</a>
      <ul id="navItems">
        <li>
          <a className="nav-link" href="index.html">
            Terka
          </a>
        </li>
        <li>
          <a className="nav-link" href="danca.html">
            Danča
          </a>
        </li>
      </ul>
    </div>
    <h1>Podnikni se mnou malý virtuální výlet z gauče!</h1>
    <div className="intro">
      <p>
        Milý návštěvnku, místo vyprávění o sobě jsem Ti přichystala jsem kvíz,
        kde můžeš otestovat znalost Česka a imaginárně si procestovat pár míst.
      </p>
      <p>
        Proč mě to napadlo? Své pracovní dny trávím mimojiné tvorbou
        cestovatelské inspirace a prostě jsem se musela o ty boží tipy podělit i
        s Tebou. A také jsem si chtěla nanečisto zkusit formulář v Reactu. Za
        chvíli ho budu tvořit na projektu a mnohem obsáhlejší, tak ať to mám
        potrénované.
      </p>
    </div>
    <App />
  </div>,

  document.getElementById('app'),
  // document.getElementById('app'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
