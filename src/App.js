import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed"
import { Cadastro } from "./pages/cadastro";
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/cadastro" element={<Cadastro />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
