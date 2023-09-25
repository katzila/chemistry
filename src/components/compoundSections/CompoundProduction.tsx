import React, { FC, ReactNode } from 'react'
import { Link, Paper, Typography } from '@mui/material'
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
        <ol>
          <li>
            <p>
              {t('guide.alcohols.production.1')}</p>
            <img src={AlcoholProductions[0]} alt='Production1' style={{ width: '500px', maxWidth: '100%' }} />
          </li>
          <li>
            <p>{t('guide.alcohols.production.2')}</p>
            <img src={AlcoholProductions[1]} alt='Production2' style={{ width: '500px', maxWidth: '100%' }} />
          </li>
          <li>
            <p>{t('guide.alcohols.production.3')}</p>
            <img src={AlcoholProductions[2]} alt='Production3' style={{ width: '400px', maxWidth: '100%' }} />
          </li>
          <li>
            <p>{t('guide.alcohols.production.4')}</p>
            <img src={AlcoholProductions[3]} alt='Production4' style={{ width: '400px', maxWidth: '100%' }} />
          </li>
          <li>
            <p>{t('guide.alcohols.production.5')}</p>
            <img src={AlcoholProductions[4]} alt='Production5' style={{ width: '350px', maxWidth: '100%' }} />
          </li>
        </ol>
      )
      break
    }
    case 'alkanes': {
      productionInner = (
        <ol>
          <li>
            <p>
              {t('guide.alkanes.production.1')}</p>
            <img src={AlkaneProductions[0]} alt='Production1' style={{ width: '350px', maxWidth: '100%' }} />
          </li>
          <li>
            <p>{t('guide.alkanes.production.2')}</p>
            <img src={AlkaneProductions[1]} alt='Production2' style={{ width: '500px', maxWidth: '100%' }} />
          </li>
        </ol>
      )
      break
    }
    case 'alkenes': {
      productionInner = (
        <ol>
          <li>
            <p>{t('guide.alkenes.production.1')}</p>
            <img src={AlkeneProductions[0]} alt='Production1' style={{ width: '350px', maxWidth: '100%' }} />
          </li>
          <li>
            <p>{t('guide.alkenes.production.2')}</p>
            <img src={AlkeneProductions[1]} alt='Production2' style={{ width: '500px', maxWidth: '100%' }} />
          </li>
        </ol>
      )
      break
    }
    case 'alkynes': {
      productionInner = (
        <ol>
          <li>
            <p>{t('guide.alkynes.production.1')}</p>
            <img src={AlkyneProductions[0]} alt='Production1' style={{ width: '300px', maxWidth: '100%' }} />
          </li>
          <li>
            <p>{t('guide.alkynes.production.2')}</p>
            <img src={AlkyneProductions[1]} alt='Production2' style={{ width: '420px', maxWidth: '100%' }} />
          </li>
        </ol>
      )
      break
    }
    case 'carboxylicAcids': {
      productionInner = (
        <ol>
          <li>
            <p> {t('guide.carboxylicAcids.production.1')}</p>
            <img src={CarboxylicAcidsProductions[0]} alt='Production1' style={{ width: '500px', maxWidth: '100%' }} />
          </li>
          <li>
            <p>{t('guide.carboxylicAcids.production.2')}</p>
            <img src={CarboxylicAcidsProductions[1]} alt='Production2' style={{ width: '250px', maxWidth: '100%' }} />
          </li>
          <li>
            <p>{t('guide.carboxylicAcids.production.3')}</p>
            <img src={CarboxylicAcidsProductions[2]} alt='Production3' style={{ width: '425px', maxWidth: '100%' }} />
          </li>
          <li>
            <p>{t('guide.carboxylicAcids.production.4')}</p>
            <img src={CarboxylicAcidsProductions[3]} alt='Production4' style={{ width: '400px', maxWidth: '100%' }} />
          </li>
        </ol>
      )
      break
    }
    case 'esters': {
      productionInner = (
        <ol>
          <li>
            <Typography variant='h6'>{t('guide.esters.production.1')}</Typography>
            <img src={EsterProduction} alt='Production1' style={{ width: '500px', maxWidth: '100%' }} />
          </li>
        </ol>
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
      {productionInner}
    </Paper>
  )
}

export default CompoundProduction