import { Fragment } from "react"
import "./assets/css/main.css"
import Header from "./components/header/Header"
import MiniApp from "./pages/miniApp/miniApp"
import Course from "./pages/course/course"

function App() {
return <Fragment>
  <Header/>
  <Course/>
</Fragment>
}

export default App
