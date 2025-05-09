# NatyaSahitya - Indian Classical Dance Portal

A comprehensive platform dedicated to preserving and promoting the rich heritage of Indian classical dance forms.

## Features

- Explore 9 classical dance forms of India
- Learn about the history, theory, and practical aspects of each dance form
- User authentication system for accessing premium content
- Responsive design with cultural elements and animations
- Video sharing capabilities for dancers

## Tech Stack

- **Frontend**: React.js with Vite
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Styling**: Custom CSS with animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository
```
git clone <repository-url>
```

2. Install backend dependencies
```
cd Backend
npm install
```

3. Install frontend dependencies
```
cd Frontend/Dance
npm install
```

4. Create a `.env` file in the Backend directory with the following variables:
```
MONGO_URL=<your-mongodb-connection-string>
PORT=8080
```

### Running the Application

1. Start the backend server
```
cd Backend
npm start
```

2. Start the frontend development server
```
cd Frontend/Dance
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Image Assets

Before deploying the application, you need to add the required image assets in the `src/assets` directory. Check the `src/assets/placeholders/README.md` file for a list of required images.

## Project Structure

```
├── Backend/
│   ├── Config/         # Database configuration
│   ├── Model/          # Database models
│   ├── server.js       # Express server
│   └── routes.js       # API routes
│
└── Frontend/
    └── Dance/
        ├── public/     # Public assets
        └── src/
            ├── assets/     # Images and icons
            ├── Components/ # React components
            └── ...
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Created by Anushka Bhatt
- Inspired by the rich cultural heritage of Indian classical dance forms
