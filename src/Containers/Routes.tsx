import React from 'react'
import { useTranslation } from 'react-i18next'
import { Navigate, useRoutes } from 'react-router'

import Home from '../Pages/Home'
import { AlkanesGuide, AlkanesTasks, AlkenesGuide, AlkenesTasks, AlkynesGuide, AlkynesTasks, AlcoholsGuide, AlcoholsTasks } from '../Pages/organic'
import PageTemplate from './layout/PageTemplate'



type Props = {}

const Routes = (props: Props) => {
  const [t] = useTranslation()

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
          element: <PageTemplate GuideLabel={t('navigation.alkanes.handbook')} Guide={<AlkanesGuide />} Tasks={<AlkanesTasks />} TasksLabel={t('navigation.alkanes.tasks')} />,
        },
        {
          path: 'cycloalkanes',
          element: <PageTemplate GuideLabel={t('navigation.cycloalkanes.handbook')} Guide={<AlkanesGuide />} Tasks={<AlkanesTasks />} TasksLabel={t('navigation.cycloalkanes.tasks')} />,
        },
        {
          path: 'alkenes',
          element: <PageTemplate GuideLabel={t('navigation.alkenes.handbook')} Guide={<AlkenesGuide />} Tasks={<AlkenesTasks />} TasksLabel={t('navigation.alkenes.tasks')} />,
        },
        {
          path: 'alkynes',
          element: <PageTemplate GuideLabel={t('navigation.alkynes.handbook')} Guide={<AlkynesGuide />} Tasks={<AlkynesTasks />} TasksLabel={t('navigation.alkynes.tasks')} />,
        },
        {
          path: 'arenes',
          element: <PageTemplate GuideLabel={t('navigation.arenes.handbook')} Guide={<AlkynesGuide />} Tasks={<AlkynesTasks />} TasksLabel={t('navigation.arenes.tasks')} />,
        },
        {
          path: 'alcohols',
          element: <PageTemplate GuideLabel={t('navigation.alcohols.handbook')} Guide={<AlcoholsGuide />} Tasks={<AlcoholsTasks />} TasksLabel={t('navigation.alcohols.tasks')} />,
        },
        {
          path: 'phenols',
          element: <PageTemplate GuideLabel={t('navigation.phenols.handbook')} Guide={<AlkynesGuide />} Tasks={<AlkynesTasks />} TasksLabel={t('navigation.phenols.tasks')} />,
        },
        {
          path: 'aldehydes_ketones',
          element: <PageTemplate GuideLabel={t('navigation.aldehydes_ketones.handbook')} Guide={<AlkynesGuide />} Tasks={<AlkynesTasks />} TasksLabel={t('navigation.aldehydes_ketones.tasks')} />,
        },
        {
          path: 'carboxylic_acids',
          element: <PageTemplate GuideLabel={t('navigation.carboxylic_acids.handbook')} Guide={<AlkynesGuide />} Tasks={<AlkynesTasks />} TasksLabel={t('navigation.carboxylic_acids.tasks')} />,
        },
        {
          path: 'esters',
          element: <PageTemplate GuideLabel={t('navigation.esters.handbook')} Guide={<AlkynesGuide />} Tasks={<AlkynesTasks />} TasksLabel={t('navigation.esters.tasks')} />,
        },
        {
          path: 'carbohydrates',
          element: <PageTemplate GuideLabel={t('navigation.carbohydrates.handbook')} Guide={<AlkynesGuide />} Tasks={<AlkynesTasks />} TasksLabel={t('navigation.carbohydrates.tasks')} />,
        },
        {
          path: 'amines',
          element: <PageTemplate GuideLabel={t('navigation.amines.handbook')} Guide={<AlkynesGuide />} Tasks={<AlkynesTasks />} TasksLabel={t('navigation.amines.tasks')} />,
        },
        {
          path: 'amino_acids',
          element: <PageTemplate GuideLabel={t('navigation.amino_acids.handbook')} Guide={<AlkynesGuide />} Tasks={<AlkynesTasks />} TasksLabel={t('navigation.amino_acids.tasks')} />,
        }
      ],
    },
    {
      path: "/inorganic", children: [
        {
          path: 'alkali_metals',
          element: <PageTemplate GuideLabel={t('navigation.alkali_metals.handbook')} Guide={<AlkanesGuide />} Tasks={<AlkanesTasks />} TasksLabel={t('navigation.alkali_metals.tasks')} />,
        },
        {
          path: 'alkaline_earth_metals',
          element: <PageTemplate GuideLabel={t('navigation.alkaline_earth_metals.handbook')} Guide={<AlkanesGuide />} Tasks={<AlkanesTasks />} TasksLabel={t('navigation.alkaline_earth_metals.tasks')} />,
        },
        {
          path: 'transition_metals',
          element: <PageTemplate GuideLabel={t('navigation.transition_metals.handbook')} Guide={<AlkanesGuide />} Tasks={<AlkanesTasks />} TasksLabel={t('navigation.transition_metals.tasks')} />,
        },
        {
          path: 'metalloids',
          element: <PageTemplate GuideLabel={t('navigation.metalloids.handbook')} Guide={<AlkanesGuide />} Tasks={<AlkanesTasks />} TasksLabel={t('navigation.metalloids.tasks')} />,
        }
      ]
    },
    { path: '*', element: <Navigate to={'/'} /> }
  ]);

  return routes
}

export default Routes