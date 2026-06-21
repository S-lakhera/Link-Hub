# 🔗 LinkHub

A full-stack **link-in-bio** platform where users can create a personalized public profile page with all their important links — similar to Linktree. Users can manage, feature, and track clicks on their links, and share a public profile URL.

**Live Demo:** [link-hub-client.vercel.app](https://link-hub-client.vercel.app) &nbsp;|&nbsp; **Backend:** [link-hub-zhwv.onrender.com](https://link-hub-zhwv.onrender.com)

---

## 📸 Features

- 🔐 JWT-based authentication via **HTTP-only cookies**
- 👤 Public profile page at `/:username`
- 🔗 Create, update, delete, and feature links
- 📊 Track link click counts
- 🌐 Social links (GitHub, LinkedIn, Twitter, YouTube, Instagram)
- 🛡️ Input validation on all routes using `express-validator`
- 🚀 Deployed on **Vercel** (client) + **Render** (server)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, Vite, Tailwind CSS v4, React Router v8 |
| **Backend** | Node.js, Express 5 |
| **Database** | MongoDB + Mongoose |
| **Auth** | JWT (jsonwebtoken) + HTTP-only Cookies |
| **Validation** | express-validator |
| **HTTP Client** | Axios |

---

## 📁 Folder Structure

```
Linkhub/
├── client/                      # React frontend (Vite)
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   │   └── axiosInstance.jsx    # Axios base config (withCredentials)
│   │   ├── assets/
│   │   ├── components/              # Reusable UI components
│   │   ├── context/
│   │   │   └── authContext.jsx      # Global auth state & session check
│   │   ├── features/                # Feature-based modules
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── layouts/                 # Page layout wrappers
│   │   ├── routes/                  # Route definitions
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── vercel.json                  # SPA rewrite rule for Vercel
│   └── package.json
│
└── server/                      # Express backend
    ├── server.js                    # Entry point
    └── src/
        ├── app.js                   # Express app setup (CORS, routes)
        ├── config/                  # DB connection config
        ├── controllers/
        │   ├── User.controller.js   # Auth & profile logic
        │   └── link.controller.js   # Link CRUD logic
        ├── daos/
        │   ├── user.daos.js         # User DB queries
        │   └── link.daos.js         # Link DB queries
        ├── middlewares/
        │   ├── auth.middleware.js   # JWT cookie verification (Protect)
        │   └── validate.middleware.js # express-validator error handler
        ├── models/
        │   ├── user.model.js        # User Mongoose schema
        │   └── link.model.js        # Link Mongoose schema
        ├── routes/
        │   ├── auth.routes.js       # /api/auth/*
        │   └── link.routes.js       # /api/links/*
        ├── utils/
        │   └── authToken.js         # generateToken / verifyToken
        └── validators/
            ├── auth.validators.js
            └── link.validator.js
```

---


## ⚙️ Local Setup

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local or Atlas cluster)
- Git

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/linkhub.git
cd linkhub
```

---

### 2. Setup the Server

```bash
cd server
npm install
```

Create a `.env` file inside the `server/` folder:

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
JWT_SECRET=your_super_secret_key_here
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

Start the development server:

```bash
npm run dev
```

Server runs at: `http://localhost:3000`

---

### 3. Setup the Client

```bash
cd ../client
npm install
```

Create a `.env` file inside the `client/` folder:

```env
VITE_API_URL=http://localhost:3000/api
```

Start the development client:

```bash
npm run dev
```

Client runs at: `http://localhost:5173`

---

## 🚀 Deployment

| Service | Platform | Notes |
|---|---|---|
| **Frontend** | Vercel | Add `vercel.json` with SPA rewrite (already included) |
| **Backend** | Render | Set `NODE_ENV=production` and `CLIENT_URL=https://your-app.vercel.app` |

### Required Render Environment Variables

```env
PORT=3000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_production_secret
CLIENT_URL=https://your-app.vercel.app
NODE_ENV=production
```

---

## 🔒 Authentication Flow

1. User logs in → server sets `auth_Token` as an **HTTP-only cookie**
2. All protected API requests automatically send the cookie via `withCredentials: true`
3. `Protect` middleware on the server verifies the JWT from the cookie
4. On page load, client calls `GET /api/auth/me` to restore session from cookie
5. On logout → cookie is cleared on the server side

