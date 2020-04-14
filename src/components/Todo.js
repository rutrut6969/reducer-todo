import React from 'react';
import TodoForm from './TodoForm/TodoForm';
import TodoList from './TodoList/TodoList';
export default function Todo(props) {
  return (
    <div className='todo'>
      <section className='form-wrap'>
        <TodoForm />
      </section>
      <section className='list-wrap'>
        <TodoList />
      </section>
    </div>
  );
}
