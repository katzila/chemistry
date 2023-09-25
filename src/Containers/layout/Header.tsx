import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import LanguageDropdown from '../../components/LanguageDropdown'
import { organicCompounds } from '../../constants'
import { organicCompoundName } from '../../types'


const Header = () => {
  const { t, i18n } = useTranslation()
  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.up('sm'))
  const [anchorElOrganic, setAnchorElOrganic] = useState<null | HTMLElement>(null)
  const [anchorElInorganic, setAnchorElInorganic] = useState<null | HTMLElement>(null)

  const openOrganic = Boolean(anchorElOrganic)
  const openInorganic = Boolean(anchorElInorganic)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    switch (event.currentTarget.id) {
      case 'organic-button':
        setAnchorElOrganic(event.currentTarget);
        break;
      case 'inorganic-button':
        setAnchorElInorganic(event.currentTarget);
        break;
      default:
    }
  };
  const handleClose = (type: string) => {
    switch (type) {
      case 'organic':
        setAnchorElOrganic(null);
        break;
      case 'inorganic':
        setAnchorElInorganic(null);
        break;
      default:
    }
  }

  const organicMenuItem = (compound: organicCompoundName) => (
    <MenuItem
      key={compound}
      component={Link}
      to={`/organic/${compound}`}
      onClick={() => handleClose('organic')}
    >
      {t(`navigation.${compound}.title`)}
    </MenuItem>
  )

  return (
    <AppBar position="static">
      <Toolbar sx={{ px: { xs: 0, sm: 3 } }}>
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to='/'
          sx={{
            mr: 1,
            p: 1,
            display: { xs: 'none', sm: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: `.${i18n.resolvedLanguage === 'ru' ? 3 : '05'}rem`,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {t('navigation.title')}
        </Typography>
        <Box component="div" sx={{ flexGrow: 1, display: 'flex', alignSelf: 'stretch' }}>
          <Button
            id="organic-button"
            sx={{
              color: 'inherit',
              display: 'block',
              m: 0,
              flex: { xs: 1, sm: 'initial' }
            }}
            size={sm ? 'medium' : 'large'}
            onClick={handleClick}
          >
            {t('navigation.organic.title')}
          </Button>
          <Menu
            id="organic-menu"
            anchorEl={anchorElOrganic}
            open={openOrganic}
            onClose={() => handleClose('organic')}
            MenuListProps={{
              'aria-labelledby': 'organic-button',
              sx: { textDecoration: 'none' },
            }}
          >
            {organicCompounds.map(organicMenuItem)}
          </Menu>
         {/*   <Button
            id="inorganic-button"
            sx={{
              color: 'inherit',
              display: 'block',
              m: 0,
              flex: { xs: 1, sm: 'initial' }
            }}
            size={sm ? 'medium' : 'large'}
            onClick={handleClick}
          >
            {t('navigation.inorganic.title')}
          </Button>
         <Menu
            id="inorganic-menu"
            anchorEl={anchorElInorganic}
            open={openInorganic}
            onClose={() => handleClose('inorganic')}
            MenuListProps={{
              'aria-labelledby': 'inorganic-button',
              sx: { textDecoration: 'none' },
            }}
          >
            <MenuItem
              onClick={() => handleClose('inorganic')}
              component={Link}
              to='/inorganic/alkali_metals'
            >
              {t('navigation.alkali_metals.title')}
            </MenuItem>
            <MenuItem
              onClick={() => handleClose('inorganic')}
              component={Link}
              to='/inorganic/alkaline_earth_metals'
            >
              {t('navigation.alkaline_earth_metals.title')}
            </MenuItem>
            <MenuItem
              onClick={() => handleClose('inorganic')}
              component={Link}
              to='/inorganic/noble_gases'
            >
              {t('navigation.noble_gases.title')}
            </MenuItem>
            <MenuItem
              onClick={() => handleClose('inorganic')}
              component={Link}
              to='/inorganic/halogens'
            >
              {t('navigation.halogens.title')}
            </MenuItem>
          </Menu> */}
        </Box>
        <LanguageDropdown />
      </Toolbar>
    </AppBar>
  )
}

export default Header