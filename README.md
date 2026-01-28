# AuthForge Backend

AuthForge is a production-ready authentication and user management backend built with Node.js, Express, and MongoDB. It implements authentication, access and refresh tokens, role-based access control (RBAC), admin controls, rate limiting, pagination, and filtering.

## Features

### Authentication

* User registration and login
* JWT access tokens (15 minutes)
* JWT refresh tokens (7 days) with rotation
* Secure logout (refresh token invalidation)
* Token refresh endpoint

### User Management

* Get current logged-in user
* Admin: get all users
* Admin: delete user
* Admin: force logout user
* Admin: change user role

### Authorization (RBAC)

* Role-based access control (user, admin)
* Middleware for authentication and authorization
* Admin self-protection (cannot downgrade own role)
* Invalid role handling

### Security and Performance

* Password hashing with bcrypt
* Rate limiting on auth and admin routes
* Centralized error handling
* Environment-based configuration

### Pagination and Filtering

* Paginated admin user list
* Role-based filtering
* Keyword search
* Accurate document counting using filters

## Tech Stack

* Node.js (ES Modules)
* Express.js
* MongoDB with Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* express-rate-limit
* dotenv

## Project Structure

```
src/
│── controllers/
│   ├── auth.controller.js
│   ├── user.controller.js
│   └── admin.controller.js
│
│── middleware/
│   ├── protect.js
│   ├── authorize.js
│   ├── error.middleware.js
│   └── rateLimiter.js
│
│── models/
│   └── User.js
│
│── routes/
│   ├── auth.routes.js
│   ├── user.routes.js
│   └── admin.routes.js
│
│── utils/
│   └── generateTokens.js
│
│── config/
│   └── db.js
│
│── app.js
│── server.js
```

## API Endpoints

### Auth Routes

```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/refresh
POST /api/auth/logout
```

### User Routes

```
GET /api/users/me
```

### Admin Routes (Admin only)

```
GET /api/admin/users        (pagination + filtering)
DELETE /api/admin/users/:id
POST /api/admin/users/:id/logout
PATCH /api/admin/users/:id/role
```

## Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_DB_URL=mongodb://localhost:27017/authforge
JWT_SECRET=your_access_token_secret
JWT_REFRESH_SECRET=your_refresh_token_secret
```

## Run Locally

```
npm install
npm run dev
```

MongoDB must be running locally:

```
mongod --dbpath <your-db-path>
```

## Testing

* Tested using Postman
* Access token sent via Authorization header
* Refresh token sent in request body

## Project Status

* Authentication complete
* Refresh token rotation implemented
* RBAC implemented
* Admin controls functional
* Pagination and filtering functional
* Rate limiting implemented
* Production-ready project structure

## Author

Built by Ayush. Focused on clean backend architecture and real-world systems.

## License

MIT License

