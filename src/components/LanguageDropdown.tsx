import React, { useState } from 'react'
import i18next from 'i18next'
import { Button, Menu, MenuItem } from '@mui/material'
import { useTranslation } from 'react-i18next'


const LanguageDropdown = () => {
  const [anchorElLanguage, setAnchorElLanguage] = useState<null | HTMLElement>(null)
  const [t] = useTranslation()

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
    i18next.changeLanguage(language);
    localStorage.setItem('locale', language)
    setAnchorElLanguage(null);
  }

  return (
    <>
      <Button
        id="language-button"
        sx={{ my: 2, color: 'inherit', display: 'block', margin: 0, alignSelf: 'stretch' }}
        onClick={handleClick}
      >
        {t(`navigation.languages.${i18next.language as 'en' | 'ru'}`)}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorElLanguage}
        open={openLanguage}
        onClose={() => setAnchorElLanguage(null)}
        MenuListProps={{
          'aria-labelledby': 'language-button',
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
        <MenuItem sx={{ textDecoration: 'none' }} onClick={() => changeLanguage('en')}>
          {t('navigation.languages.en')}
        </MenuItem>
        <MenuItem sx={{ textDecoration: 'none' }} onClick={() => changeLanguage('ru')}>
          {t('navigation.languages.ru')}
        </MenuItem>
      </Menu>
    </>
  )
}

export default LanguageDropdown