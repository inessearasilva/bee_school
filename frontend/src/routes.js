import React from 'react'

const Consultas = React.lazy(() => import('./views/dashboard/Consultas'))
const Avini = React.lazy(() => import('./views/dashboard/Avini'))
const Avombro = React.lazy(() => import('./views/dashboard/Avombro'))
const Utentes = React.lazy(() => import('./components/utente-list'))
const Registo_Utente = React.lazy(() => import('./components/add-utente'))
const Utentenum = React.lazy(() => import('./components/add-utente'))
const Avininum = React.lazy(() => import('./views/dashboard/Avini-utente'))
const Aviniviz = React.lazy(() => import('./views/dashboard/Avini viz'))
const Avinisub = React.lazy(() => import('./views/dashboard/Avini sub'))
const Avombronum = React.lazy(() => import('./views/dashboard/Avombro-utente'))
const Avombroviz = React.lazy(() => import('./views/dashboard/Avombro viz'))
const Avombrosub = React.lazy(() => import('./views/dashboard/Avombro sub'))
const Edit = React.lazy(() => import('./components/utente'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/consultas', name: 'Consultas', element: Consultas },
  { path: '/avini', name: 'Avaliação Inicial', element: Avini },
  { path: '/avombrolist', name: 'Avaliação Ombro', element: Avombro },
  { path: '/utente', name: 'Utentes', element: Utentes },
  { path: '/add', name: 'Registo Utente', element: Registo_Utente },
  { path: '/utente/:num_sequencial', name: 'Utentenum', element: Utentenum },
  { path: '/avini/:num_sequencial', name: 'Avininum', element: Avininum },
  { path: '/viz/:idcomposition/:num_sequencial', name: 'Avombroviz', element: Aviniviz},
  { path: '/submitted/:idcomposition/:num_sequencial', name: 'Avombrosub', element: Avinisub},
  { path: '/avombro/:num_sequencial', name: 'Avombronum', element: Avombronum },
  { path: '/viz/:idcomposition/:num_sequencial', name: 'Avombroviz', element: Avombroviz},
  { path: '/submitted/:idcomposition/:num_sequencial', name: 'Avombrosub', element: Avombrosub},
  { path: '/edit/:num_sequencial', name: 'Edit', element: Edit }
]

export default routes
