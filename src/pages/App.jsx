import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Pricing from "./Pricing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
