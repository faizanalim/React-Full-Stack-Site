import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlesListPage from './pages/ArticlesListPage'
import ArticlePage from './pages/ArticlePage'

const routes = [
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: 'about',
    element: <AboutPage />
  },

  {
    path: '/articles',
    element: <ArticlesListPage />
  },

  {
    path: '/articles/individual',
    element: <ArticlePage />
  }]



const router = createBrowserRouter(routes);

function App() {
  const [count, setCount] = useState(0)

  return (
    <RouterProvider router={router} />
  );
}

export default App
