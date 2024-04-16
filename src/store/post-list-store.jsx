import { createContext, useReducer } from "react";




export const PostList = createContext({          /*its give structure of Context Provider*/
    postList: [],                         /* That's helps to get auto suggation  */
    addPost: () => { },                      /* It is also called API desining and Contract Desining */
    deletePost: () => { },
});


const postListReducer = (currPostList, action) => {
    let newPostList = currPostList
    console.log(post => post.id)                            /* useReducer( Function() , Inital_post)  */
    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter(post => post.id !== action.payload.postsId);
    }
    return newPostList;
};


const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, Default_Post_list_1);
    const addPost = (userId,title,body,reaction,tags) => { 
        
        console.log(userId,title,body,reaction,tags);
    };

    const deletePost = (postsId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: { postsId, },
        });

    };

    return <PostList.Provider value={{ postList, addPost, deletePost }} >
        {children}
    </PostList.Provider>
}

const Default_Post_list_1 = [
    {
        id: '1',
        title: 'Bilgates with Doly chaewala',
        body: 'Bilgates try Doly chai',
        reactions: '5',
        userId: '1234567',
        tags: ['vacation', 'mumbai', 'Enjoying']
    },


    {
        id: '2',
        title: 'Prime Minister Narendra Modi visited Lakshadweep ',
        body: 'recently, and his trip garnered significant attention. Here are some key highlights',
        reactions: '100',
        userId: '341323',
        tags: ['vacation', 'mumbai', 'Enjoying']
    }
];

export default PostListProvider;