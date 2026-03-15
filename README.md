# 💬 Chatterbox — Real-Time Chat Application

![MERN](https://img.shields.io/badge/MERN-Stack-green)
![Socket.IO](https://img.shields.io/badge/Socket.IO-RealTime-black)
![React](https://img.shields.io/badge/React-Frontend-blue)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-darkgreen)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-38B2AC)

**Chatterbox** is a **full-stack real-time chat application** built using the **MERN stack** with **Socket.IO** for instant communication.

The platform allows users to connect, chat instantly, and see who is online in real time while maintaining **secure authentication and session management**.

---

# 🚀 Live Demo

🔗 **Live Website**

[Click here to chat](https://chatterbox-prod-cfts.onrender.com/)


# 🧠 About The Project

Chatterbox was designed to simulate how modern messaging platforms work by implementing **real-time communication, authentication systems, and presence tracking**.

The application demonstrates:

- Full-stack application architecture
- Real-time messaging systems
- Authentication and session security
- WebSocket communication
- Responsive UI development

---

# ✨ Key Features

### 🔐 Authentication & Security

- Secure **Login / Signup / Logout**
- **JWT Authentication**
- **Password Encryption**
- **Single Device Login Enforcement**
- Protected routes and authentication checks

---

### 💬 Real-Time Messaging

- Instant **bi-directional messaging**
- Powered by **Socket.IO**
- Messages delivered without page refresh
- Real-time communication between users

---

### 🟢 Online Presence

- Online users are indicated by a **green status indicator**
- Presence updates in **real time**

---

### 😄 Activity Emojis

Each user is assigned a **random emoji indicator** representing their activity, adding a fun and engaging visual element to the chat experience.

---

### 📱 Responsive Interface

- Built with **React + Tailwind CSS**
- Optimized for **desktop and tablet screens**
- Clean and interactive UI

---

# 🏗️ System Architecture

Client → React Frontend  
Server → Node.js + Express  
Database → MongoDB Atlas  
Real-Time Layer → Socket.IO  

Communication Flow:

1. User logs in using JWT authentication
2. Client connects to server via WebSocket
3. Messages are emitted through Socket.IO
4. Server broadcasts messages instantly to connected clients
5. MongoDB stores user data and messages

---

# 🛠 Tech Stack

### Frontend

- React.js
- Tailwind CSS

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- MongoDB Atlas

### Real-Time Communication

- Socket.IO

### Development Tools

- Postman (API testing)

---

# 📊 Project Highlights

- Built a **full-stack chat system supporting 15+ simultaneous users**
- Implemented **real-time messaging with WebSockets**
- Developed **20+ backend API endpoints**
- Enforced **secure authentication and session management**
- Implemented **single-device login restriction**
- Created responsive UI using **Tailwind CSS**

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/chatterbox.git
```

---

### 2️⃣ Navigate into the Project

```bash
cd chatterbox
```

---

### 3️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 4️⃣ Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

### 5️⃣ Create Environment Variables

Create a `.env` file in the backend directory.

Example:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

### 6️⃣ Run the Application

Start backend

```bash
npm run server
```

Start frontend

```bash
npm start
```

---

# 🎮 How to Use

1. Register a new account
2. Log in to the application
3. View online users
4. Start chatting instantly
5. Messages appear in real time

---

# 📚 What I Learned

This project helped strengthen my understanding of:

- WebSocket communication
- Real-time system design
- JWT authentication systems
- Secure session management
- Building full-stack applications
- API design and testing
- Cloud database integration

---

# 🔮 Future Improvements

- Mobile responsiveness
- Message notifications
- Group chats
- Image and file sharing
- Chat history persistence
- Typing indicators

---

# 👨‍💻 Author

**Mridul Sehgal**

If you enjoyed this project, consider giving it a ⭐ on GitHub!

---

# 📬 Feedback

Feedback, suggestions, and contributions are always welcome.

Feel free to open an **issue** or submit a **pull request**.
