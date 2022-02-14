import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Register, Login, Cart } from "./pages";
import { AuthProvider } from "./context/AuthContext";
import UserPage from "./pages/Profile/UserPage";

export default function App() {
  return (
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
  );
}
