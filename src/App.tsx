import Information from "./Components/Information";

const App = () => {
    return (
        <div>
            <Information
                name="Leo"
                age={15}
                isStudent={true}
            />
        </div>
    );
};

export default App;