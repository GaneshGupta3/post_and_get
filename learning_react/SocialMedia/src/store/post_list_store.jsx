import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addPosts: () => {},
});

const postListReducer = (currPostList, action) => {
  {
    /* using this because of async nature of react as we want to use latest value of the postlists */
  }
  let newPostList = currPostList;

  if (action.type === "DEL_POST") {
    newPostList = newPostList.filter(
      (post) => action.payload.postID !== post.id
    );
  } else if (action.type === "ADD_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [
      ...currPostList,
      {
        userID: action.payload.userID,
        title: action.payload.postTitle,
        body: action.payload.postBody,
        date: action.payload.date,
        tags: action.payload.tags,
        id: action.payload.id,
        reactions: action.payload.reactions,
      },
    ];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = (userID, postTitle, postBody, formattedDate, postTags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        userID: userID,
        postTitle: postTitle,
        postBody: postBody,
        date: formattedDate,
        tags: postTags,
        id: postList.length + 1,
        reactions: 0,
      },
    });
  };
  const addPosts = (posts) => {
    dispatchPostList({
      type: "ADD_POSTS",
      payload: {
        posts,
      },
    });
  };
  const deletePost = (postID) => {
    dispatchPostList({
      type: "DEL_POST",
      payload: {
        postID: postID,
      },
    });
  };

  return (
    <PostListContext.Provider
      value={{
        postList,
        addPost,
        deletePost,
        addPosts,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
