import { useContext } from "react";
import { PostContext } from "../post.context";
import { getFeed } from "../services/post.api";
export function usePost() {
    const { Post, setPost, Loading, setLoading, Feed, setFeed } = useContext(PostContext);
          
    const handleFeed = async () => {
        try {
            const response = await getFeed();
            setFeed(response);
        } catch (error) {
            console.error("Error fetching feed:", error);
        }
    }

    return { Post, setPost, Loading, setLoading, Feed, setFeed, handleFeed };
}
