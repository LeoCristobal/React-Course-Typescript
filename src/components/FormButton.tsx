import { useFormStatus } from "react-dom";
const FormButton = () => {
    const { pending } = useFormStatus();
    console.log(pending);

    return (
        <button disabled={pending}>
            {" "}
            {pending ? "Submitting..." : "Submit"}
        </button>
    );
};

export default FormButton;
