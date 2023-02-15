import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import LanguageDropdown from '../../components/LanguageDropdown'


const Header = () => {
  const [t] = useTranslation()
  const [anchorElOrganic, setAnchorElOrganic] = useState<null | HTMLElement>(null)
  const [anchorElNonOrganic, setAnchorElNonOrganic] = useState<null | HTMLElement>(null)

  const openOrganic = Boolean(anchorElOrganic)
  const openNonOrganic = Boolean(anchorElNonOrganic)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    switch (event.currentTarget.id) {
      case 'organic-button':
        setAnchorElOrganic(event.currentTarget);
        break;
      case 'nonorganic-button':
        setAnchorElNonOrganic(event.currentTarget);
        break;
      default:
    }
  };
  const handleClose = (type: string) => {
    switch (type) {
      case 'organic':
        setAnchorElOrganic(null);
        break;
      case 'nonorganic':
        setAnchorElNonOrganic(null);
        break;
      default:
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component={Link}
          to='/'
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Химия
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex' }, alignSelf: 'stretch' }}>
          <Button
            id="organic-button"
            sx={{ my: 2, color: 'inherit', display: 'block', margin: 0 }}
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
            }}
          >
            <MenuItem sx={{ textDecoration: 'none' }} onClick={() => handleClose('organic')}>
              <Typography
                variant="button"
                noWrap
                component={Link}
                to='/organic/alkanes'
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                {t('navigation.alkanes.title')}
              </Typography>
            </MenuItem>
            <MenuItem sx={{ textDecoration: 'none' }} onClick={() => handleClose('organic')}>
              <Typography
                variant="button"
                noWrap
                component={Link}
                to='/organic/cycloalkanes'
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                {t('navigation.cycloalkanes.title')}
              </Typography>
            </MenuItem>
            <MenuItem sx={{ textDecoration: 'none' }} onClick={() => handleClose('organic')}>
              <Typography
                variant="button"
                noWrap
                component={Link}
                to='/organic/alkenes'
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                {t('navigation.alkenes.title')}
              </Typography>
            </MenuItem>
            <MenuItem sx={{ textDecoration: 'none' }} onClick={() => handleClose('organic')}>
              <Typography
                variant="button"
                noWrap
                component={Link}
                to='/organic/alkynes'
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                {t('navigation.alkynes.title')}
              </Typography>
            </MenuItem>
            <MenuItem sx={{ textDecoration: 'none' }} onClick={() => handleClose('organic')}>
              <Typography
                variant="button"
                noWrap
                component={Link}
                to='/organic/alcohols'
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                {t('navigation.alcohols.title')}
              </Typography>
            </MenuItem>
            <MenuItem sx={{ textDecoration: 'none' }} onClick={() => handleClose('organic')}>
              <Typography
                variant="button"
                noWrap
                component={Link}
                to='/organic/aldehydes_and_ketones'
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                {t('navigation.aldehydes_and_ketones.title')}
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
        <Box sx={{ display: { xs: 'flex' }, alignSelf: 'stretch' }}>
          <Button
            id="nonorganic-button"
            sx={{ my: 2, color: 'inherit', display: 'block', margin: 0 }}
            onClick={handleClick}
          >
            {t('navigation.inorganic.title')}
          </Button>
          <Menu
            id="nonorganic-menu"
            anchorEl={anchorElNonOrganic}
            open={openNonOrganic}
            onClose={() => handleClose('nonorganic')}
            MenuListProps={{
              'aria-labelledby': 'nonorganic-button',
            }}
          >
            <MenuItem sx={{ textDecoration: 'none' }} onClick={() => handleClose('nonorganic')}>
              <Typography
                variant="button"
                noWrap
                component={Link}
                to='/nonorganic/alkali_metals'
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                {t('navigation.alkali_metals.title')}
              </Typography>
            </MenuItem>
            <MenuItem sx={{ textDecoration: 'none' }} onClick={() => handleClose('nonorganic')}>
              <Typography
                variant="button"
                noWrap
                component={Link}
                to='/nonorganic/alkaline_earth_metals'
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                {t('navigation.alkaline_earth_metals.title')}
              </Typography>
            </MenuItem>
            <MenuItem sx={{ textDecoration: 'none' }} onClick={() => handleClose('nonorganic')}>
              <Typography
                variant="button"
                noWrap
                component={Link}
                to='/nonorganic/noble_gases'
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                {t('navigation.noble_gases.title')}
              </Typography>

            </MenuItem>
            <MenuItem sx={{ textDecoration: 'none' }} onClick={() => handleClose('nonorganic')}>
              <Typography
                variant="button"
                noWrap
                component={Link}
                to='/nonorganic/halogens'
                sx={{ color: 'inherit', textDecoration: 'none' }}
              >
                {t('navigation.halogens.title')}
              </Typography>
            </MenuItem>
          </Menu>
        </Box>
        <LanguageDropdown />
      </Toolbar>
    </AppBar>
  )
}

export default Header