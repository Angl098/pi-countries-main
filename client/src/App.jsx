//! Imports for Routes
import { Route, Routes } from "react-router-dom";

//! Import PhatRoutes
import PATHROUTES from "./components/helpers/pathroutes";
import ProtectedRoute from "./utils/ProtectedRoute";

//! Imports views
import Home from "./views/home/home";
import About from "./views/about/about";
import Landing from "./views/landing/landing";
import Detail from "./views/detail/detail";
import Create from "./views/create/create";

//! Imports style
import './App.css'
import { useSelector } from 'react-redux'

const { LANDING, HOME, ABOUT, DETAIL, FORM } = PATHROUTES;

function App() {
  const access = useSelector((state) => state.access)
  return (
    <div>
      <Routes>
        <Route path={LANDING} element={<Landing />} />
        
        <Route element={<ProtectedRoute access={access}/>} >
          <Route path={HOME} element={<Home />} />
          <Route path={DETAIL} element={<Detail />} />
          <Route path={ABOUT} element={<About />} />
          <Route path={FORM} element={<Create />} />
        </Route>

        
      </Routes>
    </div>
  )
}

export default App
