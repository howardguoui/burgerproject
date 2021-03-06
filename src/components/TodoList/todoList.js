import React, { useState } from 'react';

const todo = props => {
    const [todoName, setTodoName] = useState('');
    const [todoList, setTodoList] = useState([]);
    
    const inputStateChangeHandler = (event) => {
        setTodoName(event.target.value);
    };

    const todoAddHandler = () => {
        setTodoList(todoList.concat(todoName));
    }
    return <React.Fragment>
        <input
            type="text"
            placeholder="Todo"
            onChange={inputStateChangeHandler}
            value={todoName} />
        <button type="button" onClick={todoAddHandler}>Add</button>
        <ul>
            {todoList.map(todo =>(
                <li key={todo}>{todo}</li>
            ))}
        </ul>
    </React.Fragment>
};

export  default todo;