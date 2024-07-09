// src/pages/CategoryPage.js
import React from 'react';
import TaskList from '../components/TaskList';
import { useParams } from 'react-router-dom';

const CategoryPage = ({ tasks }) => {
  const { category } = useParams();
  const filteredTasks = tasks.filter(task => task.category === category);

  return (
    <div>
      <h1>Category: {category}</h1>
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default CategoryPage;
