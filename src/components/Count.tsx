import { useActionState } from "react";

async function increment(previousState: number, formData: any) {
    const data = formData.get("name");
    console.log(data);

    return previousState + 1;
}
const Count = () => {
    const [state, formAction] = useActionState(increment, 0);
    return (
        <div>
            <form action={formAction}>
                <h1>{state}</h1>
                <button>Increment</button>
                <input type="text" name="name" />
            </form>
        </div>
    );
};

export default Count;
