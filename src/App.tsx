import Button from "./Components/Button";

const App = () => {
    return (
        <div>
            <Button
                label="Click"
                onClick={() => console.log("clicked")}
                disabled={false}
            />
        </div>
    );
};

export default App;