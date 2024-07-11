 A web app that facilitates residents of NIT Kurukshetra with Autopooling services based on destination

## Table of Contents

- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
- [Authentication](#authentication)
- [Contributing](#contributing)


## Technologies Used

- Frontend: React
- Backend: Node.js, Express
- Database: MongoDB
- Authentication: Auth0

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm
- MongoDB

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/kurukshetra-taxi-pooling.git
    cd kurukshetra-taxi-pooling
    ```

2. **Set up environment variables:**

    Create a `.env` file in the `backend` directory and add the following values:
    ```plaintext
    DB=<your-database-connection-string>
    PORT=<your-desired-port>
    ```

    Create a `.env` file in the `frontend` directory and add the following value:
    ```plaintext
    REACT_APP_BACKEND_URL=<your-backend-url>
    ```

3. **Install dependencies:**

    **Backend:**
    ```sh
    cd backend
    npm install
    ```

    **Frontend:**
    ```sh
    cd ../frontend
    npm install
    ```

## Running the Application

1. **Start the backend server:**
    ```sh
    cd backend
    npm run dev
    ```

2. **Start the frontend application:**
    ```sh
    cd ../frontend
    npm start
    ```

## Authentication

Set up Auth0 for authentication by following the official Auth0 documentation. Ensure you have the required configuration in place in the frontend for seamless user authentication.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

