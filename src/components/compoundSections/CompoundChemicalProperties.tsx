import React, { FC } from 'react'
import { Link, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink, useSearchParams } from 'react-router-dom';

import alcoholsScheme from '../../assets/alcohols/alcoholsScheme.svg'
import alkanesScheme from '../../assets/alkanes/alkanesScheme.svg'
import alkenesScheme from '../../assets/alkenes/alkenesScheme.svg'
import alkynesScheme from '../../assets/alkynes/alkynesScheme.svg'
import carboxylicAcidsScheme from '../../assets/carboxylicAcids/carboxylicAcidsScheme.svg'
import phenolsScheme from '../../assets/phenols/phenolsScheme.svg'

import { organicCompoundName } from '../../types'


interface CompoundChemicalPropertiesProps {
  compound: organicCompoundName
}

export const CompoundChemicalProperties: FC<CompoundChemicalPropertiesProps> = (props) => {
  const { compound } = props
  const [t] = useTranslation()
  const [searchParams] = useSearchParams()

  const schemeMap = {
    'alcohols': alcoholsScheme,
    'alkanes': alkanesScheme,
    'alkenes': alkenesScheme,
    'alkynes': alkynesScheme,
    'carboxylicAcids': carboxylicAcidsScheme,
    'phenols': phenolsScheme,
  }

  const scheme = compound in schemeMap ? schemeMap[compound as keyof typeof schemeMap] : null
  if (!scheme) return null

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        p: 2,
      }}
      id='chemicalProperties'
    >
      <img src={scheme} alt={`${compound} scheme`} style={{ maxWidth: '100%' }} />
      <Link
        variant='subtitle1'
        fontWeight='bold'
        underline='none'
        component={RouterLink}
        to={`${searchParams.toString() ? `?${searchParams.toString()}` : ''}#chemicalProperties`}
      >
        {t('guide.chemicalProperties')}
      </Link>
    </Paper>
  )
}

export default CompoundChemicalProperties