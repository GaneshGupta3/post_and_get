import { useContext, useRef } from "react";
import styles from "./CreatePost.module.css";
import { PostListContext } from "../store/post_list_store";

const CreatePost = () => {
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const userIDElement = useRef();
  const postTagsElement = useRef();

  const { addPost } = useContext(PostListContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userID = userIDElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const currentDate = new Date();
    const day = currentDate.getDate(); // Get the day of the month
    const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
    const year = currentDate.getFullYear(); // Get the full year
    const formattedDate = day + "/" + month + "/" + year;
    const postTags = postTagsElement.current.value.split(" "); 

    addPost(userID, postTitle, postBody, formattedDate,postTags);
    
    userIDElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    postTagsElement.current.value = "";
  };

  return (
    <>
      <div className={styles.postMaker}>
        <form onSubmit={(event)=>{
          handleSubmit(event)
        }}>
          <div className="mb-3">
            <label htmlFor="userID" className="form-label">
              User-ID
            </label>
            <input
              type="text"
              className="form-control"
              id="userID"
              placeholder="enter your User-ID"
              ref={userIDElement}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Post Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="how are you feeling today?"
              ref={postTitleElement}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="body"
              rows="4"
              placeholder="tell us more about it"
              ref={postBodyElement}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tags" className="form-label">
              Enter Your Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tags"
              rows="4"
              placeholder="enter your tags seperated by the space"
              ref={postTagsElement}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Post
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
