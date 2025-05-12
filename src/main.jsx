import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import Create_trip from './create_trip';
import Header from './components/Header';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/create_trip",
    element: <Create_trip/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>,
)
