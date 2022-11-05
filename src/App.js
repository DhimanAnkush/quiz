import "./styles.css";
import { Routes, Route } from 'react-router-dom'
import { Admin } from "./Components/Admin";
import { Home } from "./Components/Home";
import { Quiz } from "./Components/Quiz";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
      </Routes>
    </div>
  );
}
