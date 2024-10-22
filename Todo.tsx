import {useState} from "react";

interface Todo {
    id: number;
    task: string;
}

const TodoApp = () => {
    const [ task, settask] = useState<string>("");
    const [ todos, setTodos] = useState<Todo[]>([]);


    const addTask = () => {
        if (task.trim() === "") return;
        const newTask = {id: Date.now(), task};
        setTodos([...todos, newTask]);
        settask("");
    };

    const deleteTask = (id: number) =>{
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return(
        <div className="todo -container">
            <div className="input-section">
                <input 
                type="text" 
                value ={task}
                onChange={(e) => settask(e.target.value)}
                placeholder="Enter your task"
                />

                <button onClick={addTask}
                disabled= {!task}
                className= {task ? "active" : ""}>
                Add Task
                </button>
            </div>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.task}
                        <button onClick={()=> deleteTask(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default TodoApp