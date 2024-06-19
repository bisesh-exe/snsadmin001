// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login';
import Userpage from './Userpage';
import Abn from './Abn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userpage" element={<Userpage />} />
        <Route path="/abn" element={<Abn />} />
      </Routes>
    </Router>
  );
}

export default App;