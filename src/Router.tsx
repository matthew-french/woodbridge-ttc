import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutUs.page'
import { ContactUsPage } from './pages/ContactUs.page'
import { HomePage } from './pages/Home.page'
import { LatestNewsPage } from './pages/LatestNews.page'
import { PlayAndCompetePage } from './pages/PlayAndCompete.page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Use Layout as the wrapper
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/latest-news',
        element: <LatestNewsPage />
      },
      {
        path: '/about-us',
        element: <AboutPage />
      },
      {
        path: '/play-and-compete',
        element: <PlayAndCompetePage />
      },
      {
        path: '/contact-us',
        element: <ContactUsPage />
      }
    ]
  }
])

export function Router() {
  return <RouterProvider router={router} />
}
