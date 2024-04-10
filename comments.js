// Create web server
// Create comments array
// Create comments router
// Create comments router get
// Create comments router post
// Create comments router put
// Create comments router delete
// Export comments router
// Import comments router
// Use comments router
// Listen to port 5000

const express = require('express');
const commentsRouter = express.Router();

const comments = [
  {
    id: 1,
    username: 'user1',
    comment: 'comment1',
  },
  {
    id: 2,
    username: 'user2',
    comment: 'comment2',
  },
  {
    id: 3,
    username: 'user3',
    comment: 'comment3',
  },
];

commentsRouter.get('/', (req, res) => {
  res.json(comments);
});

commentsRouter.post('/', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

commentsRouter.put('/:id', (req, res) => {
  const id = req.params.id;
  const comment = req.body;
  comments[id - 1] = comment;
  res.json(comment);
});

commentsRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  comments.splice(id - 1, 1);
  res.json(comments);
});

module.exports = commentsRouter;

// Path: index.js
// Import express
// Import comments router
// Create web server
// Use json
// Use comments router
// Listen to port 5000

const express = require('express');
const commentsRouter = require('./comments');

const app = express();

app.use(express.json());

app.use('/comments', commentsRouter);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

// Run the server
// Open Postman
// Test the