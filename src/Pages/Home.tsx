import React from 'react'
import { Box, Link, Paper, Typography } from '@mui/material'
import { Trans, useTranslation } from 'react-i18next'
import { Link as RouterLink } from 'react-router-dom';


const Home = () => {
  const { t } = useTranslation()
  document.title = t('common.appName')

  return (
    <Box component="div" sx={{ p: 4 }}>
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          p: 2,
        }}
        id='about'
      >
        <Link
          variant='h5'
          underline='none'
          component={RouterLink}
          to='#about'
        >
          {t('homepage.aboutTitle')}
        </Link>
        <Trans
          i18nKey={'homepage.aboutText'}
          components={{
            mainBody: <p />,
            subText: <Typography variant='subtitle2' />,
          }}
        />
      </Paper>
    </Box>
  )
}

export default Home