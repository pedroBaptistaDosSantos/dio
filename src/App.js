import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed"
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
       </Routes>
    </BrowserRouter>
  );
}

export default App;
