import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login/Login";
import { useState } from "react";
import Home from "./views/Home/Home";
import ProtectedRoute from "./tools/ProtectedRoute";
import Page from "./components/page/Page";
import Product from "./views/Product/Product";

function App() {
    const [user, setUser] = useState(1);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoute isAllowed={user} />}>
                    <Route path="/" element={<Page content={<Home />} />} />
                    <Route
                        path=":id"
                        element={<Page content={<Product />} />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
