import React from 'react'
import { Navigate, Route, Routes as R } from 'react-router'
import MainComponent from './layout/MainComponent'

type Props = {}

const Routes = (props: Props) => {
  return (
    <R>
      <Route path="/" element={<MainComponent />} />
      {/* <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route> */}
      <Route path="*" element={<Navigate to={'/'} replace />} />
    </R>
  )
}

export default Routes