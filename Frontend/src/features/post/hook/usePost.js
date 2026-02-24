import { useContext } from "react";
import { PostContext } from "../post.context";
import { getFeed } from "../services/post.api";
export function usePost() {

    const { Post, setPost, Loading, setLoading, Feed, setFeed } = useContext(PostContext);
          
    const handleFeed = async () => {
  try {
    setLoading(true);
    const response = await getFeed();
    setFeed(response.posts || []);
  } catch (error) {
    console.error("Error fetching feed:", error);
  } finally {
    setLoading(false);
  }
};


    return { Post, setPost, Loading, setLoading, Feed, setFeed, handleFeed };
}
