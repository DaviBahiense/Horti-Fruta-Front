import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import { Login, Register, Home } from "./pages";
import Home from "./pages/Home/index.js";
import Register from "./pages/Register/index.js";
import Login from "./pages/Login/index.js";

export default function App() {
  return (
    // <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    /* </AuthProvider> */
  );
}
