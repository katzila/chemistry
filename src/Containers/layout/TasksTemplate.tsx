import React, { FC } from 'react'
import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { organicCompoundName } from '../../types'
import TaskTemplate from './TaskTemplate'


interface TasksTemplateProps {
  compound: organicCompoundName
}

const TasksTemplate: FC<TasksTemplateProps> = (props) => {
  const { compound } = props
  const [t] = useTranslation()

  const level1Tasks = t(`tasks.${compound}.level1`)
  const level2Tasks = t(`tasks.${compound}.level2`)

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
      <Box
        component="div"
        sx={{
          width: { xs: '100%', lg: '50%' },
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        {Object.entries(level1Tasks).map(([key, task], i) => (
          <TaskTemplate
            key={key}
            id={`level1-${key}`}
            text={task.text}
            index={i}
          />
        ))}
      </Box>
      <Box
        component="div"
        sx={{
          width: { xs: '100%', lg: '50%' },
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        {Object.entries(level2Tasks).map(([key, task], i) => (
          <TaskTemplate
            key={key}
            id={`level2-${key}`}
            text={task.text}
            answer={task.answer}
            index={i}
          />
        ))}
      </Box>
    </Box>
  )
}

export default TasksTemplate