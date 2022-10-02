import React from 'react'
import { Navigate, useRoutes } from 'react-router'
import Home from '../Pages/Home'
import AlkanesGuide from '../Pages/organic/alkanes/AlkanesGuide'
import AlkanesTasks from '../Pages/organic/alkanes/AlkanesTasks'
import PageTemplate from './layout/PageTemplate'



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
          path: 'alkanes',
          element: <PageTemplate GuideLabel='Справочник Алканы' Guide={<AlkanesGuide />} Tasks={<AlkanesTasks />} TasksLabel='Задачник Алканы' />,
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
      ],
    },
    // { path: "/nonOrganic", element: <NonOrganic /> },
    { path: '*', element: <Navigate to={'/'} /> }
  ]);

  return routes
}

export default Routes