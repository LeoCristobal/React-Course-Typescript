interface Props {
    name: string
    age: number
    isStudent: boolean

}

const Information = ({ name, age, isStudent, }: Props) => {
    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            {isStudent ? (<h3>Student: Yes</h3>) : (<h3>Student: No</h3>)}
        </div>
    );
};

export default Information;