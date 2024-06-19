// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login';
import Userpage from './Userpage';
import Abn from './Abn';
import Tax from './Tax';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userpage" element={<Userpage />} />
        <Route path="/abn" element={<Abn />} />
        <Route path="/tax" element={<Tax />} />
      </Routes>
    </Router>
  );
}

export default App;