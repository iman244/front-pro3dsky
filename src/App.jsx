import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./views/Home/Home";
import ProtectedRoute from "./Services/ProtectedRoute";
import Page from "./components/page/Page";
import Product from "./views/Product/Product";
import { QueryClient, QueryClientProvider } from "react-query";
import LoginService from "./Services/LoginService";
import HomeService from "./Services/HomeService";

const queryClient = new QueryClient();

function App() {
  const [user, setUser] = useState(1);
  return (
    <QueryClientProvider client={queryClient}>
      <LoginService>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route
                path="/"
                element={
                  <HomeService>
                    <Page content={<Home />} />
                  </HomeService>
                }
              />
              <Route
                path=":id"
                element={
                  <HomeService>
                    <Page content={<Product />} />
                  </HomeService>
                }
              />
              <Route
                path="*"
                element={
                  <HomeService>
                    <Page content={<Home />} />
                  </HomeService>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </LoginService>
    </QueryClientProvider>
  );
}

export default App;
