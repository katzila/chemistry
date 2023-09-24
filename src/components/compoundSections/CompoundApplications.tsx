import React, { FC, ReactNode } from 'react'
import { Link, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink, useSearchParams } from 'react-router-dom';

import { organicCompoundName } from '../../types'


interface CompoundApplicationsProps {
  compound: organicCompoundName
}

export const CompoundApplications: FC<CompoundApplicationsProps> = (props) => {
  const { compound } = props
  const [t] = useTranslation()
  const [searchParams] = useSearchParams()

  let applicationsInner: ReactNode = null

  switch (compound) {
    case 'alcohols': {
      applicationsInner = (
        <ul>
          <li>{t('guide.alcohols.applications.foodIndustry')}</li>
          <li>{t('guide.alcohols.applications.perfumeryCosmeticsHouseholdChemicals')}</li>
          <li>{t('guide.alcohols.applications.medicine')}</li>
          <li>{t('guide.alcohols.applications.fuel')}</li>
          <li>{t('guide.alcohols.applications.chemicalReagent')}</li>
        </ul>
      )
      break
    }
    case 'alkanes': {
      applicationsInner = (
        <ul>
          <li>{t('guide.alkanes.applications.freons')}</li>
          <li>{t('guide.alkanes.applications.solvents')}</li>
          <li>{t('guide.alkanes.applications.SynthesisGas')}</li>
          <li>{t('guide.alkanes.applications.sootRubber')}</li>
          <li>{t('guide.alkanes.applications.detergents')}</li>
          <li>{t('guide.alkanes.applications.fuel')}</li>
        </ul>
      )
      break
    }
    case 'alkenes': {
      applicationsInner = (
        <ul>
          <li>{t('guide.alkenes.applications.explosives')}</li>
          <li>{t('guide.alkenes.applications.plastics')}</li>
          <li>{t('guide.alkenes.applications.medicine')}</li>
          <li>{t('guide.alkenes.applications.photoreagents')}</li>
          <li>{t('guide.alkenes.applications.dyes')}</li>
        </ul>
      )
      break
    }
    case 'alkynes': {
      applicationsInner = (
        <ul>
          <li>{t('guide.alkynes.applications.chloroprene')}</li>
          <li>{t('guide.alkynes.applications.isoprene')}</li>
          <li>{t('guide.alkynes.applications.acetaldehyde')}</li>
          <li>{t('guide.alkynes.applications.metalCuttingWelding')}</li>
          <li>{t('guide.alkynes.applications.arenes')}</li>
        </ul>
      )
      break
    }
    case 'carboxylicAcids': {
      applicationsInner = (
        <ul>
          <li>{t('guide.carboxylicAcids.applications.textileIndustry')}</li>
          <li>{t('guide.carboxylicAcids.applications.pharmaceuticalIndustry')}</li>
          <li>{t('guide.carboxylicAcids.applications.solvents')}</li>
          <li>{t('guide.carboxylicAcids.applications.plastics')}</li>
          <li>{t('guide.carboxylicAcids.applications.catalysts')}</li>
          <li>{t('guide.carboxylicAcids.applications.dyes')}</li>
          <li>{t('guide.carboxylicAcids.applications.pesticides')}</li>
        </ul>
      )
      break
    }
    case 'esters': {
      applicationsInner = (
        <ul>
          <li>{t('guide.esters.applications.metalworking')}</li>
          <li>{t('guide.esters.applications.lubricants')}</li>
          <li>{t('guide.esters.applications.plasticizers')}</li>
          <li>{t('guide.esters.applications.synthesis')}</li>
        </ul>
      )
      break
    }
    default:
      return null
  }

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        p: 2,
      }}
      id='applications'
    >
      <Link
        variant='h5'
        underline='none'
        component={RouterLink}
        to={`${searchParams.toString() ? `?${searchParams.toString()}` : ''}#applications`}
      >
        {t('guide.applications')}
      </Link>
      {applicationsInner}
    </Paper>
  )
}

export default CompoundApplications