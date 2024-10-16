# Chatbot Application

## Overview

This project is a web-based chatbot created using Node.js, Express, MongoDB, and Pug templates. The chatbot interacts with users by processing their messages and providing predefined responses. Conversations are stored in MongoDB, enabling easy retrieval and analysis.

## Technology Stack

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express**: A web application framework for Node.js, used to build the API.
- **MongoDB**: A NoSQL database for storing user messages and bot responses.
- **Pug**: A templating engine for generating HTML dynamically.
- **Body-parser**: Middleware for parsing incoming request bodies.

## Project Structure

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


### Description of Folders

- **models/**: Contains the Mongoose schema for MongoDB.
- **routes/**: Houses the Express routes to handle user messages and bot responses.
- **views/**: Contains Pug template files for the frontend.
- **public/**: Stores static files like CSS for styling.
- **app.js**: The main entry point of the application.
- **package.json**: Contains project metadata and dependencies.
- **.env**: Stores environment variables, including the MongoDB connection string.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js**: [Download here](https://nodejs.org/)
- **MongoDB**: [Download here](https://www.mongodb.com/try/download/community)

### Installation

1. Clone the Repository:

   ```bash
   git clone https://github.com/yourusername/chatbot.git
   cd chatbot
   npm install
   node app.js
###.env :
MONGODB_URI=your_mongodb_connection_string

  
Open your browser and go to https://botbuddy-ht6w.onrender.com/
![{0FBB828F-071C-49C6-B4CF-59BED0F303ED}](https://github.com/user-attachments/assets/4f4feb10-1f0e-4a6e-9b89-d46fc495f48c)


How to Use
Type a message in the input box and hit the "Send" button.
Chatbot Interface:
![{F7DD5E97-FABC-4D7C-8E50-323486D2CC7A}](https://github.com/user-attachments/assets/e3eec968-2f50-4d00-884e-f51c6724334b)


Conclusion
In this documentation, we created a basic chatbot using Node.js, Express, MongoDB, and Pug templates. The project demonstrates how to build a simple application with user interaction capabilities and data persistence using a NoSQL database.
