import React from 'react'
import { FormControlLabel, Switch, useMediaQuery, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import useDarkModeStore from '../stores/darkModeStore'


const DarkModeSwitch = () => {
  const [t] = useTranslation()
  const theme = useTheme()
  const { setDarkMode, darkMode } = useDarkModeStore()
  const sm = useMediaQuery(theme.breakpoints.up('sm'))

  const switchDarkMode = (checked: boolean) => {
    setDarkMode(checked)
    localStorage.setItem('darkMode', `${checked}`)
  }

  return (
    <FormControlLabel
      labelPlacement="start"
      control={<Switch
        color='default'
        onChange={(e) => switchDarkMode(e.target.checked)}
        checked={darkMode}
      />}
      label={sm ? "Dark mode" : undefined}
    />
  )
}

export default DarkModeSwitch