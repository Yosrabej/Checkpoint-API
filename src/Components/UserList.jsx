import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
function UserList({ user }) {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setList(res.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "20px",
            }}
        >
            {list.map((user, i) => (
                <UserCard key={i} user={user} />
            ))}
        </div>
    );
}

export default UserList;
