import React from 'react'

const Perspectives = React.lazy(() => import('./views/dashboard/Perspectives_Updates'))
const TweetStats = React.lazy(() => import('./views/dashboard/TweetStats Worldwide'))
const Home = React.lazy(() => import('./views/dashboard/Home'))
const Topics = React.lazy(() => import('./views/dashboard/Topics'))
const TopicPage = React.lazy(() => import('./views/dashboard/TopicPage'))
const AllTopics = React.lazy(() => import('./views/dashboard/All Topics'))

const routes = [
  { path: '/', name: 'Home', element: Home },
  { path: '/perspectives_updates', name: 'Perspectives and Updated', element: Perspectives },
  { path: '/tweetstats_worldwide', name: 'TweetStats', element: TweetStats },
  { path: '/topics', name: 'Topics', element: Topics },
  { path: '/topics/:topic', name: 'TopicPage', element: TopicPage },
  { path: '/all_topics', name: 'AllTopics', element: AllTopics }
]

export default routes
