import { Fragment } from 'react';
import './assets/css/main.css';
import Header from './components/header/Header';
import UltimateReact from './pages/ultimateReact/ultimateReact';
// import MiniApp from "./pages/miniApp/miniApp"
// import Course from "./pages/course/course"

function App() {
  return (
    <Fragment>
      <Header />
      <UltimateReact />
      {/* <Course/> */}
    </Fragment>
  );
}

export default App;
