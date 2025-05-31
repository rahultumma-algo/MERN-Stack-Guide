# MERN Stack User Module Backend

A full-featured Node.js backend for user management with registration, login, and CRUD operations. Built with Express, MongoDB (Mongoose), JWT authentication, and includes filtering, sorting, and pagination.

## Features
- User registration and login with JWT authentication
- CRUD endpoints for users (Create, Read, Update, Delete)
- Filtering, sorting, pagination on user list
- Passwords hashed with bcrypt
- Middleware for authentication
- Role-based access control (admin required for delete)
- Environment variable support with dotenv
- CORS and request logging (morgan)

## Setup
1. Clone the repo and install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the root with:
   ```env
   MONGO_URI=mongodb://localhost:27017/mernstackguide
   JWT_SECRET=your_jwt_secret_here
   PORT=5000
   ```
3. Start the server:
   ```bash
   node src/server.js
   ```

## API Endpoints

### Auth
- `POST /api/users/register` — Register a new user
- `POST /api/users/login` — Login and receive JWT

### User CRUD (require Authorization: Bearer <token>)
- `POST /api/users/` — Create user (optionally set role: 'user' or 'admin')
- `GET /api/users/` — List users (supports filters)
  - Query params: `sortBy`, `order`, `limit`, `skip`, `filterBy`, `filterValue`, `regex`
- `GET /api/users/:id` — Get user by ID
- `PUT /api/users/:id` — Update user
- `DELETE /api/users/:id` — Delete user (**admin only**)

## Example: List Users with Filters
```
GET /api/users?sortBy=name&order=asc&limit=5&skip=0&filterBy=username&filterValue=john&regex=true
```

## User Roles
- `role` field: 'user' (default) or 'admin'
- Only users with `role: 'admin'` can delete users

## License
MIT