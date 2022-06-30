import React from 'react'
import { Navigate, useRoutes } from 'react-router'
import Home from '../Pages/Home'
import Organic from '../Pages/organic/Organic'
import AlkanesTasks from '../Pages/organic/tasks/AlkanesTasks'
import OrganicTasks from '../Pages/organic/tasks/OrganicTasks'

type Props = {}

const Routes = (props: Props) => {

  let routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: "organic",
      children: [
        {
          element: <Organic />,
          index: true,
        },
        {
          path: 'tasks',
          children: [
            {
              index: true,
              element: <OrganicTasks />,
            },
            {
              path: 'alkanes',
              element: <AlkanesTasks />,
            },
            // {
            //   path: '/cycloalkanes',
            //   element: <CycloalkanesTasks />,
            // },
            // {
            //   path: '/alkenes',
            //   element: <AlkenesTasks />,
            // },
            // {
            //   path: '/alkynes',
            //   element: <AlkynesTasks />,
            // },
            // {
            //   path: '/alkanes',
            //   element: <AlkanesTasks />,
            // },
            // {
            //   path: '/arenas',
            //   element: <ArenasTasks />,
            // },
            // {
            //   path: '/alcohols',
            //   element: <AlcoholsTasks />,
            // },
            // {
            //   path: '/fenols',
            //   element: <FenolsTasks />,
            // },
            // {
            //   path: '/aldehydes_ketones',
            //   element: <AldehudesKetonesTasks />,
            // },
            // {
            //   path: '/carboxylic_acids',
            //   element: <CarboxylicAcidsTasks />,
            // },
            // {
            //   path: '/complex_esters',
            //   element: <ComplexEstersTasks />,
            // },
            // {
            //   path: '/carbohydrates',
            //   element: <CarbohydratesTasks />,
            // },
            // {
            //   path: '/amines',
            //   element: <AminesTasks />,
            // },
            // {
            //   path: '/amino_acids',
            //   element: <AminoAcidsTasks />,
            // },
          ]
        },
        {
          path: 'guide',
          children: [
            {
              index: true,
              element: <OrganicTasks />,
            },
        //     {
        //       path: '/alkanes',
        //       element: <AlkanesTasks />,
        //     },
        //     {
        //       path: '/cycloalkanes',
        //       element: <CycloalkanesTasks />,
        //     },
        //     {
        //       path: '/alkenes',
        //       element: <AlkenesTasks />,
        //     },
        //     {
        //       path: '/alkynes',
        //       element: <AlkynesTasks />,
        //     },
        //     {
        //       path: '/alkanes',
        //       element: <AlkanesTasks />,
        //     },
        //     {
        //       path: '/arenas',
        //       element: <ArenasTasks />,
        //     },
        //     {
        //       path: '/alcohols',
        //       element: <AlcoholsTasks />,
        //     },
        //     {
        //       path: '/fenols',
        //       element: <FenolsTasks />,
        //     },
        //     {
        //       path: '/aldehydes_ketones',
        //       element: <AldehudesKetonesTasks />,
        //     },
        //     {
        //       path: '/carboxylic_acids',
        //       element: <CarboxylicAcidsTasks />,
        //     },
        //     {
        //       path: '/complex_esters',
        //       element: <ComplexEstersTasks />,
        //     },
        //     {
        //       path: '/carbohydrates',
        //       element: <CarbohydratesTasks />,
        //     },
        //     {
        //       path: '/amines',
        //       element: <AminesTasks />,
        //     },
        //     {
        //       path: '/amino_acids',
        //       element: <AminoAcidsTasks />,
        //     },
        ]
        },
      ],
    },
    // { path: "/nonOrganic", element: <NonOrganic /> },
    { path: '*', element: <Navigate to={'/'} /> }
  ]);

  return routes
}

export default Routes