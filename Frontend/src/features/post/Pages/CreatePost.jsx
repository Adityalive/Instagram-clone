import React from 'react'
import { useState, useRef } from 'react'
import "../style/Create.post.scss"
import { usePost } from '../hook/usePost'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const { handleCreatePost, Loading } = usePost();
  const [caption, setCaption] = useState('');
  const postImageInputFieldRef = useRef(null)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();
    const file = postImageInputFieldRef.current?.files?.[0];
    if (!file) return;

    await handleCreatePost(caption, file);
    navigate('/')
  }

  if (Loading) {
    return (
      <main>
        <h1>creating post</h1>
      </main>
    )
  }

  return (
    <main className="create-post-page">
      <div className="create-post-bg-shape" />
      <section className="create-post-card">
        <h1>Create Post</h1>
        <p>Share a moment with your followers</p>

        <form id="form-container" className="create-post-form" onSubmit={handleSubmit}>
          <label htmlFor="caption">Caption</label>
          <input
            id="caption"
            type="text"
            placeholder="Write a caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />

          <label htmlFor="file">Select Image</label>
          <input
            id="file"
            type="file"
            accept="image/*"
            ref={postImageInputFieldRef}
          />

          <button type="submit">Post</button>
        </form>
      </section>
    </main>
  );
}

export default CreatePost
