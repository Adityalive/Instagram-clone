import React, { useEffect } from 'react';
import Post from '../components/Post';
import { usePost } from '../hook/usePost';
import '../style/post.style.scss';
import Navbar from '../../shared/Navbar';

const Feed = () => {
  const { Feed, Follow, Loading, handleFeed, handleFollow, handleUnfollow } = usePost();

  useEffect(() => {
    handleFeed();
  }, []);

  async function handleClick(username) {
    if (!username) return;
    await handleFollow(username);
  }

  async function handleUnfollowClick(username) {
    if (!username) return;
    await handleUnfollow(username);
  }

  const userMap = new Map();
  Feed.forEach((post) => {
    if (post.user?.username && !userMap.has(post.user.username)) {
      userMap.set(post.user.username, post.user);
    }
  });
  const allUsers = Array.from(userMap.values());
  const followingSet = new Set(Follow.map((item) => item.following));
  const followingUsers = allUsers.filter((user) => followingSet.has(user.username));
  const toBeFollowedUsers = allUsers.filter((user) => !followingSet.has(user.username));

  return (
    <main className="feed-page">
      <Navbar />
      <div className="feed">
        <aside className="followed">
          <h3>People</h3>

          <div className="follow-group">
            <h4>Following</h4>
            {followingUsers.length === 0 && <p className="empty-text">No following yet</p>}
            {followingUsers.map((user) => (
              <div key={`following-${user.username}`} className="peruser">
                <div className="img-profile">
                  <img src={user.profileImage} alt={user.username || 'user'} />
                </div>
                <p>{user.username || 'Unknown'}</p>
                <button onClick={() => handleUnfollowClick(user.username)} type="button">
                  Unfollow
                </button>
              </div>
            ))}
          </div>

          <div className="follow-group">
            <h4>To be Followed</h4>
            {toBeFollowedUsers.length === 0 && <p className="empty-text">No suggestions</p>}
            {toBeFollowedUsers.map((user) => (
              <div key={`suggest-${user.username}`} className="peruser">
                <div className="img-profile">
                  <img src={user.profileImage} alt={user.username || 'user'} />
                </div>
                <p>{user.username || 'Unknown'}</p>
                <button onClick={() => handleClick(user.username)} type="button">
                  Follow
                </button>
              </div>
            ))}
          </div>
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
