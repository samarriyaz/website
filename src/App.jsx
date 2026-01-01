import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Layout1 from './pages/Layout1';
import Layout2 from './pages/Layout2';
import Layout3 from './pages/Layout3';

// Layout Selector Component
const LayoutSelector = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12 text-white">
          <h1 className="text-5xl font-bold mb-4">Choose a Layout</h1>
          <p className="text-xl">Select a design to preview for Integrative Wellness Partners</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/layout1" className="group">
            <div className="bg-white rounded-2xl shadow-2xl p-8 hover:scale-105 transition-transform">
              <div className="text-6xl mb-4 text-center">📱</div>
              <h2 className="text-2xl font-bold text-primary mb-3">Layout 1</h2>
              <p className="text-text-light mb-4">Single-Page Vertical Scroll</p>
              <ul className="text-sm text-text-light space-y-2">
                <li>• Traditional long-form</li>
                <li>• Fixed navigation</li>
                <li>• Full-width sections</li>
                <li>• Smooth scrolling</li>
              </ul>
              <button className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-semibold group-hover:bg-primary-dark transition">
                View Layout
              </button>
            </div>
          </Link>

          <Link to="/layout2" className="group">
            <div className="bg-white rounded-2xl shadow-2xl p-8 hover:scale-105 transition-transform">
              <div className="text-6xl mb-4 text-center">⚡</div>
              <h2 className="text-2xl font-bold text-primary mb-3">Layout 2</h2>
              <p className="text-text-light mb-4">Split-Screen / Two-Column</p>
              <ul className="text-sm text-text-light space-y-2">
                <li>• Modern split design</li>
                <li>• Sticky sidebar nav</li>
                <li>• Alternating layouts</li>
                <li>• Visual-heavy</li>
              </ul>
              <button className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-semibold group-hover:bg-primary-dark transition">
                View Layout
              </button>
            </div>
          </Link>

          <Link to="/layout3" className="group">
            <div className="bg-white rounded-2xl shadow-2xl p-8 hover:scale-105 transition-transform">
              <div className="text-6xl mb-4 text-center">🎴</div>
              <h2 className="text-2xl font-bold text-primary mb-3">Layout 3</h2>
              <p className="text-text-light mb-4">Card-Based / Modular</p>
              <ul className="text-sm text-text-light space-y-2">
                <li>• Card-based sections</li>
                <li>• Lots of whitespace</li>
                <li>• Elevated shadows</li>
                <li>• Mobile-first</li>
              </ul>
              <button className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-semibold group-hover:bg-primary-dark transition">
                View Layout
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutSelector />} />
        <Route path="/layout1" element={<Layout1 />} />
        <Route path="/layout2" element={<Layout2 />} />
        <Route path="/layout3" element={<Layout3 />} />
      </Routes>
    </Router>
  );
}

export default App;
