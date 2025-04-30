import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Agents from "./components/Agents";
import { Header } from "./components/Header";
import Home from "./components/Home";
import "./styles/App.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./translation";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agents" element={<Agents />} />
          </Routes>
        </main>
      </Router>
    </I18nextProvider>
  );
}

export default App;
