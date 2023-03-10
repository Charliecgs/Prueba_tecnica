import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import App from "./App";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
import { UserContextProvider } from "./Context/userContext";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Peliculas from "./Pages/Peliculas/Peliculas";
import Series from "./Pages/Series/Series";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route
              path="/series"
              element={
                <ProtectedRoutes>
                  <Series />{" "}
                </ProtectedRoutes>
              }
            />
            <Route
              path="/peliculas"
              element={
                <ProtectedRoutes>
                  <Peliculas />{" "}
                </ProtectedRoutes>
              }
            />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
