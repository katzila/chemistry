import React, { FC } from 'react'
import { Link, Paper, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink, useSearchParams } from 'react-router-dom';

import { organicCompoundName } from '../../types'


interface CompoundPhysicalPropertiesProps {
  compound: organicCompoundName
}

export const CompoundPhysicalProperties: FC<CompoundPhysicalPropertiesProps> = (props) => {
  const { compound } = props
  const [t] = useTranslation()
  const [searchParams] = useSearchParams()

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        p: 2,
      }}
      id='physicalProperties'
    >
      <Link
        variant='h5'
        underline='none'
        component={RouterLink}
        to={`${searchParams.toString() ? `?${searchParams.toString()}` : ''}#physicalProperties`}
      >
        {t('guide.physicalProperties')}
      </Link>
      <Typography variant='body1'>
        {t(`guide.${compound}.physicalProperties`)}
      </Typography>
    </Paper>
  )
}

export default CompoundPhysicalProperties