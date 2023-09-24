import React, { FC } from 'react'
import { Link, Paper } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink, useSearchParams } from 'react-router-dom';

import { organicCompoundName } from '../../types'
import ModelViewer from '../ModelViewer';
import { MODEL_NAME_MAP } from '../../constants'


interface CompoundModelProps {
  compound: organicCompoundName
}

export const CompoundModel: FC<CompoundModelProps> = (props) => {
  const { compound } = props
  const [t] = useTranslation()
  const [searchParams] = useSearchParams()

  const modelName = compound in MODEL_NAME_MAP ? MODEL_NAME_MAP[compound as keyof typeof MODEL_NAME_MAP] : null
  if (!modelName) return null

  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        p: 2,
      }}
      id='model'
    >
      <ModelViewer
        scale={4}
        modelPath={`/${modelName}.glb`}
      />
      <Link
        variant='subtitle1'
        fontWeight='bold'
        underline='none'
        component={RouterLink}
        to={`${searchParams.toString() ? `?${searchParams.toString()}` : ''}#model`}
      >
        {t(`guide.${compound}.model`)}
      </Link>
    </Paper>
  )
}

export default CompoundModel