import React from 'react'

const Desmistificacao = React.lazy(() => import('./views/dashboard/Desmistificacao'))
const Sentiment = React.lazy(() => import('./views/dashboard/Sentiment'))
const Home = React.lazy(() => import('./views/dashboard/Home'))
const Topics = React.lazy(() => import('./views/dashboard/Topics'))
const TopicPage = React.lazy(() => import('./views/dashboard/TopicPage'))

const routes = [
  { path: '/', name: 'Home', element: Home },
  { path: '/desmistificação', name: 'Facto ou Mito?', element: Desmistificacao },
  { path: '/sentiment_analysis', name: 'Sentiment Analysis', element: Sentiment },
  { path: '/topics', name: 'Topics', element: Topics },
  { path: '/topics/:topic', name: 'TopicPage', element: TopicPage }
]

export default routes
