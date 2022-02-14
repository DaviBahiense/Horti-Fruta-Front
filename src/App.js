import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Register, Login, Cart } from "./pages";
import { AuthProvider } from "./context/AuthContext";
import UserPage from "./pages/Profile/UserPage";
import LoginContext from "./context/LoginContext.js";
import { useState, useEffect } from "react";
import ContContext from "./context/CounterContext.js";

export default function App() {
  const [isLogged, setIsLogged] = useState();
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
    { id: 6, value: 0 },
    { id: 7, value: 0 },
    { id: 8, value: 0 },
    { id: 9, value: 0 },
    { id: 10, value: 0 },
  ]);
  return (
    <ContContext.Provider value={{ counters, setCounters }}>
      <LoginContext.Provider value={{ isLogged, setIsLogged }}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home />} />
              <Route path="/carrinho" element={<Cart />} />
              <Route path="/perfil" element={<UserPage />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </LoginContext.Provider>
    </ContContext.Provider>
  );
}
