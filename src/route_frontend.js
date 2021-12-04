import React from 'react'

const Home = React.lazy(() => import('./views/pages/frontend/Home'))

const route_frontend = [
  { path: '/', name: 'OLE' },
  { path: '/home', name: 'Home', component: Home },
]

export default route_frontend
