import { useContext } from 'react';
import { PostContext } from '../post.context';
import { getFeed, createpost, follow, unfollow } from '../services/post.api';

export function usePost() {
  const { Post, setPost, Loading, setLoading, Feed, setFeed, Follow, setFollow } = useContext(PostContext);

  const handleFeed = async () => {
    try {
      setLoading(true);
      const response = await getFeed();
      setFeed(response.posts || []);
    } catch (error) {
      console.error('Error fetching feed:', error);
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
      console.error('Error creating post:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleFollow = async (username) => {
    try {
      setLoading(true);
      const response = await follow(username);
      setFollow((prev) => {
        const exists = prev.some((item) => item.following === username);
        if (exists) return prev;
        return [response.follow, ...prev];
      });
      return response;
    } catch (error) {
      console.error('Error following user:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const handleUnfollow = async (username) => {
    try {
      setLoading(true);
      const response = await unfollow(username);
      setFollow((prev) => prev.filter((item) => item.following !== username));
      return response;
    } catch (error) {
      console.error('Error unfollowing user:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    Post,
    setPost,
    Loading,
    setLoading,
    Feed,
    setFeed,
    Follow,
    setFollow,
    handleFeed,
    handleCreatePost,
    handleFollow,
    handleUnfollow,
  };
}
