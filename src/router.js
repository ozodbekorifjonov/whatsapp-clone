import { createBrowserRouter } from 'react-router-dom';
import Chat from './pages/chat';
import ErrorPage from './pages/error-page';
import SignIn from './pages/sign-in';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Chat />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
]);
