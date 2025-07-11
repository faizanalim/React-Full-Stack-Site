import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlesListPage from './pages/ArticlesListPage'
import ArticlePage, { loader as articleLoader } from './pages/ArticlePage'
import Layout from './Layout';
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';

const routes = [{
  path: '/',
  element: <Layout />,
  errorElement: <NotFoundPage />,
  children: [{
    path: '/',
    element: <HomePage />
  }, {
    path: '/about',
    element: <AboutPage />
  }, {
    path: '/articles',
    element: <ArticlesListPage />
  }, {
    path: '/articles/:name',
    element: <ArticlePage />,
    loader: articleLoader
  },
  {
    path: '/Login',
    element: <LoginPage></LoginPage>

  },
  {
    path: '/create-account',
    element: <CreateAccountPage></CreateAccountPage>

  }
  ]
}]

const router = createBrowserRouter(routes);

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} />
  );
}

export default App
