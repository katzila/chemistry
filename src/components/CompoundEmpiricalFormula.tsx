import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { organicCompoundName } from '../types'


interface CompoundEmpiricalFormulaProps {
  compound: organicCompoundName
}

const CompoundEmpiricalFormula: FC<CompoundEmpiricalFormulaProps> = (props) => {
  const { compound } = props
  const [t] = useTranslation()

  switch (compound) {
    case 'alkanes': {
      return (
        <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>C<sub>n</sub>H<sub>2n+2</sub></Typography>
      )
    }
    case 'alkenes': {
      return (
        <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>C<sub>n</sub>H<sub>2n</sub></Typography>
      )
    }
    case 'alkynes': {
      return (
        <Typography variant='h5' sx={{ fontWeight: 'bold', fontStyle: 'italic' }}>C<sub>n</sub>H<sub>2n-2</sub></Typography>
      )
    }
    case 'alcohols': {
      const empiricalFormula1 = <b>ROH</b>
      const empiricalFormula2 = <b>C<sub>n</sub>H<sub>2n+1</sub>OH</b>
      const empiricalFormula3 = <b>C<sub>n</sub>H<sub>2n+2</sub>O</b>
      return (
        <Typography variant='h5' sx={{ fontStyle: 'italic' }}>
          {empiricalFormula1} {t('common.or')} {empiricalFormula2} {t('common.or')} {empiricalFormula3}
        </Typography>
      )
    }
    default:
      return null
  }
}

export default CompoundEmpiricalFormula