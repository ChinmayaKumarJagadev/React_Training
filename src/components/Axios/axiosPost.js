import React, { useState } from 'react';
import axios from 'axios';

const AxiosPost = () =>{
  const [newPost, setNewPost] = useState({ title: '', body: '' });

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        newPost
      );
      console.log(response.data)
      alert('New post created:');
    } catch (error) {
      console.error('Error creating new post:', error);
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewPost(prevPost => ({
      ...prevPost,
      [name]: value
    }));
  };

  return (
    <div className="container">
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Body</label>
          <textarea
            className="form-control"
            name="body"
            value={newPost.body}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </form>
    </div>
  );
}

export default AxiosPost;
