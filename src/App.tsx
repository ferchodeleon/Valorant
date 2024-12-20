import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Agents from "./components/Agents";
import { Header } from "./components/Header";
import Home from "./components/Home";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
