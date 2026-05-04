# 🚀 Akhil Pasha — Portfolio

A modern, fully responsive developer portfolio showcasing my work, skills, and experience across **React, React Native, and full-stack development**.

---

## 🌐 Live Demo



---

## ✨ Key Features

* 📩 **Contact Form (EmailJS Integration)** — messages sent directly to inbox
* 🎨 **Light / Dark Mode** with persistent user preference
* ⚡ Smooth animations powered by Framer Motion
* 📱 Fully responsive across devices
* 🧩 Scalable architecture using modular components
* 🧠 Custom hooks for form handling and state logic

---

## 🛠 Tech Stack

### Frontend

* React 18 (Create React App)
* TypeScript
* Tailwind CSS
* Framer Motion
* React Router v6

### Tooling

* CRACO (path aliases `@/`)
* ESLint + Prettier

### Integration

* EmailJS (contact form handling)

---

## 🚀 Getting Started

```bash
npm install
npm start
npm run build
npm test
```

---

## 🔐 Environment Variables

Create a `.env` file in the root:

```env
REACT_APP_SERVICE_ID=your_service_id
REACT_APP_TEMPLATE_ID=your_template_id
REACT_APP_PUBLIC_KEY=your_public_key
```

⚠️ Do NOT commit `.env` to GitHub.

---

## 🎨 Theme System

* Light Mode → Cream (`#FAF3E1`) + Orange accents (`#FF6D1F`)
* Dark Mode → Deep black (`#0D0D0D`) with soft contrast UI
* Stored in `localStorage`
* Respects system preference on first load

---

## 🎬 Animations (Framer Motion)

| Section    | Behavior                                  |
| ---------- | ----------------------------------------- |
| Pages      | Smooth fade-in transitions                |
| Hero       | Staggered text + card slide-in            |
| Skills     | Animated grid + filter transitions        |
| Projects   | Animated filtering with `AnimatePresence` |
| Experience | Timeline slide animations                 |
| Contact    | Staggered card entrance                   |

---

## 📂 Project Structure

```
src/
├── components/
├── hooks/
├── utils/
├── constants/
├── context/
├── pages/
├── types/
├── tests/
```

---

## 🧪 Testing

* Unit tests for utilities and hooks
* Integration tests for UI components and sections
* Covers constants, filters, and form behavior

---

## 🐛 Fixes & Improvements

* Fixed conditional rendering issues in Experience section
* Standardized project categories and filters
* Aligned test expectations with real data
* Improved data consistency across constants

---


## 📩 Contact Feature

Users can send messages directly via the contact form.

* Real-time validation
* Loading and success states
* Email delivery using EmailJS
* Clean UI feedback

---

## 📦 Assets

* Profile image → `public/assets/images/profile.jpg`
* Resume → `public/assets/resume.pdf`

Fallback avatar uses initials **AP** if no image is found.

---

## 👨‍💻 About Me

Frontend-focused developer with strong experience in building scalable mobile and web applications using React and React Native.

---

## 📬 Connect With Me

* 📧 Email: [mohammedakhilpasha12@gmail.com](mailto:mohammedakhilpasha12@gmail.com)
* 💼 LinkedIn: https://www.linkedin.com/in/akhil-pasha-mohammed-8b1b93201/
* 🧑‍💻 GitHub: https://github.com/akhilpasha12

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

---
