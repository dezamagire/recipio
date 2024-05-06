import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import PickPreferences from "./pages/PickPreferences"
import Results from "./pages/Results"
import Recipe from "./pages/Recipe"
import NotFound from "./pages/NotFound"
import 'https://kit.fontawesome.com/65fdabd037.js'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="sidebar flex flex-col h-screen w-max text-4xl justify-center align-middle px-8 text-white">
          <Link to="/">
            <i className="fa-solid fa-home"></i>
          </Link>
          <Link to="/pick-preferences">
            <i className="fa-solid fa-utensils"></i>
          </Link>
          <Link to="/results">
            <i className="fa-solid fa-align-justify"></i>
          </Link>
          <div>
            <i className="fa-solid fa-burger"></i>
          </div>
        </div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pick-preferences" element={<PickPreferences />} />
            <Route path="/results" element={<Results />} />
            <Route path="/recipe/:id" element={<Recipe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
