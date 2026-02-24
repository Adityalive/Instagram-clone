import React, { useEffect } from 'react';
import Post from '../components/Post';
import { usePost } from '../hook/usePost';
import '../style/post.style.scss';

const Feed = () => {
  const { Feed, Loading, handleFeed } = usePost();

  useEffect(() => {
    handleFeed();
  }, []);

  return (
    <main className="feed-page">
      <div className="feed">
        <div className="posts">
          {Loading && <p>Loading...</p>}
          {!Loading && Feed.map((post) => <Post key={post._id} user={post.user} post={post} />)}
        </div>
      </div>
    </main>
  );
};

export default Feed;
