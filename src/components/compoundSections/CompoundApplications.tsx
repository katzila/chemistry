import React, { FC } from 'react'
import { Box, Link, Paper, Typography } from '@mui/material'
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

  let applicationsInner: string[] = []

  switch (compound) {
    case 'alcohols': {
      applicationsInner = [
        t('guide.alcohols.applications.foodIndustry'),
        t('guide.alcohols.applications.perfumeryCosmeticsHouseholdChemicals'),
        t('guide.alcohols.applications.medicine'),
        t('guide.alcohols.applications.fuel'),
        t('guide.alcohols.applications.chemicalReagent'),
      ]
      break
    }
    case 'alkanes': {
      applicationsInner = [
        t('guide.alkanes.applications.freons'),
        t('guide.alkanes.applications.solvents'),
        t('guide.alkanes.applications.SynthesisGas'),
        t('guide.alkanes.applications.sootRubber'),
        t('guide.alkanes.applications.detergents'),
        t('guide.alkanes.applications.fuel'),
      ]
      break
    }
    case 'alkenes': {
      applicationsInner = [
        t('guide.alkenes.applications.explosives'),
        t('guide.alkenes.applications.plastics'),
        t('guide.alkenes.applications.medicine'),
        t('guide.alkenes.applications.photoreagents'),
        t('guide.alkenes.applications.dyes'),
      ]
      break
    }
    case 'alkynes': {
      applicationsInner = [
        t('guide.alkynes.applications.chloroprene'),
        t('guide.alkynes.applications.isoprene'),
        t('guide.alkynes.applications.acetaldehyde'),
        t('guide.alkynes.applications.metalCuttingWelding'),
        t('guide.alkynes.applications.arenes'),
      ]
      break
    }
    case 'carboxylicAcids': {
      applicationsInner = [
        t('guide.carboxylicAcids.applications.textileIndustry'),
        t('guide.carboxylicAcids.applications.pharmaceuticalIndustry'),
        t('guide.carboxylicAcids.applications.solvents'),
        t('guide.carboxylicAcids.applications.plastics'),
        t('guide.carboxylicAcids.applications.catalysts'),
        t('guide.carboxylicAcids.applications.dyes'),
        t('guide.carboxylicAcids.applications.pesticides'),
      ]
      break
    }
    case 'esters': {
      applicationsInner = [
        t('guide.esters.applications.metalworking'),
        t('guide.esters.applications.lubricants'),
        t('guide.esters.applications.plasticizers'),
        t('guide.esters.applications.synthesis'),
      ]
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
      <Box component="ul" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {applicationsInner.map((application) => (
          <li key={application}>
            <Typography variant='subtitle1'>
              {application}
            </Typography>
          </li>
        ))}
      </Box>
    </Paper>
  )
}

export default CompoundApplications