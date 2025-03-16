# Backend API Documentation

## POST /users/register

### Description
This endpoint registers a new user by validating the input data and creating a user record if all required fields are valid.

### Request Data
- **fullname** (object)
  - **firstname** (string, required): Minimum 3 characters.
  - **lastname** (string, optional): Minimum 3 characters if provided.
- **email** (string, required): Must be a valid email and at least 6 characters.
- **password** (string, required): Minimum 6 characters.

#### Example Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Response

#### Success (201 Created)
- Returns a JSON containing a JWT token and the created user's details (password is excluded).

Example:
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

#### Error (400 Bad Request)
- Returns a JSON object with error details if the provided data fails validation.
