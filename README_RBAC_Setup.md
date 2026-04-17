# RBAC Setup Guide

## Step 1
Copy the included folders into your backend project:
- `middleware`
- `models`
- `routes`
- `docs`

## Step 2
Install dependencies:
```bash
npm install express mongoose bcryptjs jsonwebtoken dotenv
```

## Step 3
Add your `.env` file:
```env
JWT_SECRET=your_secret_key
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## Step 4
Use routes in your main `app.js`:
```javascript
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running");
});
```

## Step 5
Test with Postman:
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/tasks/create` (admin only)
- `GET /api/tasks/all` (admin and user)
