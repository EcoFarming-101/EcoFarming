import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import MainPage from "./components/MainPage";
import ChallengePage from "./components/ChallengePage";
import OngoingChallengePage from "./components/OngoingChallengePage";
import ProofPage from "./components/ProofPage";
import MyPage from "./components/MyPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/challenge/:id" element={<ChallengePage />} />
          <Route
            path="/challenge/ongoing/test"
            element={<OngoingChallengePage />}
          />
          <Route path="/proof" element={<ProofPage />} />
          <Route path="/users" element={<MyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
