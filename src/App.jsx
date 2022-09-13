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

/*

sidebar query
profree icon
profree button

*/

function App() {
  const [user, setUser] = useState(1);
  return (
    <QueryClientProvider client={queryClient}>
      <LoginService>
        <BrowserRouter>
          <HomeService>
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Page content={<Home />} />} />
                <Route path=":id" element={<Page content={<Product />} />} />
                <Route path="*" element={<Page content={<Home />} />} />
              </Route>
            </Routes>
          </HomeService>
        </BrowserRouter>
      </LoginService>
    </QueryClientProvider>
  );
}

export default App;
