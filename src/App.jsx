import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/css/main.css';
import Header from './components/header/Header';
import UltimateReact from './pages/ultimateReact/ultimateReact';
import Yandex from './pages/yandex/miniApp';
import Game from './pages/game/miniApp';
import InitialStub from './components/initialStub/initialStub';
import Important from './pages/important/important';
import UI from './pages/UI/UI';


function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='' element={<InitialStub/> }/>
        <Route path="/ultimatereact" element={<UltimateReact />} />
        <Route path="/yandex" element={<Yandex />} />
        <Route path="/game" element={<Game />} />
        <Route path="/important" element={<Important />} />
        <Route path="/ui" element={<UI />} />
      </Routes>
    </Fragment>
  );
}

export default App;
