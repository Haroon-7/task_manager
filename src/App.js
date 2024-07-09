import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1>Task Manager</h1>
        </header>
        <Routes>
          <Route path="/" element={<HomePage tasks={tasks} addTask={addTask} removeTask={removeTask} />} />
          <Route path="/category/:category" element={<CategoryPage tasks={tasks} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
