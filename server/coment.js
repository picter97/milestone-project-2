import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  // Retrieve comments on component mount
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/comments');
      setComments(response.data);
    }
    fetchData();
  }, []);

  // Handle form submission
  async function handleSubmit(event) {
    event.preventDefault();
    await axios.post('/comments', { name, text });
    setName('');
    setText('');
    // Refresh comments
    const response = await axios.get('/comments');
    setComments(response.data);
  }

  return (
    <div>
      <h2>Comments</h2>
      {comments.map(comment => (
        <div key={comment._id}>
          <p>{comment.name}</p>
          <p>{comment.text}</p>
          <p>{comment.date}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
        <label>Comment:</label>
        <textarea value={text} onChange={event => setText(event.target.value)} />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
