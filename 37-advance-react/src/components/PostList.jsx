import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LodingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const [fectching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const singal = controller.singal;
    fetch("https://dummyjson.com/posts", { singal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
    return () => {
      console.log("cleaning effect");
      controller.abort();
    };
  }, []);

  return (
    <>
      {fectching && <LoadingSpinner />}
      {!fectching && postList.length === 0 && <WelcomeMessage />}
      {!fectching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostList;
