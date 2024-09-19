import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import styles from "./Postlist.module.css";
import { PostListContext } from "../store/post_list_store";
import NoPostMessage from "./NoPostMessage";
import LoadingScreen from "./LoadingScreen";

const Postlist = () => {
  const { postList, addPosts } = useContext(PostListContext);

  
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    console.log("fetching started");
    fetch("https://dummyjson.com/posts", {signal})
      .then((res) => res.json())
      .then((obj) => {
        console.log(obj);
        addPosts(obj.posts);
        console.log("fetch returned!");
        setFetching(false);
      });
    console.log("fetching finished!");
    return ()=>{
      controller.abort();
      console.log("aborted")
    }
  }, []);

  return (
    <>
      {fetching && <LoadingScreen />}
      <div className={`${styles.Postlist}`}>
        {!fetching && postList.length === 0 && <NoPostMessage />}
        {!fetching && postList.map((post) => {
          return <Post key={post.id} post={post}></Post>;
        })}
      </div>
    </>
  );
};

export default Postlist;
