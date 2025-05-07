import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LifecycleComponent from './LifecycleComponent';
import Home from './Home';
import DataComponent from './DataComponent';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Басты бет</Link></li>
          <li><Link to="/timer">Таймер</Link></li>
          <li><Link to="/data">Деректер</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer" element={<LifecycleComponent />} />
        <Route path="/data" element={<DataComponent />} />
      </Routes>
    </Router>
  );
}

export default App;