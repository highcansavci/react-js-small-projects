import {useState} from "react";
import "../static/todostyle.css"

function Todo() {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState("")
    const handleSubmit = () => {
        setTodos((todos) =>
            todos.concat({
                text: input,
                id: generateId(),
            })
        );
        setInput("");
    }
    const generateId = () => Math.floor(Math.random() * 1000000);
    const removeTodo = (id) => setTodos((todos) => todos.filter(t => t.id !== id));


    return <>
        <div className="container">
            <input type="text" value={input} placeholder={"New Todo"} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleSubmit}>Submit</button>
            <ul className={"todos-list"}>
                {todos.map(({text, id}) => {
                    return <li key={id} className={"todo"}>
                        <span>{text}</span>
                        <button className={"close"} onClick={() => removeTodo(id)}>X</button>
                    </li>
                })}
            </ul>
        </div>
    </>;
}

export default Todo