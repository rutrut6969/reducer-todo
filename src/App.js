import React from 'react';
import Todo from './components/Todo.js';
import './App.css';

// Set an initial state value through a reducer and render a list of todos from that state
function App() {
  return (
    <div className='App'>
      <Todo />
    </div>
  );
}

export default App;
