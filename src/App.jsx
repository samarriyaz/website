import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout3 from './pages/Layout3';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout3 />} />
      </Routes>
    </Router>
  );
}

export default App;
