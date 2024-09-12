import { Routes, Route } from 'react-router-dom';
import './assets/css/main.css';
import Header from './components/header/Header';
import UltimateReact from './pages/ultimateReact/ultimateReact';
import Yandex from './pages/yandex/miniApp';
import Technical from './pages/technical/technical';
import InitialStub from './components/initialStub/initialStub';
import UIproject from './pages/UIproject/UIproject';
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
        <Route path="/technical" element={<Technical />} />
        <Route path="/ui" element={<UIproject />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/js" element={<JsComponent />} />
      </Routes>
    </>
  );
}

export default App;
