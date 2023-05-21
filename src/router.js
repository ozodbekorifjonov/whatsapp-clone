import { createBrowserRouter, Navigate } from 'react-router-dom';
import Chat from './pages/chat';
import ErrorPage from './pages/error-page';
import Login from './pages/login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate replace to="/chat" />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
  {
    path: '/chat/:id',
    element: <Chat />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
