import React from 'react'

const Consultas = React.lazy(() => import('./views/dashboard/Consultas'))
const Avini = React.lazy(() => import('./views/dashboard/Avini'))
const Avombro = React.lazy(() => import('./views/dashboard/Avombro'))
const TutorialsList = React.lazy(() => import('./components/tutorials-list.component'))
const Registo_Utente = React.lazy(() => import('./components/add-tutorial.component'))
const Tutorial = React.lazy(() => import('./components/add-tutorial.component'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/consultas', name: 'Consultas', element: Consultas },
  { path: '/avini', name: 'Avaliação Inicial', element: Avini },
  { path: '/avombro', name: 'Avaliação Ombro', element: Avombro },
  { path: '/tutorials', name: 'TutorialsList', element: TutorialsList },
  { path: '/add', name: 'Registo Utente', element: Registo_Utente },
  { path: '/tutorials/:id', name: 'Tutorial', element: Tutorial }
]

export default routes
