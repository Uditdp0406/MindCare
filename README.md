# 🧠 Mental Health Support Platform

A full‑stack **Mental Health Support Platform** built with a modern **React frontend** and a **Node.js (TypeScript) backend**. The application provides secure authentication, mental‑health journaling, AI‑assisted chat support, and crisis‑detection logic, wrapped in a clean and responsive UI.

---

## ✨ Key Features

### 🔐 Authentication

* User registration and login
* JWT‑based authentication
* Protected routes with middleware validation

### 💬 AI Chat Support

* Conversational mental‑health chatbot
* Persistent chat sessions
* Crisis keyword detection for safety escalation

### 📓 Mental Health Journal

* Create, read, and manage journal entries
* Secure user‑specific data isolation
* Input validation and structured storage

### 📊 Dashboards

* User dashboard with mental‑health insights
* Heart/health dashboard (UI ready for future integrations)

---

## 🛠️ Tech Stack

### Frontend

* **React.js** (with JSX)
* **Tailwind CSS** for styling
* Component‑based architecture
* Client‑side validation utilities

### Backend

* **Node.js + Express**
* **TypeScript**
* **MongoDB** with Mongoose
* **JWT Authentication**
* Modular MVC‑style architecture

---

## 📁 Project Structure

### Frontend (`public.zip`)

```
public/
src/
 ├── components/
 │   ├── auth/          # Login & Register
 │   ├── common/        # Reusable inputs
 │   ├── Dashboard.jsx
 │   └── HeartHealthDashboard.jsx
 ├── services/          # API services
 ├── utils/             # Validation helpers
 ├── styles/            # Animations & global styles
 ├── App.jsx
 └── index.js
```

### Backend (`mental_health.zip`)

```
src/
 ├── controllers/       # Request handlers
 ├── middleware/        # Auth & validation middleware
 ├── models/            # Mongoose schemas
 ├── routes/            # API routes
 ├── services/          # Chatbot, JWT, DB logic
 ├── validators/        # Request validators
 ├── app.ts
 └── server.ts
```

---

## ⚙️ Environment Variables

Create a `.env` file in the backend root:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🚀 Getting Started

### Backend Setup

```bash
cd mental_health
npm install
npm run dev
```

Server runs on: `http://localhost:5000`

### Frontend Setup

```bash
cd public
npm install
npm start
```

Frontend runs on: `http://localhost:3000`

---

## 🔌 API Overview

### Auth Routes

* `POST /api/auth/register`
* `POST /api/auth/login`

### Chat Routes

* `POST /api/chat/start`
* `POST /api/chat/message`

### Journal Routes

* `POST /api/journal`
* `GET /api/journal`

(All protected routes require JWT token)

---

## 🔒 Security Highlights

* Password hashing
* JWT‑based authorization
* Request payload validation
* Crisis detection logic for safety awareness

---

## 📌 Future Enhancements

* Role‑based access control
* Admin analytics dashboard
* Emergency contact notifications
* AI model fine‑tuning
* Mobile app support

---

## 🤝 Contribution

Pull requests are welcome. For major changes, please open an issue first to discuss improvements.

---

## 📄 License

This project is licensed under the MIT License.

---

### ⭐ If you find this project useful, consider giving it a star on GitHub!
