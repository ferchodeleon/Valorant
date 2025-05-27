import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import Home from "./components/Home";
import { Header } from "./components/Header";
import Agents from "./components/Agents/Agents";
import AgentDetails from "./components/Agents/AgentDetails";
import MapsList from "./components/Maps/MapsList";
import i18n from "./translation";

import "./styles/App.css";
import { Weapons } from "./components/Weapons";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/agents/:agentId" element={<AgentDetails />} />
            <Route path="/maps" element={<MapsList />} />
            <Route path="/weapons" element={<Weapons />} />
          </Routes>
        </main>
      </Router>
    </I18nextProvider>
  );
}

export default App;
