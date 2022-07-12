import React, {useEffect, useState} from 'react';
import {todosService} from "../../services/todos.service";
import Todos from "../../components/todos/Todos";

const TodosPage = () => {
    const [todos, setTodos] = useState([]);

    useEffect(()=> {
        todosService.getAll().then(({data}) => setTodos(data))
    }, [])

    return (
        <div>
            {todos.map(todo => <Todos key={todo.id} todo={todo}/>)}
        </div>
    );
};

export default TodosPage;