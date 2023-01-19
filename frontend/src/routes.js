import React from 'react'

const Consultas = React.lazy(() => import('./views/dashboard/Consultas'))
const Avini = React.lazy(() => import('./views/dashboard/Avini'))
const Avombro = React.lazy(() => import('./views/dashboard/Avombro'))
const Utentes = React.lazy(() => import('./components/tutorials-list.component'))
const Registo_Utente = React.lazy(() => import('./components/add-tutorial.component'))
const Utentenum = React.lazy(() => import('./components/add-tutorial.component'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/consultas', name: 'Consultas', element: Consultas },
  { path: '/avini', name: 'Avaliação Inicial', element: Avini },
  { path: '/avombro', name: 'Avaliação Ombro', element: Avombro },
  { path: '/utente', name: 'Utentes', element: Utentes },
  { path: '/add', name: 'Registo Utente', element: Registo_Utente },
  { path: '/utente/:num_sequencial', name: 'Utentenum', element: Utentenum }
]

export default routes
