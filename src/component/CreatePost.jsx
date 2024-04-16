import 'bootstrap/dist/css/bootstrap.css' 

const CreatePost = () => {

    

return <>
    <form className="create-post" >

        <div className="mb-3">
            <label htmlFor="userId"
                className="form-label">
                User Id
            </label>
            <input type="text"
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
                className="form-control"
                id="tags"
                placeholder="Enter you Tags here ..." />

        </div>



        <button type="submit" className="btn btn-primary">POST</button>
    </form>
</>;
}

export default CreatePost;