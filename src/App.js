As per your request, I'll provide a simplified version of a time management application's main component in React.

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('/api/tasks')
      .then(response => {
        setTasks(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleAddTask = task => {
    setTasks([...tasks, task]);
  };

  if (loading) return "Loading...";
  if (error) return `Error: ${error}`;

  return (
    <div className="App">
      <h1>Time Management App</h1>
      <button onClick={handleAddTask}>Add Task</button>
      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className="task">
            <h2>{task.title}</h2>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
```

This is a simplified version of how a time management app could look like. It fetches a list of tasks from an API endpoint and displays them on the page. When the "Add Task" button is clicked, a new task is added to the state. Error handling and loading states are also included.

Please note, this is a very basic example and a real-world application would be more complex, possibly including forms for adding and editing tasks, user authentication, more complex state management, better error handling, etc. Styling is also very basic and would likely be more complex in a real-world application.