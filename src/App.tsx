import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from './components/Table/Table';
import Home from './components/Home/Home';

const App: React.FC = () => (
  <div className="App" data-testid="App">
    <Router basename="/typescript-task/">
      <Routes>
        <Route path="/table" element={<Table />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </div>
);

export default App;
