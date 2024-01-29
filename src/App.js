import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ModelsPage from "./Components/ModelsPage/ModelsPage";

import Navbar from "./CommonComponents/Navbar/Navbar";
import Aimodels from "./Components/Aimodels/Aimodels";
import Footer from "./CommonComponents/Navbar/Footer/Footer";
import TryModels from "./Components/TryModels/TryModels";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<ModelsPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/trymodels" element={<TryModels />} />
         
        <Route path="/models/:name" element={<Aimodels />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
