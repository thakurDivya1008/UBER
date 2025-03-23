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

## POST /user/login

### Description
This endpoint authenticates a user using email and password.

### Request Data
- **email** (string, required): Must be a valid email.
- **password** (string, required): Minimum 6 characters.

#### Example Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Response

#### Success (200 OK)
- Returns a JSON containing a JWT token and the authenticated user's details. The token is also set as an HTTP cookie.

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

#### Error (400 Bad Request / 401 Unauthorized)
- Returns a JSON object with error details if validation fails or the credentials are invalid.

## GET /users/profile

### Description
This endpoint retrieves the profile information of the authenticated user.

### Authentication
Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

### Response

#### Success (200 OK)
Returns the user's profile information.

Example:
```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```

#### Error (401 Unauthorized)
Returns if the user is not authenticated or the token is invalid.

## GET /users/logout

### Description
This endpoint logs out the user by clearing their authentication cookie and blacklisting their JWT token.

### Authentication
Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

### Response

#### Success (200 OK)
```json
{
  "message": "Logged out successfully"
}
```

#### Error (400 Bad Request)
- Returns if the Authorization header or token is missing.

#### Error (401 Unauthorized)
- Returns if the token is invalid or already blacklisted.

## Captain Routes

## POST /captains/register

### Description
This endpoint registers a new captain by validating their personal and vehicle information.

### Request Data
- **fullname** (object)
  - **firstname** (string, required): Minimum 3 characters.
  - **lastname** (string, optional): Minimum 3 characters if provided.
- **email** (string, required): Must be a valid email.
- **password** (string, required): Minimum 6 characters.
- **vehicle** (object)
  - **color** (string, required): Minimum 3 characters.
  - **plate** (string, required): Minimum 3 characters.
  - **capacity** (number, required): Minimum 1 passenger.
  - **vehicleType** (string, required): Must be one of: 'car', 'motorcycle', 'auto'.

#### Example Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Smith"
  },
  "email": "john.smith@example.com",
  "password": "securePassword123",
  "vehicle": {
    "color": "Black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Response

#### Success (201 Created)
Returns the created captain's details (excluding password).

Example:
```json
{
  "_id": "captain_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Smith"
  },
  "email": "john.smith@example.com",
  "vehicle": {
    "color": "Black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Error (400 Bad Request)
Returns validation errors if any required field is missing or invalid.

Example:
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname"
    }
  ]
}
```
