import React, { FC } from 'react'
import { Box } from '@mui/material'

import { compoundName } from '../../types'


interface TasksTemplateProps {
  compound: compoundName
}

const TasksTemplate: FC<TasksTemplateProps> = (props) => {
  const { compound } = props

  return (
    <Box
      component="div"
      role="tabpanel"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        p: 2,
      }}
    >
      {compound}
    </Box>
  )
}

export default TasksTemplate