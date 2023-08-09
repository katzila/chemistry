import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import LanguageDropdown from '../../components/LanguageDropdown'


const Header = () => {
  const { t, i18n } = useTranslation()
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
            letterSpacing: `.${i18n.resolvedLanguage === 'ru' ? 3 : '05'}rem`,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          {t('navigation.title')}
        </Typography>
        <Box component="div" sx={{ flexGrow: 1, display: { xs: 'flex' }, alignSelf: 'stretch' }}>
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
            <MenuItem
              component={Link}
              to='/organic/alkanes'
              sx={{ textDecoration: 'none' }}
              onClick={() => handleClose('organic')}
            >
              {t('navigation.alkanes.title')}
            </MenuItem>
            <MenuItem
              component={Link}
              to='/organic/cycloalkanes'
              sx={{ textDecoration: 'none' }}
              onClick={() => handleClose('organic')}
            >
              {t('navigation.cycloalkanes.title')}
            </MenuItem>
            <MenuItem
              sx={{ textDecoration: 'none' }}
              onClick={() => handleClose('organic')}
              component={Link}
              to='/organic/alkenes'
            >
              {t('navigation.alkenes.title')}
            </MenuItem>
            <MenuItem
              sx={{ textDecoration: 'none' }}
              onClick={() => handleClose('organic')}
              component={Link}
              to='/organic/alkynes'
            >
              {t('navigation.alkynes.title')}
            </MenuItem>
            <MenuItem
              sx={{ textDecoration: 'none' }}
              onClick={() => handleClose('organic')}
              component={Link}
              to='/organic/arenes'
            >
              {t('navigation.arenes.title')}
            </MenuItem>
            <MenuItem
              sx={{ textDecoration: 'none' }}
              onClick={() => handleClose('organic')}
              component={Link}
              to='/organic/alcohols'
            >
              {t('navigation.alcohols.title')}
            </MenuItem>
            <MenuItem
              sx={{ textDecoration: 'none' }}
              onClick={() => handleClose('organic')}
              component={Link}
              to='/organic/phenols'
            >
              {t('navigation.phenols.title')}
            </MenuItem>
            <MenuItem
              sx={{ textDecoration: 'none' }}
              onClick={() => handleClose('organic')}
              component={Link}
              to='/organic/aldehydes_ketones'
            >
              {t('navigation.aldehydes_ketones.title')}
            </MenuItem>
            <MenuItem
              sx={{ textDecoration: 'none' }}
              onClick={() => handleClose('organic')}
              component={Link}
              to='/organic/carboxylicAcids'
            >
              {t('navigation.carboxylicAcids.title')}
            </MenuItem>
            <MenuItem
              sx={{ textDecoration: 'none' }}
              onClick={() => handleClose('organic')}
              component={Link}
              to='/organic/esters'
            >
              {t('navigation.esters.title')}
            </MenuItem>
            <MenuItem
              sx={{ textDecoration: 'none' }}
              onClick={() => handleClose('organic')}
              component={Link}
              to='/organic/carbohydrates'
            >
              {t('navigation.carbohydrates.title')}
            </MenuItem>
            <MenuItem
              sx={{ textDecoration: 'none' }}
              onClick={() => handleClose('organic')}
              component={Link}
              to='/organic/amines'
            >
              {t('navigation.amines.title')}
            </MenuItem>
            <MenuItem
              sx={{ textDecoration: 'none' }}
              onClick={() => handleClose('organic')}
              component={Link}
              to='/organic/amino_acids'
            >
              {t('navigation.amino_acids.title')}
            </MenuItem>
          </Menu>
          <Button
            id="inorganic-button"
            sx={{ my: 2, color: 'inherit', display: 'block', margin: 0 }}
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
            }}
          >
            <MenuItem
              sx={{ textDecoration: 'none' }}
              onClick={() => handleClose('inorganic')}
              component={Link}
              to='/inorganic/alkali_metals'
            >
              {t('navigation.alkali_metals.title')}
            </MenuItem>
            <MenuItem
              sx={{ textDecoration: 'none' }}
              onClick={() => handleClose('inorganic')}
              component={Link}
              to='/inorganic/alkaline_earth_metals'
            >
              {t('navigation.alkaline_earth_metals.title')}
            </MenuItem>
            <MenuItem
              sx={{ textDecoration: 'none' }}
              onClick={() => handleClose('inorganic')}
              component={Link}
              to='/inorganic/noble_gases'
            >
              {t('navigation.noble_gases.title')}
            </MenuItem>
            <MenuItem
              sx={{ textDecoration: 'none' }}
              onClick={() => handleClose('inorganic')}
              component={Link}
              to='/inorganic/halogens'
            >
              {t('navigation.halogens.title')}
            </MenuItem>
          </Menu>
        </Box>
        <LanguageDropdown />
      </Toolbar>
    </AppBar>
  )
}

export default Header