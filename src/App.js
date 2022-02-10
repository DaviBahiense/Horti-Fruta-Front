import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Login, Register } from "./pages";

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}