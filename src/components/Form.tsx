import FormButton from "./FormButton";

const Form = () => {
    const formAction = async (data: any) => {
        await new Promise((r) => setTimeout(r, 2000));
        const UserData = {
            name: data.get("name"),
            email: data.get("email"),
            password: data.get("password"),
        };

        console.log(UserData);
    };
    return (
        <div>
            <form action={formAction}>
                <label>
                    Name
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Email
                    <input type="text" name="email" />
                </label>
                <br />
                <label>
                    Password
                    <input type="text" name="password" />
                </label>
                <FormButton />
            </form>
        </div>
    );
};

export default Form;
