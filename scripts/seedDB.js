const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  'mongodb://localhost/bookssearch', (err) => {
    if (err) throw err;
    else console.log('Successfully connected to MongoDB');
  }
);

const bookSeed = new db.Book(
  {
    title: 'The Dead Zone',
    authors: ['Stephen King'],
    description: '<b>Set in the fictional town of Castle Rock, Maine</b><br> <br><b>A #1 <i>New York Times</i> bestseller about a man who wakes up from a five-year coma able to see people’s futures and the terrible fate awaiting mankind—a “compulsive page-turner” (<i>The Atlanta Journal-Constitution</i>).</b><br><br>Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people’s futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma and people clamor for him to solve their problems.<br> <br> When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. With “powerful tension that holds the reader to the story like a pin to a magnet” (<i>The Houston Post</i>), <i>The Dead Zone</i> is a “faultlessly paced…continuously engrossing” (<i>Los Angeles Times</i>) novel of second sight.',
    image: 'http://books.google.com/books/content?id=ZbUACwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    link: 'http://books.google.com/books?id=ZbUACwAAQBAJ&hl=&source=gbs_api'
  }
);

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany([bookSeed]))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
