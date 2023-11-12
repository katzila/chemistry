import React from 'react'
import { Navigate, useRoutes } from 'react-router'
import { ORGANIC_COMPOUNDS } from '../constants'

import Home from '../Pages/Home'
import PageTemplate from './layout/PageTemplate'


const Routes = () => {

  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: "organic",
      children: ORGANIC_COMPOUNDS.map(compound => ({
        path: compound,
        element: <PageTemplate compound={compound} />,
      })),
    },
    // {
    //   path: "/inorganic", children: [
    //     {
    //       path: 'alkali_metals',
    //       element: <PageTemplate compound='alkanes' />,
    //     },
    //     {
    //       path: 'alkaline_earth_metals',
    //       element: <PageTemplate compound='alkanes' />,
    //     },
    //     {
    //       path: 'transition_metals',
    //       element: <PageTemplate compound='alkanes' />,
    //     },
    //     {
    //       path: 'metalloids',
    //       element: <PageTemplate compound='alkanes' />,
    //     }
    //   ]
    // },
    { path: '*', element: <Navigate to={'/'} /> }
  ]);

  return routes
}

export default Routes