import React from 'react';
import './App.js';
import CustomBtn from './Btn.js';
 
function Todo(props) {
  const { title, contents, todo, firstButton, secondButton, color } = props;
  return (
    <div style={{ borderColor: color }} className='Box'>
      <p>{title}</p>
      <p>{contents}</p>
      <p>
        <CustomBtn
          buttonColor='yellow'
          onClick={() => props.firstHandler(todo.id)}
        >
          {firstButton}
        </CustomBtn>
        <CustomBtn
          buttonColor='yellow'
          onClick={() => props.secondHandler(todo)}
        >
          {secondButton}
        </CustomBtn>
      </p>
    </div>
  );
}
 
export default Todo;