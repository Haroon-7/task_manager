import React, { useState } from 'react';

const HomePage = ({ tasks, addTask, removeTask }) => {
  const [task, setTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      if (isEditing && currentIndex !== null) {
        const updatedTasks = tasks.map((t, index) =>
          index === currentIndex ? task : t
        );
        addTask(updatedTasks);
        setIsEditing(false);
        setCurrentIndex(null);
      } else {
        addTask([...tasks, task]);
      }
      setTask('');
    }
  };

  const handleEdit = (index) => {
    setTask(tasks[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  return (
    <div>
      <form className="add-task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a Task"
        />
        <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
      </form>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <div>
              <button className="edit" onClick={() => handleEdit(index)}>
                Edit
              </button>
              <button onClick={() => removeTask(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;