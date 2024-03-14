# Project Name

## Description
This project is a web application for managing tasks and subtasks. It provides APIs for creating, updating, and deleting tasks, as well as associating subtasks with tasks.

## Features
- Create, read, update, and delete tasks
- Associate subtasks with tasks
- User registration and authentication

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing

## Installation
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies: `npm install`
4. Set up environment variables:
   - Create a `.env` file in the root directory
   - Define the following variables:
     ```
     DATABASE_URL=<your-database-url>
     JWT_SECRET=<your-secret-key>
     ```
5. Start the server: `npm start`

## API Endpoints
- `/api/task`: CRUD operations for tasks
- `/api/subtask`: CRUD operations for subtasks
- `/api/user/register`: User registration
- `/api/user/login`: User login

## Usage
1. Register a new user using the `/api/user/register` endpoint.
2. Log in with your credentials using the `/api/user/login` endpoint to obtain a JWT token.
3. Use the token to authenticate and access protected routes for managing tasks and subtasks.

## Contributing
Contributions are welcome! Please follow the guidelines in the CONTRIBUTING.md file.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments
- Special thanks to the developers of Express.js, MongoDB, and other libraries used in this project.
