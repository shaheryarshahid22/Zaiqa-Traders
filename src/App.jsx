import HomeLayout from "./components/HomeLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
     <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
      </Routes>
    </Router>
  )
}

export default App
