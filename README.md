Chatbot Application
=====Overview=====
This project is a web-based chatbot created using Node.js, Express, MongoDB, and Pug templates. 
The chatbot interacts with users by processing their messages and providing predefined responses. 
Conversations are stored in MongoDB, enabling easy retrieval and analysis.

=====Technology Stack=====
Node.js: A JavaScript runtime for building server-side applications.
Express: A web application framework for Node.js, used to build the API.
MongoDB: A NoSQL database for storing user messages and bot responses.
Pug: A templating engine for generating HTML dynamically.
Body-parser: Middleware for parsing incoming request bodies.

=====Project Structure=====
java
Copy code
chatbot/
├── models/
│   └── Chat.js
├── routes/
│   └── chatbotRoutes.js
├── views/
│   └── index.pug
├── public/
│   └── styles.css
├── app.js
├── package.json
└── .env

=====Description of Folders====
models/: Contains the Mongoose schema for MongoDB.
routes/: Houses the Express routes to handle user messages and bot responses.
views/: Contains Pug template files for the frontend.
public/: Stores static files like CSS for styling.
app.js: The main entry point of the application.
package.json: Contains project metadata and dependencies.
.env: Stores environment variables, including the MongoDB connection string.

=====Getting Started=====
Prerequisites
Make sure you have the following installed:

Node.js: Download here
MongoDB: Download here
Installation
Clone the Repository:

git clone https://github.com/yourusername/chatbot.git
cd chatbot
Install Dependencies:

npm install
Configure Environment Variables:

Create a .env file in the root directory:

=====Running the Application=====
Start the Server:

node app.js
Access the Chatbot:

Open your browser and go to 
<!-- Replace with your screenshot filename -->

How to Use
Type a message in the input box and hit the "Send" button.
The bot will respond with predefined replies based on your input.
<!-- Replace with your screenshot filename -->

Screenshots
Chatbot Interface:

<!-- Replace with your screenshot filename -->

User Interaction:

<!-- Replace with your screenshot filename -->

Conclusion
In this documentation, we created a basic chatbot using Node.js, Express, MongoDB, and Pug templates. The project demonstrates how to build a simple application with user interaction capabilities and data persistence using a NoSQL database.
