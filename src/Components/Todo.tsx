import { useState } from "react";

interface TodoProps {
    id: number;
    task: string;
    isComplete: boolean;
}
const Todo = () => {
    const [Todo, setTodo] = useState<TodoProps[]>([]);
    const [Input, setInput] = useState<any>("");

    const handleSubmit = () => {
        let newTodo: TodoProps = {
            id: Todo.length + 1,
            task: Input,
            isComplete: false,
        };

        setTodo((prev) => [...prev, newTodo]);
        setInput("");
    };

    const toggleComplete = (id: number) => {
        setTodo((prev) =>
            prev.map((todo) =>
                todo.id === todo.id ? { ...todo, isComplete: true } : todo,
            ),
        );
        console.log("True");
    };
    return (
        <>
            <section>
                <input
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Todo..."
                    value={Input}
                />
                <button type="submit" onClick={handleSubmit}>
                    Add Todo
                </button>
            </section>
            <section>
                <h1>Todo:</h1>
                {Todo.map(({ task, id }) => (
                    <section key={id}>
                        <span>{task}</span>
                        <input
                            type="checkbox"
                            onChange={() => toggleComplete(id)}
                        />
                    </section>
                ))}
            </section>
        </>
    );
};

export default Todo;
