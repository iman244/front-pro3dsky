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
import { SnackbarProvider } from "notistack";
import AppService from "./Services/AppService";

const queryClient = new QueryClient();

function App() {
  const [user, setUser] = useState(1);
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        style={{ width: "fit-content", minWidth: "0" }}
      >
        <AppService>
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
        </AppService>
      </SnackbarProvider>
    </QueryClientProvider>
  );
}

export default App;
