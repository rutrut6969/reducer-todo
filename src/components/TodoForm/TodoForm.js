import React from 'react';
import './todoform.css';
export default function TodoForm(props) {
  return (
    <form>
      <label htmlFor='title'>
        Title:
        <input type='text' name='title' className='title' />
      </label>
      <label htmlFor='body'>
        Comments:
        <textarea type='textarea' name='body' className='body' />
      </label>
      <section className='buttons'>
        <button className='submit' type='submit'>
          Submit
        </button>
        <button className='clear'>Clear Completed</button>
      </section>
    </form>
  );
}
