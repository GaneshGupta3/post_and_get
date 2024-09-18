import { useContext, useEffect } from "react";
import Post from "./Post";
import styles from "./Postlist.module.css";
import { PostListContext } from "../store/post_list_store";
import NoPostMessage from "./NoPostMessage";

const Postlist = () => {
  const { postList, addPosts } = useContext(PostListContext);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => {
        console.log(obj);
        addPosts(obj.posts);
      });
  },[]);

  return (
    <div className={`${styles.Postlist}`}>
      {postList.length === 0 && <NoPostMessage />}
      {postList.map((post) => {
        return <Post key={post.id} post={post}></Post>;
      })}
    </div>
  );
};

export default Postlist;
