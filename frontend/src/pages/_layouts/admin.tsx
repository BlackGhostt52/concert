import { Outlet } from 'react-router-dom'

export function AdminLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <header>Admin</header>

      <Outlet />
    </div>
  )
}
