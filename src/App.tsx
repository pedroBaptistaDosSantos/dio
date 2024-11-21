import React from "react";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed"
import { Cadastro } from "./pages/cadastro";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import { AuthContextProvider } from "./context/auth";



function App() {
  return (

    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
