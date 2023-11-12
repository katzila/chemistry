import React, { useState } from 'react'
import { Button, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'


const LanguageDropdown = () => {
  const [anchorElLanguage, setAnchorElLanguage] = useState<null | HTMLElement>(null)
  const { t, i18n } = useTranslation()
  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.up('sm'))

  const openLanguage = !!anchorElLanguage

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    switch (event.currentTarget.id) {
      case 'language-button':
        setAnchorElLanguage(event.currentTarget);
        break;
      default:
    }
  };

  const changeLanguage = (language: 'en' | 'ru') => {
    i18n.changeLanguage(language);
    localStorage.setItem('locale', language)
    setAnchorElLanguage(null);
  }

  return (
    <>
      <Button
        id="language-button"
        sx={{
          color: 'inherit',
          display: 'block',
          m: 0,
          alignSelf: 'stretch'
        }}
        onClick={handleClick}
      >
        {t(`navigation.languages.${i18n.language as 'en' | 'ru'}`).slice(0, sm ? undefined : 2)}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorElLanguage}
        open={openLanguage}
        onClose={() => setAnchorElLanguage(null)}
        MenuListProps={{
          'aria-labelledby': 'language-button',
          sx: { textDecoration: 'none' },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem
          onClick={() => changeLanguage('en')}
          title={t('navigation.languages.en')}
        >
          English
        </MenuItem>
        <MenuItem
          onClick={() => changeLanguage('ru')}
          title={t('navigation.languages.ru')}
        >
          Русский
        </MenuItem>
      </Menu>
    </>
  )
}

export default LanguageDropdown