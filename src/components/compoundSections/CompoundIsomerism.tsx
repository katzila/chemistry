import React, { FC, ReactNode } from 'react'
import { Box, Link, Paper, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink, useSearchParams } from 'react-router-dom';

import { AlcoholIsomers } from '../../assets/alcohols/isomers';
import { AlkaneIsomers } from '../../assets/alkanes/isomers';

import { organicCompoundName } from '../../types'


interface CompoundIsomerismProps {
  compound: organicCompoundName
}

export const CompoundIsomerism: FC<CompoundIsomerismProps> = (props) => {
  const { compound } = props
  const [t] = useTranslation()
  const [searchParams] = useSearchParams()

  let isomerismInner: ReactNode = null

  switch (compound) {
    case 'alcohols': {
      isomerismInner = (
        <Box component="ol" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          {AlcoholIsomers.map((isomer, index) => (
            <Box component='li'>
              <Typography variant='h6'>{t(`guide.alcohols.isomerism.${(index + 1) as 1 | 2 | 3 | 4}`)}</Typography>
              <img src={isomer} alt={`Isomer${index + 1}`} style={{ width: index === 3 ? '500px' : '400px', maxWidth: '100%' }} />
            </Box>
          ))}
        </Box>
      )
      break
    }
    case 'alkanes': {
      isomerismInner = (
        <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <Typography variant='h6'>{t('guide.alkanes.isomerism.1')}</Typography>
          <img src={AlkaneIsomers[0]} alt='Isomer1' style={{ width: '315px', maxWidth: '100%' }} />

          <img src={AlkaneIsomers[1]} alt='Isomer2' style={{ width: '250px', maxWidth: '100%' }} />

          <img src={AlkaneIsomers[2]} alt='Isomer3' style={{ width: '180px', maxWidth: '100%' }} />
        </Box>
      )
      break
    }
    case 'alkenes':
    case 'alkynes':
    case 'amines': {
      isomerismInner = (
        <p>
          {t('guide.isomerismSeeAlkanes')}
        </p>
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
      id='isomerism'
    >
      <Link
        variant='h5'
        underline='none'
        component={RouterLink}
        to={`${searchParams.toString() ? `?${searchParams.toString()}` : ''}#isomerism`}
      >
        {t('guide.isomerism')}
      </Link>
      {isomerismInner}
    </Paper>
  )
}

export default CompoundIsomerism