import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const initialTodos = [
    {
        id: 1,
        title: "React JS",
        complete: false,
    },
    {
        id: 2,
        title: "HTML",
        complete: false,
    },
    {
        id: 3,
        title: "CSS",
        complete: false,
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

const Todos = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', margin: '0 auto' }}>
            {todos.map((todo) => (
                <div key={todo.id} style={{ margin: '10px 0', padding: '10px' }}>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleComplete(todo)}
                        />
                        <span style={{ marginLeft: '10px' }}>{todo.title}</span>
                    </label>
                </div>
            ))}
        </div>

    );
}

export default Todos