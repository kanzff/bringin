import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProtectedRoutes from './ProtectedRoutes';

import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedAuthRoutes from './pages/ProtectedAuthoutes';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/login",
    element:
      <ProtectedAuthRoutes>
        <Login/>
      </ProtectedAuthRoutes>,
  },
  {
    path: "/register",
    element:
      <ProtectedAuthRoutes>
        <Register/>
      </ProtectedAuthRoutes>,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoutes>
        <Dashboard/>
      </ProtectedRoutes>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App/>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
