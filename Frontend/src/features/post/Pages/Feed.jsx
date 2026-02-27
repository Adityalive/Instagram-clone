import React, { useEffect } from 'react';
import Post from '../components/Post';
import { usePost } from '../hook/usePost';
import '../style/post.style.scss';
import Navbar from '../../shared/Navbar';

const Feed = () => {
  const { Feed, Loading, handleFeed, handleFollow } = usePost();

  useEffect(() => {
    handleFeed();
  }, []);

  function handleClick(username) {
    if (!username) return;
    handleFollow(username);
  }

  return (
    <main className="feed-page">
      <Navbar />
      <div className="feed">
        <aside className="followed">
          <h3>To be Followed</h3>
          {Feed.map((post) => (
            <div key={post._id} className="peruser">
              <div className="img-profile">
                <img src={post.user?.profileImage} alt={post.user?.username || 'user'} />
              </div>
              <p>{post.user?.username || 'Unknown'}</p>
              <button onClick={() => handleClick(post.user?.username)} type="button">
                Follow
              </button>
            </div>
          ))}
        </aside>

        <div className="posts">
          {Loading && <p>Loading...</p>}
          {!Loading && Feed.map((post) => <Post key={post._id} user={post.user} post={post} />)}
        </div>
      </div>
    </main>
  );
};

export default Feed;
