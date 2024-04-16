import 'bootstrap/dist/css/bootstrap.css'
import { useContext, useRef } from 'react';
import {PostList} from '../store/post-list-store';

const CreatePost = () => {
    const {addPost}  = useContext(PostList);  
    
    const usrtIdElement = useRef();
    const titleElement = useRef();          // i dont know why we using useref
    const bodyElement = useRef();
    const reactionElement = useRef();
    const tagsElement = useRef();
    
    const handilSublit = (event) => {
        
        const userId = usrtIdElement.current.value;
        const title = titleElement.current.value;
        const body = bodyElement.current.value
        const reaction = reactionElement.current.value;
        const tags = tagsElement.current.value.split(/(\s+)/);
        
        addPost(userId,title,body,reaction,tags);

        event.preventDefault(); // page ko mere submit mat karna mey handil karunga

    }

    return <>
        <form className="create-post" onSubmit={handilSublit} >

            <div className="mb-3">
                <label htmlFor="userId"
                    className="form-label">
                    User Id
                </label>
                <input type="text"
                    ref={usrtIdElement}
                    className="form-control"
                    id="userId"
                    placeholder="Enter your user ID..." />

            </div>
            <div className="mb-3">
                <label htmlFor="title"
                    className="form-label">
                    Post title
                </label>
                <input type="text"
                    ref={titleElement}
                    className="form-control"
                    id="title"
                    placeholder="Title of you post..." />

            </div>

            <div className="mb-3">
                <label htmlFor="body"
                    className="form-label">
                    Post Content
                </label>
                <textarea type="text"
                    ref={bodyElement}
                    rows={3}
                    className="form-control"
                    id="body"
                    placeholder="Write your content here ..." />

            </div>

            <div className="mb-3">
                <label htmlFor="reaction"
                    className="form-label">
                    Number of reaction
                </label>
                <input type="text"
                    ref={reactionElement}
                    className="form-control"
                    id="reaction"
                    placeholder="How many people reacted on the post" />

            </div>
            <div className="mb-3">
                <label htmlFor="tags"
                    className="form-label">
                    Tags
                </label>
                <input type="text"
                    ref={tagsElement}
                    className="form-control"
                    id="tags"
                    placeholder="Enter you Tags here ..." />

            </div>



            <button type="submit" className="btn btn-primary">POST</button>
        </form>
    </>;
}

export default CreatePost;