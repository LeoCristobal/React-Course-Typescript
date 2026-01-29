import { useReducer } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import CounterReducer from "../Hooks/CounterReducer";

const Counter = () => {
    const [state, dispatch] = useReducer(CounterReducer, { count: 0 });
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                <FaPlusCircle />
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>
                <FaMinusCircle />
            </button>
        </div>
    );
};

export default Counter;
