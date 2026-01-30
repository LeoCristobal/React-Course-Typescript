import React, { useEffect, useState } from "react";

interface UserProps {
    id: number;
    name: string;
    email: string;
    phone: string;
}
const Api = () => {
    const [user, setUser] = useState<UserProps[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/users",
            );
            const data = await res.json();
            setUser(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="sample">
                {user.map((user) => (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Api;
