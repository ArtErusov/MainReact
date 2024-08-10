
import { Routes, Route } from 'react-router-dom';
import './assets/css/main.css';
import Header from './components/header/Header';
import UltimateReact from './pages/ultimateReact/ultimateReact';
import Yandex from './pages/yandex/miniApp';
import Game from './pages/game/miniApp';
import InitialStub from './components/initialStub/initialStub';
import UI from './pages/UI/UI';
import Pet from './pages/pet/pet';
import JsComponent from './pages/JsComponent/jsComponent';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='' element={<InitialStub/> }/>
        <Route path="/ur" element={<UltimateReact />} />
        <Route path="/yandex" element={<Yandex />} />
        <Route path="/game" element={<Game />} />
        <Route path="/ui" element={<UI />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/js" element={<JsComponent />} />
      </Routes>
    </>
  );
}

export default App;
