import React, { useState } from "react";

const TaskItem = ({ task, deleteTask, editTask, setEditing, editing }) => {
  const [editingText, setEditingText] = useState(task.text);

  const handleSaveTask = () => {
    editTask(task.id, editingText);
    setEditing(null);
  };

  return (
    <li className="task-item">
      {editing === task.id ? (
        <>
          <input
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <button onClick={handleSaveTask}>Save</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => setEditing(task.id)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
