import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import Bakeware from "./pages/Bakeware";
import BakingTools from "./pages/BakingTools";
import CakeStands from "./pages/CakeStands"
import CakeToppers from "./pages/CakeToppers";
import FondantTools from "./pages/FondantTools";
import IcingTools from "./pages/IcingTools";
import DecorationTools from "./pages/DecorationTools";
import Cutters from "./pages/Cutters";
import Stencils from "./pages/Stencils";
import FoodGelColors from "./pages/FoodGelColors";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        {/* Top Categories */}
        <Route path="/bakeware" element={<Bakeware />} />
        <Route path="/baking-tools" element={<BakingTools />} />
        <Route path="/cake-stands" element={<CakeStands />} />
        <Route path="/cake-toppers" element={<CakeToppers />} />
        <Route path="/fondant-tools" element={<FondantTools />} />
        <Route path="/icing-tools" element={<IcingTools />} />
        <Route path="/decoration-tools" element={<DecorationTools />} />
        <Route path="/cutters" element={<Cutters />} />
        <Route path="/stencils" element={<Stencils />} />
        <Route path="/food-gel-colors" element={<FoodGelColors />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
