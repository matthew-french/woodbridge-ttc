import { Outlet } from 'react-router-dom'
import { HeaderSearch } from './HeaderSearch/HeaderSearch'

export function Layout() {
  return (
    <>
      <HeaderSearch />
      <Outlet />
    </>
  )
}
