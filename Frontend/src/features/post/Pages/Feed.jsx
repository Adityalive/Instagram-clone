import React, { useEffect } from 'react';
import Post from '../components/Post';
import { usePost } from '../hook/usePost';
import '../style/post.style.scss';
import Navbar from '../../shared/Navbar';

const Feed = () => {
  const { Feed, Loading, handleFeed,handlefollow } = usePost();

  useEffect(() => {
    handleFeed();
  }, []);
       function handlefollow(userId) {
        handlefollow(userId);
      }
  return (
    <main className="feed-page">
      <Navbar />
      <div className="feed">

        {/* LEFT: suggested users sidebar */}
        <aside className="followed">
          <h3>To be Followed</h3>
          {Feed.map((post) => (
            <div key={post._id} className="peruser">
              <div className="img-profile">
                <img src={post.user?.profileImage} alt={post.user?.username || 'user'} />
              </div>
              <p>{post.user?.username || 'Unknown'}</p>
              <button onClick={() => handlefollow(user.id)} type="button">Follow</button>
            </div>
          ))}
        </aside>

        {/* RIGHT: posts feed */}
        <div className="posts">
          {Loading && <p>Loading...</p>}
          {!Loading && Feed.map((post) => (
            <Post key={post._id} user={post.user} post={post} />
          ))}
        </div>

      </div>
    </main>
  );
};

export default Feed;