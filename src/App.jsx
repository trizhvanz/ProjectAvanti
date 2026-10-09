import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./assets/components/navbar.jsx";
import About from "./pages/about.jsx";
import Home from "./pages/home.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
