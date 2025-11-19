import MainNavbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
     <Router>
      <Routes>
        <Route path="/" element={<MainNavbar />} />
      </Routes>
    </Router>
  )
}

export default App
