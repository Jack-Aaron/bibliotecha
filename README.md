# Bibliotecha

### Overview
User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database. This application was written from scratch using the MERN stack.

![Books Search demo gif](/demo.gif.gif?raw=true)

### Development Process

Since this application uses a third-party API provided by Google, it was important to first understand the object response when calling the API so it could be displayed in a View to the user in a standardized fashion. I modified the URL constructor in a way that satisfied all types of book queries from the search bar.

Sometimes a book description would contain HTML, so I had to learn how to unescape HTML code in React in order to always display descriptions properly.

I used React-Bootstrap for a clean and simple design that mirrors a Google application, but also added a "bookish" style to make it unique.

### Technologies Used
* HTML/CSS
* Javascript ES6
* React
* [React-Bootstrap](https://react-bootstrap.github.io/)
* REST APIs
* Express.js
* axios
* MongoDB
* Mongoose
* mLab
* Robo 3T
* Heroku
* Kanban
* ESLint

### Future Improvements
* implement [Socket.io](https://socket.io/) for Save/Delete notifications

### Links
* [Application](https://protected-basin-70677.herokuapp.com/)
