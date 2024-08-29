# Razorpay Integration with Node.js and MongoDB    

This project demonstrates how to integrate Razorpay payment gateway with a Node.js server using Express and MongoDB. It includes user registration, login, and payment functionalities, secured with JWT authentication.     
    
## Features             
            
- User registration with password encryption                   
- User login with JWT authentication
- Create Razorpay payment orders         
- Verify Razorpay payments       
- Retrieve user credit amounts
      
## Technologies Used            
            
- Node.js
- Express.js     
- MongoDB
- Mongoose          
- Razorpay API
- JWT for authentication
- bcrypt for password hashing

## Prerequisites

- Node.js
- MongoDB
- Razorpay account

## Installation  
- Clone the repository:**
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

## Install dependencies:
- npm install

## Set up environment variables:
Create a .env file in the root directory and add the following environment variables:

PORT=3000
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
JWT_SECRET=your_jwt_secret
MONGO_URI=your_mongo_uri

## Start the server:
npm run dev


This project is licensed under the MIT License. See the LICENSE file for details.
### Additional Steps

1. **Update the repository URL in the `README.md` file**:
   Replace `https://github.com/your-username/your-repo-name.git` with the actual URL of your repository.

2. **Create a `LICENSE` file**:
   Add a license to your repository to specify how others can use your project.

By following these instructions, you will have a comprehensive `README.md` file that provides a clear overview of your project, installation instructions, and usage examples.




--------------------------------------------------------------------------------
## API Endpoints
Authentication - Register
 URL: /api/auth/register
--- Method: POST
Body:
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "1234567890",
  "password": "password123"
}

- Login
 URL: /api/auth/login
--- Method: POST
Body:
{
  "email": "john.doe@example.com",
  "password": "password123"
}

# Payments
Create Order
 URL: /api/payments/create-order
-- Method: POST
Headers: Authorization: Bearer your_jwt_token
Body:
{
  "amount": 500
}

## Verify Payment
 URL: /api/payments/verify-payment
-- Method: POST
Headers: Authorization: Bearer your_jwt_token

Body:
{
  "razorpay_order_id": "order_id",
  "razorpay_payment_id": "payment_id",
  "razorpay_signature": "signature"
}

## User
Get Amount  
 URL: /api/user/amount
-- Method: GET  Headers: Authorization: Bearer your_jwt_token







