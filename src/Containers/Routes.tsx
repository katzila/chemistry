import React from 'react'
import { Navigate, useRoutes } from 'react-router'

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
      children: [
        {
          path: 'alkanes',
          element: <PageTemplate compound='alkanes' />,
        },
        {
          path: 'cycloalkanes',
          element: <PageTemplate compound='cycloalkanes' />,
        },
        {
          path: 'alkenes',
          element: <PageTemplate compound='alkenes' />,
        },
        {
          path: 'alkynes',
          element: <PageTemplate compound='alkynes' />,
        },
        {
          path: 'arenes',
          element: <PageTemplate compound='arenes' />,
        },
        {
          path: 'alcohols',
          element: <PageTemplate compound='alcohols' />,
        },
        {
          path: 'phenols',
          element: <PageTemplate compound='phenols' />,
        },
        {
          path: 'aldehydes_ketones',
          element: <PageTemplate compound='aldehydes_ketones' />,
        },
        {
          path: 'carboxylicAcids',
          element: <PageTemplate compound='carboxylicAcids' />,
        },
        {
          path: 'esters',
          element: <PageTemplate compound='esters' />,
        },
        {
          path: 'carbohydrates',
          element: <PageTemplate compound='carbohydrates' />,
        },
        {
          path: 'amines',
          element: <PageTemplate compound='amines' />,
        },
        {
          path: 'amino_acids',
          element: <PageTemplate compound='amino_acids' />,
        }
      ],
    },
    {
      path: "/inorganic", children: [
        {
          path: 'alkali_metals',
          element: <PageTemplate compound='alkanes' />,
        },
        {
          path: 'alkaline_earth_metals',
          element: <PageTemplate compound='alkanes' />,
        },
        {
          path: 'transition_metals',
          element: <PageTemplate compound='alkanes' />,
        },
        {
          path: 'metalloids',
          element: <PageTemplate compound='alkanes' />,
        }
      ]
    },
    { path: '*', element: <Navigate to={'/'} /> }
  ]);

  return routes
}

export default Routes