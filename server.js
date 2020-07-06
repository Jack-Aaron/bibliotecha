const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

//socket.io
const server = require('http').createServer(app)
const io = require('socket.io').listen(server);

io.on('connection', client => {
  client.on('notifyUser', () => {
    console.log('client is saving book to db ');
    client.emit('timer', new Date());
  })
})

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build')); // serve the static react app
  app.get(/^\/(?!api).*/, (req, res) => { // don't serve api routes to react app
    res.sendFile(path.join(__dirname, './client/build/index.html'));
  });
  console.log('Serving React App...');
};

app.use(routes);

// MongoDB via Mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

