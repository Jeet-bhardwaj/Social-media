import { useContext } from "react";
import Post from "./Post";
import { PostList as PostList_data } from "../store/post-list-store";
/*
 * importing PostList as PostList_data and then 
 * taking out postList array from them . posLlist is an array which contan objects maked by { useReduser state }
 * 
 * initaly by default  postList array --> objact contain --> id,title, body, reaction,tag,
 * we will use this futher--->
 * 
 */


const PostList = () => {
    const { postList } = useContext(PostList_data)
    return <>
    { postList.map((item) => <Post key={item.id} posts= {item}></Post>) };
    </>
}

export default PostList;