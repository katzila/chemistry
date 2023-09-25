import React, { FC, ReactNode } from 'react'
import { Box, Link, Paper, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink, useSearchParams } from 'react-router-dom';

import { organicCompoundName } from '../../types'


interface CompoundStructureFormulasProps {
  compound: organicCompoundName
}

export const CompoundStructureFormulas: FC<CompoundStructureFormulasProps> = (props) => {
  const { compound } = props
  const [t] = useTranslation()
  const [searchParams] = useSearchParams()

  let structureFormulasInner: ReactNode = null

  switch (compound) {
    case 'alcohols': {
      structureFormulasInner = (
        <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>CH<sub>3</sub> &#8722; CH<sub>2</sub> &#8722; OH</Typography>
      )
      break
    }
    case 'alkanes': {
      structureFormulasInner = (
        <>
          <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>CH<sub>4</sub></Typography>
          <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>CH<sub>3</sub> &#8722; CH<sub>3</sub></Typography>
        </>
      )
      break
    }
    case 'alkenes': {
      structureFormulasInner = (
        <>
          <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>CH<sub>2</sub> = CH<sub>2</sub></Typography>
          <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>CH<sub>2</sub> = CH &#8722; CH<sub>3</sub></Typography>
        </>
      )
      break
    }
    case 'alkynes': {
      structureFormulasInner = (
        <>
          <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>CH &#8801; CH</Typography>
          <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>CH &#8801; C &#8722; CH<sub>3</sub></Typography>
        </>
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
      id='structureFormulas'
    >
      <Link
        variant='h5'
        underline='none'
        component={RouterLink}
        to={`${searchParams.toString() ? `?${searchParams.toString()}` : ''}#structureFormulas`}
      >
        {t('guide.structureFormulas')}
      </Link>
      <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {structureFormulasInner}
      </Box>
    </Paper>
  )
}

export default CompoundStructureFormulas