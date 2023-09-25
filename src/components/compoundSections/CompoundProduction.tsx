import React, { FC, ReactNode } from 'react'
import { Box, Link, Paper, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink, useSearchParams } from 'react-router-dom';

import { AlcoholProductions } from '../../assets/alcohols/productions';
import { AlkaneProductions } from '../../assets/alkanes/productions';
import { AlkeneProductions } from '../../assets/alkenes/productions';
import { AlkyneProductions } from '../../assets/alkynes/productions';
import { CarboxylicAcidsProductions } from '../../assets/carboxylicAcids/productions';
import EsterProduction from '../../assets/esters/production1.png'

import { organicCompoundName } from '../../types'


interface CompoundProductionProps {
  compound: organicCompoundName
}

export const CompoundProduction: FC<CompoundProductionProps> = (props) => {
  const { compound } = props
  const [t] = useTranslation()
  const [searchParams] = useSearchParams()

  let productionInner: ReactNode = null

  switch (compound) {
    case 'alcohols': {
      productionInner = (
        <>
          <li>
            <Typography variant='h6'>
              {t('guide.alcohols.production.1')}</Typography>
            <img src={AlcoholProductions[0]} alt='Production1' style={{ width: '500px', maxWidth: '100%' }} />
          </li>
          <li>
            <Typography variant='h6'>{t('guide.alcohols.production.2')}</Typography>
            <img src={AlcoholProductions[1]} alt='Production2' style={{ width: '500px', maxWidth: '100%' }} />
          </li>
          <li>
            <Typography variant='h6'>{t('guide.alcohols.production.3')}</Typography>
            <img src={AlcoholProductions[2]} alt='Production3' style={{ width: '400px', maxWidth: '100%' }} />
          </li>
          <li>
            <Typography variant='h6'>{t('guide.alcohols.production.4')}</Typography>
            <img src={AlcoholProductions[3]} alt='Production4' style={{ width: '400px', maxWidth: '100%' }} />
          </li>
          <li>
            <Typography variant='h6'>{t('guide.alcohols.production.5')}</Typography>
            <img src={AlcoholProductions[4]} alt='Production5' style={{ width: '350px', maxWidth: '100%' }} />
          </li>
        </>
      )
      break
    }
    case 'alkanes': {
      productionInner = (
        <>
          <li>
            <Typography variant='h6'>
              {t('guide.alkanes.production.1')}</Typography>
            <img src={AlkaneProductions[0]} alt='Production1' style={{ width: '350px', maxWidth: '100%' }} />
          </li>
          <li>
            <Typography variant='h6'>{t('guide.alkanes.production.2')}</Typography>
            <img src={AlkaneProductions[1]} alt='Production2' style={{ width: '500px', maxWidth: '100%' }} />
          </li>
        </>
      )
      break
    }
    case 'alkenes': {
      productionInner = (
        <>
          <li>
            <Typography variant='h6'>{t('guide.alkenes.production.1')}</Typography>
            <img src={AlkeneProductions[0]} alt='Production1' style={{ width: '350px', maxWidth: '100%' }} />
          </li>
          <li>
            <Typography variant='h6'>{t('guide.alkenes.production.2')}</Typography>
            <img src={AlkeneProductions[1]} alt='Production2' style={{ width: '500px', maxWidth: '100%' }} />
          </li>
        </>
      )
      break
    }
    case 'alkynes': {
      productionInner = (
        <>
          <li>
            <Typography variant='h6'>{t('guide.alkynes.production.1')}</Typography>
            <img src={AlkyneProductions[0]} alt='Production1' style={{ width: '300px', maxWidth: '100%' }} />
          </li>
          <li>
            <Typography variant='h6'>{t('guide.alkynes.production.2')}</Typography>
            <img src={AlkyneProductions[1]} alt='Production2' style={{ width: '420px', maxWidth: '100%' }} />
          </li>
        </>
      )
      break
    }
    case 'carboxylicAcids': {
      productionInner = (
        <>
          <li>
            <Typography variant='h6'> {t('guide.carboxylicAcids.production.1')}</Typography>
            <img src={CarboxylicAcidsProductions[0]} alt='Production1' style={{ width: '500px', maxWidth: '100%' }} />
          </li>
          <li>
            <Typography variant='h6'>{t('guide.carboxylicAcids.production.2')}</Typography>
            <img src={CarboxylicAcidsProductions[1]} alt='Production2' style={{ width: '250px', maxWidth: '100%' }} />
          </li>
          <li>
            <Typography variant='h6'>{t('guide.carboxylicAcids.production.3')}</Typography>
            <img src={CarboxylicAcidsProductions[2]} alt='Production3' style={{ width: '425px', maxWidth: '100%' }} />
          </li>
          <li>
            <Typography variant='h6'>{t('guide.carboxylicAcids.production.4')}</Typography>
            <img src={CarboxylicAcidsProductions[3]} alt='Production4' style={{ width: '400px', maxWidth: '100%' }} />
          </li>
        </>
      )
      break
    }
    case 'esters': {
      productionInner = (
        <Box component="ol" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <li>
            <Typography variant='h6'>{t('guide.esters.production.1')}</Typography>
            <img src={EsterProduction} alt='Production1' style={{ width: '500px', maxWidth: '100%' }} />
          </li>
        </Box>
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
      id='production'
    >
      <Link
        variant='h5'
        underline='none'
        component={RouterLink}
        to={`${searchParams.toString() ? `?${searchParams.toString()}` : ''}#production`}
      >
        {t('guide.production')}
      </Link>
      <Box component="ol" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {productionInner}
      </Box>
    </Paper>
  )
}

export default CompoundProduction