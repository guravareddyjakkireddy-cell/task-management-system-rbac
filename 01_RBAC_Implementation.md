# RBAC Implementation

## Overview
This project uses Role-Based Access Control (RBAC) to restrict access to APIs based on user roles.

## Roles
- **admin**: can create, update, delete, and assign tasks
- **user**: can view assigned tasks and update task status

## Files Included
- `middleware/authMiddleware.js`
- `middleware/roleMiddleware.js`
- `models/User.js`
- `routes/authRoutes.js`
- `routes/taskRoutes.js`

## How It Works
1. User logs in with email and password.
2. A JWT token is generated after successful login.
3. Protected routes use `authMiddleware` to verify the token.
4. `roleMiddleware` checks whether the logged-in user has the required role.

## Example Protected Route
```javascript
router.post("/create", authMiddleware, authorizeRoles("admin"), controllerFunction);
```

## Environment Variable
Create a `.env` file:
```env
JWT_SECRET=your_secret_key
```

## Required Packages
```bash
npm install express mongoose bcryptjs jsonwebtoken dotenv
```

## Expected Outcome
- Unauthorized users cannot access protected APIs.
- Admin users can manage all tasks.
- Normal users get limited access based on permissions.
