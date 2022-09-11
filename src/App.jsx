import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./views/Home/Home";
import ProtectedRoute from "./tools/ProtectedRoute";
import Page from "./components/page/Page";
import Product from "./views/Product/Product";
import { QueryClient, QueryClientProvider } from "react-query";
import LoginService from "./tools/LoginService";
import DesignService from "./views/Home/DesignService";

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
                  <Page
                    content={
                      <DesignService>
                        <Home />
                      </DesignService>
                    }
                  />
                }
              />
              <Route path=":id" element={<Page content={<Product />} />} />
              <Route
                path="*"
                element={
                  <Page
                    content={
                      <DesignService>
                        <Home />
                      </DesignService>
                    }
                  />
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
