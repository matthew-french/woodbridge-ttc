import '@mantine/core/styles.css'

import { Outlet } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import { HeaderSearch } from './components/HeaderSearch/HeaderSearch'
import { theme } from './theme'

export function Layout() {
  return (
    <MantineProvider theme={theme}>
      <HeaderSearch />
      <Outlet />
    </MantineProvider>
  )
}
