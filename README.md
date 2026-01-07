# Fullstack Crud App

# 👋 Hi, I'm Marcus !

Frontend Developer and Backend Developer with a strong focus on **React, Javascript, and interactive UI experiences**.  
I enjoy building and solving features from scratch, understanding how things work under the hood, and writing clean, testable code.

---

### 🚀 Projects Overview

**Multiple projects** I have build using **React and Javascript**, using **Node.js and Express** to achieve a good beginning to something better.  
This project was created primarily for **learning and experimentation**, with a strong focus on functionality rather than responsiveness.

---

## 🛠️ Technologies Used

- **Vite**
- **React**
- **JavaScript**
- **Node.js**
- **CSS**
- **Tailwind**
- **SQLite**

---

## ✨ Features

- **Drawing Tools**: Pencil, line, rectangle, and text tools  
- **Element Manipulation**: Move and resize shapes directly on the canvas  
- **Text Editing**: Add and edit text inline  
- **Zoom & Pan**:
  - Zoom with `Ctrl + Scroll` or buttons
  - Pan using `Space + Drag` or middle mouse button  
- **Undo / Redo** with full action history

---

## 🧩 Development Process

1. Rendered a canvas using **Rough.js** as the drawing base  
2. Implemented drawing logic for shapes and freehand paths  
3. Added element selection, movement, and resizing  
4. Built a custom **undo/redo history system**  
5. Implemented zooming and panning using wheel and mouse events  
6. Designed a clean, user-friendly UI  
7. Added **end-to-end and unit tests** using Cypress and Testing Library  

Throughout the project, I documented every feature to reinforce understanding and improve long-term learning.

---

## 📚 What I Learned

### 🧠 State & Logic
- Built a custom `useHistory` hook to manage undo/redo behavior
- Learned how to track and replay user actions effectively

### 📐 Geometry & Math
- Improved accuracy when working with coordinates and shapes
- Calculated distances, hit detection, and shape boundaries

### 🎨 Canvas & Drawing
- Converted freehand strokes into smooth SVG paths
- Managed point collections efficiently for rendering

### ⚛️ React Internals
- Used `useLayoutEffect` for precise rendering control
- Optimized re-renders for better performance

### 🖱️ Advanced Event Handling
- Implemented wheel, mouse, and keyboard listeners
- Built intuitive zooming and panning interactions

---

## 🔮 Possible Improvements

- More drawing tools (circle, eraser, arrows)
- Additional shapes (triangles, stars, etc.)
- Expanded color picker
- More keyboard shortcuts
- Theme support (dark / light)
- Advanced text styling
- Stronger TypeScript typing for Rough.js elements

---

## ▶️ Running the Project Locally

```bash
# Clone the repository
git clone <your-repo-url>

# Install dependencies
npm install
# or
yarn

# Start the app
npm run start
# or
yarn start
