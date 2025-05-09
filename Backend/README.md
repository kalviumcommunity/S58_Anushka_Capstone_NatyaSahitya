# NatyaSahitya Backend

This is the backend server for the NatyaSahitya project, a platform dedicated to Indian classical dance forms.

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- bcrypt.js for password hashing
- CORS for cross-origin resource sharing
- dotenv for environment variables

## Project Structure

```
Backend/
├── Config/         # Database configuration
│   └── db.js
├── Model/          # Database models
│   └── user.js
├── server.js       # Express server and API routes
├── routes.js       # (Future) Separate route handlers
├── package.json    # Dependencies and scripts
└── .env            # Environment variables (not tracked in git)
```

## API Endpoints

### Authentication

- `POST /signup` - Register a new user
  - Request body: `{ username, password, email, phoneno }`
  - Response: User object or error message

- `POST /login` - Authenticate a user
  - Request body: `{ username, password }`
  - Response: Success message or error

### Health Checks

- `GET /` - Simple hello world response
- `GET /ping` - Health check endpoint (returns "pong")

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
```
git clone <repository-url>
cd Backend
```

2. Install dependencies
```
npm install
```

3. Create a `.env` file with the following variables:
```
MONGO_URL=<your-mongodb-connection-string>
PORT=8080
```

4. Start the server
```
npm start
```

The server will run on `http://localhost:8080` by default.

## Future Enhancements

- JWT authentication
- Role-based access control
- Content management endpoints
- Video upload functionality
- Premium content access control

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request 