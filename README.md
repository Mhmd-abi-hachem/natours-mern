<h2 align="center">Natours</h2>

<div align="center">
<img src="./client/public/mockup.jpg" alt="Natours web app image on a macbook device set on a small table in a modern room" width="600" />
</div>

<br/>

<div align="center">
A real-world tour booking application that simplifies booking, exploring and planning tours worldwide. Built to showcase <strong>advanced MERN stack skills with a strong emphasis on modern frontend development techniques.</strong> The project features full CRUD functionality, secure authentication, and a scalable architecture designed for a professional user experience.
</div>

<span id="live-demo"></span>

## 🚀 Live Demo

- **Client (Frontend):** Deployed on **Vercel**
- **Server (Backend):** Deployed on **Render**

👉 [View Website](https://app-natours.vercel.app)

### Table Of Contents

1. [Live Demo 🚀](#live-demo)
2. [Demo Account 👨‍💻](#demo-acc)
3. [Key Features 🎯](#key-features)
4. [Technical Highlights 🚀](#technical-highlights)
5. [Technologies Used ⚙](#technologies-used)
6. [Project Structure 📂](#project-structure)
7. [Installation](#installation)

---

<span id="demo-acc"></span>

### Demo Account 👨‍💻

You can use the following credentials to log in:

- **Email:** mohamad10@gmail.com
- **Password:** Mhmd#test1

---

<span id="key-features"></span>

## Key Features 🎯

⭐ **Seamless User Experience**: Browse, book, and manage tours through a clean, responsive, and intuitive interface.

⭐ **Full CRUD Functionality**: Users can create, read, update, and delete tours and their account settings, providing a complete and dynamic experience.

⭐ **Secure Authentication**: Robust user authentication and protected routes ensure a secure environment for all users and their data.

⭐**Integrated Payments**: Securely handle payments using Stripe, providing a reliable and trusted checkout process.

---

<span id="technical-highlights"></span>

## Technical Highlights 🚀

This project was engineered to demonstrate a deep understanding of modern frontend development principles, ensuring a performant, scalable, and maintainable application.

👉 **Advanced Data Fetching with TanStack Query**: Utilized TanStack Query for managing asynchronous data, providing powerful caching, automatic refetching on window focus, and seamless background updates. This approach significantly improves performance and provides a professional, large-project feel.

👉 **Code Splitting & Lazy Loading**: Implemented React's lazy function and Suspense at the page level. This ensures that the application's initial load time is optimized by only fetching the code required for the current view.

👉 **Enhanced Accessibility with React Portals**: Used React Portals to handle modals and other UI elements that need to render outside the normal DOM hierarchy, which significantly improves accessibility and prevents styling conflicts.

👉 **Robust Error Handling with Error Boundaries**: Integrated React Error Boundaries to gracefully handle and display errors that occur within the UI, preventing the entire application from crashing and providing a better user experience.

👉 **Professional Folder Structure**: The codebase is organized into a clean, scalable structure, as seen in the Project Structure section.

👉 **Responsive Design**.

---

<span id="technologies-used"></span>

### Technologies Used ⚙️

1. **Frontend**

- React.js

- React Router

- React Query (TanStack Query)

- Stripe.js

- Taiwind CSS

- etc...

2. **Backend & Database**

- Node.js & Express.js

- MongoDB

- Stripe (for secure payments)

- JWT (for authentication)

- etc...

---

<span id="project-structure"></span>

### Project Structure 📁

The project's folder structure is designed for clarity and maintainability, separating the core application logic into distinct, well-defined directories:

```bash
client/
├── node_modules/
├── public/
├── src/
│ ├── features/ # Components/hooks/api-calls are organized by feature (e.g., tours, authentication)
│ ├── layout/ # Main app layout
│ ├── pages/ # Page-level components
│ ├── shared/ # Reusable assets across the application
│ │ ├── hooks/ # Custom hooks for abstracting logic
│ │ └── ui/ # UI components (buttons, cards, etc...)
│ ├── styles/ # Global CSS styles
│ ├── App.jsx # Main application component
│ └── main.jsx # Entry point for the React application
├── .env
├── .gitignore
└── package.json
```

---

<span id="installation"></span>

### **Installation**

1. Clone the repository:

```bash
git https://github.com/Mhmd-abi-hachem/natours-mern.git
```

2. Install the project dependencies using npm:

```bash
npm install
```

3. **Set Up Environment Variables**

Create a new file named .env in the root of both your client and server directories. Add your keys and URLs as needed for authentication, database connection, and payments.

- For **Client side**

```env
VITE_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key

VITE_API_URL=your-api-path-url
```

- For **Server side**

```env
NODE_ENV=development
PORT=8000
CLIENT_URL=<client-path-url>

DATABASE_CONNECTION=<your_mongodb_connection_string>

JWT_SECRET_KEY=<your_jwt_secret>
JWT_EXPIRES_IN=<jwt_expiration_time>
JWT_COOKIE_EXPIRES_IN=<jwt_cookie_expiration_time>

STRIPE_SECRET_KEY=<your_stripe_secret_key>
```

Replace the placeholder values with your actual api credentials.

4. Run the project

### Run the client side

```bash
npm run dev
```

### Run the server side

```bash
npm start
```
