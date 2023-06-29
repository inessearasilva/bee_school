import React from 'react'

const Desmistificacao = React.lazy(() => import('./views/dashboard/Desmistificacao'))
const Sentiment = React.lazy(() => import('./views/dashboard/Sentiment'))
const Avombro = React.lazy(() => import('./views/dashboard/Avombro'))
const Home = React.lazy(() => import('./components/Home'))

const routes = [
  { path: '/', name: 'Home', element: Home },
  { path: '/desmistificação', name: 'Facto ou Mito?', element: Desmistificacao },
  { path: '/sentiment_analysis', name: 'Sentiment Analysis', element: Sentiment },
  { path: '/avombro', name: 'Avaliação Ombro', element: Avombro }
]

export default routes
