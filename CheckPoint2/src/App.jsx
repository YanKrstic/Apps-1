import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateCharacter from "./pages/CreateCharacter";
import Store from "./pages/store";
import QG from "./pages/QG";

export default function App() {
  return (
    <div>

      {}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCharacter />} />
        <Route path="/store" element={<Store />} />
        <Route path="/qg" element={<QG />} />
      </Routes>
    </div>
  );
}
