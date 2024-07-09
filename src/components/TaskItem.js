// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task }) => (
  <li>
    {task.task} - <strong>{task.category}</strong>
  </li>
);

export default TaskItem;
