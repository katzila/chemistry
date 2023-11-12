import React, { FC, ReactNode } from 'react'
import { Link, Paper, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink, useSearchParams } from 'react-router-dom';

import { organicCompoundName } from '../../types'


interface CompoundEmpiricalFormulaProps {
  compound: organicCompoundName
}

export const CompoundEmpiricalFormula: FC<CompoundEmpiricalFormulaProps> = (props) => {
  const { compound } = props
  const [t] = useTranslation()
  const [searchParams] = useSearchParams()

  let empiricalFormulaInner: ReactNode = null

  switch (compound) {
    case 'alcohols': {
      const empiricalFormula1 = <b>ROH</b>
      const empiricalFormula2 = <b>C<sub>n</sub>H<sub>2n+1</sub>OH</b>
      const empiricalFormula3 = <b>C<sub>n</sub>H<sub>2n+2</sub>O</b>
      empiricalFormulaInner = (
        <Typography variant='h5' sx={{ fontStyle: 'italic' }}>
          {empiricalFormula1} {t('common.or')} {empiricalFormula2} {t('common.or')} {empiricalFormula3}
        </Typography>
      )
      break
    }
    case 'alkanes': {
      empiricalFormulaInner = (
        <Typography
          variant='h5'
          sx={{ fontWeight: 'bold', fontStyle: 'italic' }}
        >
          C<sub>n</sub>H<sub>2n+2</sub>
        </Typography>
      )
      break
    }
    case 'alkenes': {
      empiricalFormulaInner = (
        <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>C<sub>n</sub>H<sub>2n</sub></Typography>
      )
      break
    }
    case 'alkynes': {
      empiricalFormulaInner = (
        <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>C<sub>n</sub>H<sub>2n-2</sub></Typography>
      )
      break
    }
    case 'arenes': {
      empiricalFormulaInner = (
        <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>C<sub>n</sub>H<sub>2n - 6</sub></Typography>
      )
      break
    }
    case 'carboxylicAcids': {
      empiricalFormulaInner = (
        <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>C<sub>n</sub>H<sub>2n</sub>O<sub>2</sub></Typography>
      )
      break
    }
    case 'esters': {
      empiricalFormulaInner = (
        <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>C<sub>n</sub>H<sub>2n</sub>O<sub>2</sub></Typography>
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
      id='empiricalFormula'
    >
      <Link
        variant='h5'
        underline='none'
        component={RouterLink}
        to={`${searchParams.toString() ? `?${searchParams.toString()}` : ''}#empiricalFormula`}
      >
        {t('guide.empiricalFormula')}
      </Link>
      {empiricalFormulaInner}
    </Paper>
  )
}

export default CompoundEmpiricalFormula