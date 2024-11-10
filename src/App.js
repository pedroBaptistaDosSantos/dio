import { Home } from "./pages/home";
import { Login } from "./pages/login";
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
       </Routes>
    </BrowserRouter>
  );
}

export default App;
