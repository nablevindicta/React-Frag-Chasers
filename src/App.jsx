import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CharacterList from "./components/CharacterList";
import CharacterDetailPage from "./components/CharacterDetailPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/:name" element={<CharacterDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
