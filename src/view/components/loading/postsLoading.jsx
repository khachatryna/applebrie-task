import React, {useEffect, useState} from "react";

function PostLoading({count = 100}) {
    const [loadingElements, setLoadingElements] = useState(new Array(count).fill(""))
    useEffect(() => {
        if (count) {
            setLoadingElements(new Array(count).fill(""))
        }
    }, [count])
    return loadingElements.map((elem, index) => (
        <div className="posts-item posts-loading" key={index}>
            <div className="title"/>
            <div className="description"/>
            <div className="description"/>
            <div className="description"/>
            <div className="description"/>
            <div className="description"/>
        </div>
    ))


}

export default PostLoading