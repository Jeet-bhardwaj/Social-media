import 'bootstrap/dist/css/bootstrap.css'
import { MdDelete } from "react-icons/md";
import { useContext } from 'react';
import { PostList as PostList_data } from '../store/post-list-store';


const Post = ({ posts }) => {
    const { deletePost} = useContext(PostList_data);
    return <>
        <div className="card post-card" style={{ width: 300, height: 300 }}>

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger " onClick={()=>deletePost(posts.id)}>
                {<MdDelete />}    {/*react icon*/}
            </span>

            <div className="card-body">
                <h5 className="card-title">{posts.title}</h5>
                <p className="card-text">{posts.body}</p>
                {posts.tags.map((tg) => <span key={tg.id} className="badge text-bg-primary rounded-pill post-tags">{tg}</span>)}
                <div className="alert alert-info alart-bar" role="alert">
                    Reaction on this post {posts.reactions}
                </div>
            </div>
        </div>
    </>
}
export default Post;