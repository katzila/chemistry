import React, { FC, useState } from 'react'
import { Box, Button, InputAdornment, Link, Paper, TextField, Typography } from '@mui/material'
// import { useTranslation } from 'react-i18next'
import { Link as RouterLink, useSearchParams } from 'react-router-dom';


interface TaskTemplateProps {
  id: string
  text: string
  answer?: string
  index: number
}

export const TaskTemplate: FC<TaskTemplateProps> = (props) => {
  const {
    id,
    text,
    answer,
    index,
  } = props
  // const [t] = useTranslation()
  const [searchParams] = useSearchParams()
  const [answerValue, setAnswerValue] = useState('')
  const [answerStatus, setAnswerStatus] = useState<'hidden' | 'correct' | 'incorrect' | 'surrendered' | 'ask'>('hidden')

  const handleEnterKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (answerValue === answer) {
        setAnswerStatus('correct')
      } else {
        setAnswerStatus('incorrect')
      }
    }
  }

  const helperText = () => {
    switch (answerStatus) {
      case 'correct':
        return `You are right! The answer is: ${answer}`
      case 'incorrect':
        return 'Incorrect answer, try again!'
      case 'surrendered':
        return `The correct answer is: ${answer}`
      case 'ask':
        return `There is no answer for this task. You can ask your teacher for help.`
      default:
        return ''
    }
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
      id={id}
    >
      <Link
        variant='h5'
        underline='none'
        component={RouterLink}
        to={`${searchParams.toString() ? `?${searchParams.toString()}` : ''}#${id}`}
      >
        {index}
      </Link>
      <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <Typography variant='body1'>
          {text}
        </Typography>
        <TextField
          error={answerStatus === 'incorrect'}
          size='small'
          label='Enter your answer'
          variant='outlined'
          helperText={helperText()}
          onChange={(e) => setAnswerValue(e.target.value)}
          onKeyDown={handleEnterKey}
          value={answerValue}
          disabled={answerStatus === 'correct' || answerStatus === 'surrendered' || answerStatus === 'ask'}
          InputProps={{
            endAdornment: answer ? (
              <InputAdornment position='end'>
                <Button
                  title='Surrender'
                  onClick={() => setAnswerStatus('surrendered')}
                  disabled={answerStatus === 'correct' || answerStatus === 'surrendered' || answerStatus === 'ask'}
                >
                  Show answer
                </Button>
              </InputAdornment>
            ) : undefined,
          }}
        />
      </Box>
    </Paper>
  )
}

export default TaskTemplate