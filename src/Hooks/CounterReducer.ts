type State = { count: number };
type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

const CounterReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
            break;
        case "DECREMENT":
            return { count: state.count - 1 };
            break;
        default:
            return state;
    }
};

export default CounterReducer;
