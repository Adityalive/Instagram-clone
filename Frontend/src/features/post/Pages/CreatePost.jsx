import React from 'react'
import { useState } from 'react'
import "../style/Create.post.scss"
const CreatePost = () => {
  const [caption, setCaption] = useState('');
  const [File, setFile] = useState(null);
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
  <main className="create-post-page">
    <div className="create-post-bg-shape" />
    <section className="create-post-card">
      <h1>Create Post</h1>
      <p>Share a moment with your followers</p>

      <form id="form-container" className="create-post-form">
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
          hidden
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button type="submit">Post</button>
      </form>
    </section>
  </main>
);
}

export default CreatePost