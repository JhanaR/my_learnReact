import React, { useEffect, useState } from 'react';

export default function UseEffectAPI(){
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        setTodo(json);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []); // Empty dependency array means it runs ONCE on mount

  return (
    <div>
      <h1>Todo Item</h1>
      <p>ID: {todo.id}</p>
      <p>Title: {todo.title}</p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
    </div>
  );
}