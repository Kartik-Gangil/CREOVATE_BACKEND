
# CREOVATE_BACKEND

[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

Backend server for CREOVATE, handling email sending functionality.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Scripts](#scripts)
- [License](#license)

## Description

This backend server, built with Node.js and Express, provides an API endpoint for sending emails. It uses Nodemailer to send emails via Gmail and includes CORS support for cross-origin requests.  It also supports HTTPS with provided key and certificate files.

## Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd CREOVATE_BACKEND
    ```

2.  Install the dependencies:

    ```bash
    npm install
    ```

3.  Create a `.env` file in the project root and add the following environment variables:

    ```
    user=<your_gmail_address>
    pass=<your_gmail_app_password>  #Use app password for gmail
    ```
**Note:** For Gmail, you will need to use an App Password instead of your regular password.  Enable 2-Factor Authentication on your Google account, then generate an App Password specifically for this application.

4.  Place your `private.key` and `certificate.crt` files in the root directory.

## Usage

1.  Start the server in development mode:

    ```bash
    npm run dev
    ```

    Or, start the server in production mode:

    ```bash
    npm start
    ```

2.  The server will be running on `https://YOUR_SERVER_IP:8000`.  Replace `YOUR_SERVER_IP` with the actual IP address or domain where your server is hosted.

3.  Send a POST request to `/send-email` with the following JSON body:

    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "subject": "Inquiry about services",
      "message": "I am interested in your web development services."
    }
    ```

    This will send two emails: one to the client confirming receipt of their message, and one to the owner with the client's details.

## Dependencies

*   **cors:** `^2.8.5` - For enabling Cross-Origin Resource Sharing.
*   **dotenv:** `^16.5.0` - For loading environment variables from a `.env` file.
*   **express:** `^5.1.0` -  Fast, unopinionated, minimalist web framework for Node.js (Note:  Version ^5.1.0 might be a typo as Express 5 is still in beta; consider using the latest stable 4.x version).
*   **nodemailer:** `^7.0.3` -  For sending emails from Node.js.

## Scripts

*   `test`:  Prints an error message and exits.
*   `dev`:  Starts the server using `nodemon`, which automatically restarts the server on file changes.
*   `start`: Starts the server using `node index.js`.

## License

[ISC](https://opensource.org/licenses/ISC)
```