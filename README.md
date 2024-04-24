## Profile
* Siwakorn Kantanabat
* siwakornqwer@gmail.com

## Installation

1. Clone the repository
2. Install dependencies
3. Set up environment variables - Create a .env file in the root directory and add the following variables:
  * a. PORT = 5002
  * b. MONGODB_URI = <your_URL>
  * c. PASSWORD_KEY = <your_secret_key> require('crypto').randomBytes(32).toString('hex');
  * d. JWT_KEY = <your_jwt_key> require('crypto').randomBytes(32).toString('hex');
4. Use 'npm run dev' to run using nodemon
5. Access the website at http://localhost:5002 in your web browser.

