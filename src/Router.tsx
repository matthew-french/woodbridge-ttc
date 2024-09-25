import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import type { RouteRecord } from 'vite-react-ssg'
import { Layout } from './Layout'
import { AboutPage } from './pages/AboutUs.page'
import { ContactUsPage } from './pages/ContactUs.page'
import { HomePage } from './pages/Home.page'
import { LatestNewsPage } from './pages/LatestNews.page'
import { PlayAndCompetePage } from './pages/PlayAndCompete.page'

export const routes: RouteRecord[] = [
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
]

// const router = createBrowserRouter(routes)

// export function Router() {
//   return <RouterProvider router={router} />
// }
