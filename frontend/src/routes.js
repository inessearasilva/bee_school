import React from 'react'

const Consultas = React.lazy(() => import('./views/dashboard/Consultas'))
const Avini = React.lazy(() => import('./views/dashboard/Avalini'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/consultas', name: 'Consultas', element: Consultas },
  { path: '/avini', name: 'Avaliação Inicial', element: Avini }
]

export default routes
