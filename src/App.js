import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Register, Login, Cart } from "./pages"
import { AuthProvider } from "./context/AuthContext";


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider> 
  );
}



