import React, { FC } from 'react'
import { Link, Paper, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink, useSearchParams } from 'react-router-dom';

import { organicCompoundName } from '../../types'


interface CompoundDefinitionProps {
  compound: organicCompoundName
}

export const CompoundDefinition: FC<CompoundDefinitionProps> = (props) => {
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
      id='definition'
    >
      <Link
        variant='h5'
        underline='none'
        component={RouterLink}
        to={`${searchParams.toString() ? `?${searchParams.toString()}` : ''}#definition`}
      >
        {t('guide.definitionTitle')}
      </Link>
      <Paper elevation={0} sx={{ p: 1, borderLeft: 'solid 3px #bbbbbb' }}>
        <Typography variant='body1'>
          {t(`guide.${compound}.definitionText`)}
        </Typography>
        <br />
        <Typography variant='caption'>
          {t(`guide.${compound}.definitionCredits`)}
        </Typography>
      </Paper>
    </Paper>
  )
}

export default CompoundDefinition