# Middleware

## A. Middleware in Express.js is a function that has access to the request object (req), response object (res), and the next function in the request-response cycle.

## B. Purpose: Middleware is used to execute code, modify req and res objects, end the request-response cycle, or call the next middleware function.

## C. Flow: Middleware functions are executed in the order they are defined in the application.

## Types of Middleware:

- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware
