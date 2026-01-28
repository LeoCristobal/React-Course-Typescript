import { useEffect, useState } from "react";

interface UserInfoProps {
    name: string;
    age: number;
    email: string;
}
const UserInfo = () => {
    const [User, setUser] = useState<UserInfoProps>({
        name: "",
        age: 0,
        email: "",
    });


    const updateName = (name: string) => {
        setUser(prev => ({ ...prev, name }))
    }
    const updateAge = (age: number) => {
        setUser(prev => ({ ...prev, age }))
    }
    const updateEmail = (email: string) => {
        setUser(prev => ({ ...prev, email }))
    }

    return (
        <>
            <section>
                <input
                    type="text"
                    onChange={(e) => updateName(e.target.value)}
                    placeholder="Name"
                    value={User.name}
                />
                <input
                    type="number"
                    onChange={(e) => updateAge(Number(e.target.value))}
                    placeholder="Age"
                    value={User.age > 0 ? User.age : ''}
                />
                <input
                    type="email"
                    onChange={(e) => updateEmail(e.target.value)}
                    placeholder="Email"
                    value={User.email}
                />
            </section>
            <section>
                <h1>INFORMATION 👇</h1>
                <p>Name: {User.name}</p>
                <p>Age: {User.age > 0 ? User.age : ''}</p>
                <p>Email: {User.email}</p>
            </section>
        </>
    );
};

export default UserInfo;
