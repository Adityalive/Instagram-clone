import { createContext, useState } from 'react';

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [Post, setPost] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [Feed, setFeed] = useState([]);
  const [Follow, setFollow] = useState([]);

  return (
    <PostContext.Provider value={{ Post, setPost, Loading, setLoading, Feed, setFeed, Follow, setFollow }}>
      {children}
    </PostContext.Provider>
  );
}
