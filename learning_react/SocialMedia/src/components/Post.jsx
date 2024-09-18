import { useContext } from "react";
import styles from "./Post.module.css";
import { MdDelete } from "react-icons/md";
import { AiFillLike,AiFillDislike } from "react-icons/ai";
import { PostListContext } from "../store/post_list_store";

const Post = ({ post }) => {

  const {deletePost} = useContext(PostListContext);

  return (
    <>
      <div className={`card ${styles.cardStyle}`} style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>{deletePost(post.id)}}>
            <MdDelete />
          </span>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <div className={`${styles.tagContainer}`}>
            {post.tags.map((tag) => {
              return (
                <span
                  key={tag}
                  className={`badge text-bg-primary ${styles.tag}`}
                >
                  {"#" + tag}
                </span>
              );
            })}
          </div>
          <div className={`${styles.reactionsContainer}`}>
            <button className={`${styles.reaction}`}><AiFillLike />{post.reactions.likes}</button>
            <button className={`${styles.reaction}`}><AiFillDislike />{post.reactions.dislikes}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
