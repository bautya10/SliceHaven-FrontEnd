import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import NavBar from "./components/General/NavBar/NavBar"
import Register from "./pages/register/Register"
import Error404 from "./pages/error/Error404"

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/registrar" Component={Register}/>
        <Route path="/*" Component={Error404}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
