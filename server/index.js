const express = require('express');
const mongoose = require('mongoose');
const Comment = require('./commentModel');

const app = express();

// Connect to MongoDB

// Retrieve comments
app.get('/comments', async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});

// Add comment
app.post('/comments', async (req, res) => {
  const { name, text } = req.body;
  const comment = new Comment({ name, text });
  await comment.save();
  res.json(comment);
});

mongoose.set('strictQuery', true) 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err));

  const PORT = process.env.PORT || 8080

app.listen(PORT, console.log (`listening on ${PORT}`));