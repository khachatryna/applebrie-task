import React, {useEffect, useState} from "react";
import {useLazyGetPostsQuery} from "./../../features/posts/postsAPI";
import PostLoading from "../components/loading/postsLoading";
import {useParams } from "react-router-dom";

function Posts() {
    const params = useParams ();
    const [id, setId] = useState("")
    const [ fetchPosts, prevFetchResult ] = useLazyGetPostsQuery({id});
    const  {currentData, isLoading} = prevFetchResult;
    useEffect(() => {
        fetchPosts({id: params.id || ""})
        setId(params.id)

    }, [params, fetchPosts])

    return (
        <div className="posts">
            {isLoading ?  <PostLoading count={id ? 1 : 100} /> : ""}
            {/*{error ? error : ""}*/}
            {
                currentData ? Array.isArray(currentData) ? currentData.map(item => (
                    <div className="posts-item" key={item.id}>
                        <div className="title">{item.title}</div>
                        <div className="description">{item.body}</div>
                    </div>
                )) :  <div className="posts-item" >
                    <div className="title">{currentData.title}</div>
                    <div className="description">{currentData.body}</div>
                </div> : ""
            }
        </div>
    )
}

export default Posts