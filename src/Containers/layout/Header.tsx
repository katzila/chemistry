import { AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


type Props = {}

const Header = (props: Props) => {
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
        <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
          <Button
            id="organic-button"
            sx={{ my: 2, color: 'inherit', display: 'block', margin: 0 }}
            onClick={handleClick}
          >
            Органическая химия
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
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Алканы
              </Typography>
            </MenuItem>
            <MenuItem sx={{ textDecoration: 'none' }} onClick={() => handleClose('organic')}>
              <Typography
                variant="button"
                noWrap
                component={Link}
                to='/organic/alkenes'
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Алкены
              </Typography>
            </MenuItem>
          </Menu>

          <Button
            id="nonorganic-button"
            sx={{ my: 2, color: 'inherit', display: 'block', margin: 0 }}
            onClick={handleClick}
          >
            Неорганическая химия
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
            {/* <MenuItem sx={{ textDecoration: 'none' }} onClick={() => handleClose('nonorganic')}>
              <Typography
                variant="button"
                noWrap
                component={Link}
                to='/nonorganic/tasks'
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Задачи
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => handleClose('nonorganic')}>
              <Typography
                variant="button"
                noWrap
                component={Link}
                to='/nonorganic/guide'
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Справочник
              </Typography>
            </MenuItem> */}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header