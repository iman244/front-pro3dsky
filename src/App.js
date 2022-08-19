import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import { useState } from "react";
import Home from "./views/Home";
import ProtectedRoute from "./tools/ProtectedRoute";

function App() {
    const [user, setUser] = useState(null);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoute user={user} />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