---

## 📦 Scripts

### Server
| Command | Description |
|---|---|
| `npm run dev` | Start with nodemon (hot reload) |
| `npm start` | Start in production mode |

### Client
| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 🔌 API Reference

> **Base URL:** `https://link-hub-xyz.onrender.com/api`
>
> **Auth:** All protected routes require the `auth_Token` cookie (set automatically on login/register). Send requests with `withCredentials: true`.

---

### 🔐 Auth Routes — `/api/auth`

---

#### `GET /api/auth/health`
Health check for auth routes.

**Response**
```json
{ "success": true, "message": "Health route testing successful" }
```

---

#### `POST /api/auth/register`
Register a new user account.

**Request Body**
| Field | Type | Required | Rules |
|---|---|---|---|
| `username` | string | ✅ | 3–30 characters, lowercase |
| `email` | string | ✅ | Valid email format |
| `password` | string | ✅ | Minimum 6 characters |

**Example Request**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "secret123"
}
```

**Success Response** `201`
```json
{
  "success": true,
  "message": "User registered successfully!",
  "user": {
    "_id": "64f...",
    "username": "johndoe",
    "email": "john@example.com",
    "name": null,
    "avatar": "https://...",
    "bio": null,
    "socials": {}
  }
}
```

> Sets `auth_Token` HTTP-only cookie on success.

**Error Response** `400`
```json
{ "success": false, "error": "This email id is already registerd." }
```

---

#### `POST /api/auth/login`
Login with email and password.

**Request Body**
| Field | Type | Required |
|---|---|---|
| `email` | string | ✅ |
| `password` | string | ✅ |

**Example Request**
```json
{
  "email": "john@example.com",
  "password": "secret123"
}
```

**Success Response** `200`
```json
{
  "success": true,
  "message": "Login successful!",
  "user": { "_id": "...", "username": "johndoe", "email": "john@example.com" }
}
```

> Sets `auth_Token` HTTP-only cookie on success.

**Error Response** `400 / 404`
```json
{ "message": "Invalid credentials" }
```

---

#### `POST /api/auth/logout`
🔒 **Protected.** Logs out the current user and clears the auth cookie.

**Success Response** `200`
```json
{
  "success": true,
  "message": "User Logged out successfully."
}
```

---

#### `GET /api/auth/me`
🔒 **Protected.** Returns the currently authenticated user's data.

**Success Response** `200`
```json
{
  "success": true,
  "message": "User found",
  "user": {
    "_id": "...",
    "username": "johndoe",
    "email": "john@example.com",
    "name": "John Doe",
    "avatar": "https://...",
    "bio": "Developer",
    "socials": { "github": "https://github.com/johndoe" }
  }
}
```

**Error Response** `401`
```json
{ "success": false, "message": "User Unauthenticated" }
```

---

#### `GET /api/auth/profile/:username`
🌐 **Public.** Fetch any user's public profile along with their links.

**URL Params**
| Param | Type | Required | Rules |
|---|---|---|---|
| `username` | string | ✅ | 3–30 characters |

**Success Response** `200`
```json
{
  "success": true,
  "user": {
    "name": "John Doe",
    "username": "johndoe",
    "avatar": "https://...",
    "bio": "Developer",
    "socials": { "github": "https://github.com/johndoe" }
  },
  "links": [
    {
      "_id": "...",
      "title": "My Portfolio",
      "url": "https://johndoe.dev",
      "description": "Check out my work",
      "isFeatured": true,
      "clicks": 42
    }
  ]
}
```

**Error Response** `404`
```json
{ "success": false, "message": "User not found" }
```

---

#### `PATCH /api/auth/profile`
🔒 **Protected.** Update the authenticated user's profile details.

> ⚠️ `email` and `password` **cannot** be updated from this route.

**Request Body** (all fields optional except `name` and `username`)
| Field | Type | Rules |
|---|---|---|
| `name` | string | Required, 2–50 characters |
| `username` | string | Required, 3–30 characters |
| `avatar` | string | Optional, valid URL |
| `bio` | string | Optional, max 250 characters |
| `socials.github` | string | Optional, valid URL |
| `socials.linkedin` | string | Optional, valid URL |
| `socials.youtube` | string | Optional, valid URL |
| `socials.instagram` | string | Optional, valid URL |
| `socials.twitter` | string | Optional, valid URL |

**Example Request**
```json
{
  "name": "John Doe",
  "username": "johndoe",
  "bio": "Full stack developer",
  "socials": {
    "github": "https://github.com/johndoe",
    "twitter": "https://twitter.com/johndoe"
  }
}
```

**Success Response** `200`
```json
{
  "success": true,
  "user": { "...updated user object..." }
}
```

---

### 🔗 Link Routes — `/api/links`

> All routes below are 🔒 **Protected** except `/api/links/:id/click`.

---

#### `GET /api/links/health`
Health check for link routes.

**Response**
```json
{ "success": true, "message": "Link routes working successfully" }
```

---

#### `POST /api/links`
🔒 **Protected.** Create a new link for the authenticated user.

**Request Body**
| Field | Type | Required | Rules |
|---|---|---|---|
| `title` | string | ✅ | 2–100 characters |
| `url` | string | ✅ | Valid URL |
| `description` | string | ❌ | Max 300 characters |

**Example Request**
```json
{
  "title": "My Portfolio",
  "url": "https://johndoe.dev",
  "description": "My personal website"
}
```

**Success Response** `201`
```json
{
  "success": true,
  "message": "Link created successfully",
  "link": {
    "_id": "...",
    "userId": "...",
    "title": "My Portfolio",
    "url": "https://johndoe.dev",
    "description": "My personal website",
    "isFeatured": false,
    "clicks": 0,
    "isDeleted": false,
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

---

#### `GET /api/links`
🔒 **Protected.** Get all links belonging to the authenticated user.

**Success Response** `200`
```json
{
  "success": true,
  "count": 3,
  "links": [
    {
      "_id": "...",
      "title": "My Portfolio",
      "url": "https://johndoe.dev",
      "isFeatured": true,
      "clicks": 10
    }
  ]
}
```

---

#### `GET /api/links/:id`
🔒 **Protected.** Get a single link by its ID.

**URL Params**
| Param | Type | Rules |
|---|---|---|
| `id` | string | Valid MongoDB ObjectId |

**Success Response** `200`
```json
{
  "success": true,
  "link": { "_id": "...", "title": "...", "url": "..." }
}
```

**Error Response** `404`
```json
{ "success": false, "message": "Link not found" }
```

---

#### `PATCH /api/links/:id`
🔒 **Protected.** Update an existing link. Only the owner can update their link.

**URL Params**
| Param | Type | Rules |
|---|---|---|
| `id` | string | Valid MongoDB ObjectId |

**Request Body** (all fields optional)
| Field | Type | Rules |
|---|---|---|
| `title` | string | 2–100 characters |
| `url` | string | Valid URL |
| `description` | string | Max 300 characters |

**Success Response** `200`
```json
{
  "success": true,
  "message": "Link updated successfully",
  "link": { "...updated link object..." }
}
```

**Error Responses**
- `403` — Not authorized to update this link
- `404` — Link not found

---

#### `PATCH /api/links/:id/feature`
🔒 **Protected.** Toggle featured status of a link.

**URL Params**
| Param | Type | Rules |
|---|---|---|
| `id` | string | Valid MongoDB ObjectId |

**Success Response** `200`
```json
{
  "success": true,
  "message": "Featured link updated successfully",
  "link": { "...updated link object..." }
}
```

---

#### `DELETE /api/links/:id`
🔒 **Protected.** Soft-delete a link (sets `isDeleted: true`).

**URL Params**
| Param | Type | Rules |
|---|---|---|
| `id` | string | Valid MongoDB ObjectId |

**Success Response** `200`
```json
{
  "success": true,
  "message": "Link deleted successfully"
}
```

**Error Response** `404`
```json
{ "success": false, "message": "Link not found" }
```

---

#### `PATCH /api/links/:id/click`
🌐 **Public.** Increment the click count for a link.

**URL Params**
| Param | Type | Rules |
|---|---|---|
| `id` | string | Valid MongoDB ObjectId |

**Success Response** `200`
```json
{
  "success": true,
  "clicks": 43
}
```

---


## 📄 License

MIT
