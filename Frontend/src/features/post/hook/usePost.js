import { useContext } from "react";
import { PostContext } from "../post.context";
import { getFeed, createpost } from "../services/post.api";

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

  const handleCreatePost = async (caption, file) => {
    try {
      setLoading(true);
      const response = await createpost(caption, file);
      setFeed((prev) => [response.post, ...prev]);
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { Post, setPost, Loading, setLoading, Feed, setFeed, handleFeed, handleCreatePost };
}
