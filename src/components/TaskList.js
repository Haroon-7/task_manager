// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => (
  <ul>
    {tasks.map((task, index) => (
      <TaskItem key={index} task={task} />
    ))}
  </ul>
);

export default TaskList;
