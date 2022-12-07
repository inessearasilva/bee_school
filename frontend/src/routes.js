import React from 'react'

const Consultas = React.lazy(() => import('./views/dashboard/Consultas'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/consultas', name: 'Consultas', element: Consultas },
]

export default routes
