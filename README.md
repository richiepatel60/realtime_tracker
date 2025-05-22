# Real-Time Location Tracker 🌍  
A Node.js + Socket.IO application for live, multi-user location sharing on an interactive map.

---

## 📌 Project Summary  
This is a real-time location tracking web application built with Node.js and Express.js, designed to showcase real-time communication using WebSockets (Socket.IO). It allows multiple users to share and visualize their live locations on an interactive map.

The app uses browser geolocation, real-time broadcasting, and dynamic marker management to update and display each user's position. Though the frontend is minimal, it serves as a clean interface to demonstrate the core backend and real-time logic.

This project is a strong demonstration of practical backend and WebSocket experience, geolocation integration, and frontend-backend synchronization.

---

## 🚀 Features  
- Real-time location sharing with WebSocket-based updates  
- Interactive map powered by Leaflet.js  
- Auto-updating user markers with live positions  
- Auto-removal of disconnected users  
- Responsive full-screen map layout  
- Clean, minimal UI using custom CSS  

---

## 🧠 Tech Stack  

| Layer      | Technology           | Purpose                                   |
|------------|----------------------|-------------------------------------------|
| Backend    | Node.js, Express.js  | Server setup, routing, WebSocket integration |
| Realtime   | Socket.IO            | Real-time communication between clients   |
| Frontend   | EJS, HTML, CSS, JS   | Dynamic templating, UI and geolocation    |
| Mapping    | Leaflet.js           | Map display and marker updates            |
| Templating | EJS                  | Server-side rendering of views            |


---

## 🧩 Detailed Component Overview  

### 🔧 Backend (Node.js + Express.js + Socket.IO)  

#### `app.js`  
- Sets up Express server and HTTP server  
- Integrates Socket.IO for real-time communication  
- Handles core socket events:
  - `connection`: When a user joins  
  - `sendLocation`: When a user sends their coordinates  
  - `disconnect`: When a user leaves  

#### Socket Events  
- **`sendLocation`**: Receives latitude & longitude, broadcasts it to all clients  
- **`user-disconnected`**: Notifies others to remove disconnected user's marker  

---

### 🌐 Frontend (EJS + Leaflet.js)  

#### `views/index.ejs`  
- Main rendered HTML page with embedded JS and map container  
- Loads required assets for Leaflet and Socket.IO client  

#### `public/js/script.js`  
- Initializes Leaflet map  
- Tracks user geolocation via browser API  
- Emits real-time updates via Socket.IO  
- Manages markers for all users  

#### `public/css/style.css`  
- Styles the full-screen map and layout  
- Basic responsiveness  

---

## 💡 How It Works  
1. Users open the app and grant location permission.  
2. Their position is sent to the server via Socket.IO.  
3. Server broadcasts location to all connected clients.  
4. Leaflet.js updates the map with each user’s marker.  
5. On disconnect, markers are removed.  

---

## ⚙️ Installation & Setup  

### Clone the repository:
```bash
git clone https://github.com/richiepatel60/realtime_tracker.git
cd realtime_tracker
Install dependencies:

npm install
Start the server:
node app.js
Open the app:
Visit http://localhost:3000 in your browser.

👨‍💻 Made by Richie Patel
GitHub: @richiepatel60