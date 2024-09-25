import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './App'

export const createRoot = ViteReactSSG(
  // react-router-dom data routes
  { routes }
)
