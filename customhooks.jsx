import { useEffect, useState } from 'react';
import axios from 'axios';

// Custom hook for fetching todos with auto-refresh
function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up interval to fetch data every n seconds
    const intervalId = setInterval(() => {
      axios.get("<https://sum-server.100xdevs.com/todos>")
        .then(res => {
          setTodos(res.data.todos);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching todos:", error);
          setLoading(false);
        });
    }, n * 1000);

    // Initial data fetch
    axios.get("<https://sum-server.100xdevs.com/todos>")
      .then(res => {
        setTodos(res.data.todos);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
        setLoading(false);
      });

    // Clean up the interval on component unmount or when n changes
    return () => clearInterval(intervalId);
  }, [n]);

  // Return todos and loading state
  return { todos, loading };
}

// Main App component
function App() {
  // Using the custom hook to fetch todos with auto-refresh every 10 seconds
  const { todos, loading } = useTodos(10);

  // Rendering loading message if data is still loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // Rendering Track component for each todo
  return (
    <>
      {todos.map(todo => <Track key={todo.id} todo={todo} />)}
    </>
  );
}

// Track component for rendering individual todo
function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;