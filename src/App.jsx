import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './assets/css/main.css';
import Header from './components/header/Header';
import UltimateReact from './pages/ultimateReact/ultimateReact';
import Yandex from './pages/yandex/miniApp';

// import MiniApp from "./pages/miniApp/miniApp"
// import Course from "./pages/course/course"

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/ultimatereact" element={<UltimateReact />} />
        <Route path="/yandex" element={<Yandex />} />
        {/* <Course/> */}
      </Routes>
    </Fragment>
  );
}

export default App;
