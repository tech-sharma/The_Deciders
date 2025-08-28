# Day 5: Express.js Basics

## Overview
This project demonstrates how to create an API using Express.js with basic GET and POST routes.

### Steps to Run
1. Install dependencies:
    ```bash
    npm install express
    ```
2. Run the server:
    ```bash
    node day5-express.js
    ```
3. Test the API:
   - **GET Root:**  
     ```
     http://localhost:3000/
     ```
   - **GET Students:**  
     ```
     http://localhost:3000/students
     ```
   - **POST Students:**  
     Use Postman or curl with JSON body:
     ```json
     {
       "id": 4,
       "name": "Charlie",
       "marks": 88
     }
     ```