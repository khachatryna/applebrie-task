import React from "react";
import {useGetUsersQuery} from "../../features/users/usersAPI";
import {Link} from "react-router-dom";
import PostLoading from "../components/loading/postsLoading";
import {AiOutlinePhone, AiOutlineLink, AiOutlineMail} from "react-icons/ai";

function Users() {
    const { data, error, isLoading } = useGetUsersQuery();
    return (
        <div className="users">
            {isLoading ?  <PostLoading count={100} /> : ""}
            {error ? error : ""}
            {
                data && data.map(item => (
                    <Link to={`/posts/${item.id}`} className="users-item" key={item.id}>
                        <div className="title">{item.name}</div>
                        <div className="description"><AiOutlinePhone />{item.phone}</div>
                        <div className="description"><AiOutlineLink />{item.website}</div>
                        <div className="description"><AiOutlineMail />{item.email}</div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Users