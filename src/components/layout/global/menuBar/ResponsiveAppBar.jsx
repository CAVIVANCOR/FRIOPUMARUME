import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import logotipoEmpresaAzul from '../../../../icons/logoppfishchicosinfondo.png';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {inicializarInicio} from '../../../../redux/features/inicio';
import ElevationScroll from './ElevationScroll.jsx';

const drawerWidth = 240;
const navItems = ['Inicio', 'Acerca de', 'Productos y Servicios', 'Delivery', 'Contacto'];
const pages=["/","/about","/products","/delivery","/contact"];
function ResponsiveAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    dispatch(inicializarInicio())
    console.log("ruta seleccionada","/"+pages[index].toLowerCase())
    navigate(pages[index].toLowerCase());
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} >
      <Link to="/">
        <Avatar
          alt="logotipo"
          src={logotipoEmpresaAzul}
          sx={{ width: 94, height: 58}}
          variant='square'
        />
      </Link>
      <Divider />
      <List>
        {navItems.map((item,index) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} selected={selectedIndex === index} onClick={(event) => handleListItemClick(event,index )}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar component="nav" sx={{ bgcolor: '#e3f2fd' }}>
            <Toolbar >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Link to="/">
                <Avatar
                  alt="logotipo"
                  src={logotipoEmpresaAzul}
                  sx={{ width: 94, height: 58}}
                  variant='square'
                />
              </Link>
              <Box sx={{ display: { xs: 'none', sm: 'block', paddingLeft: 15 } }}>
                {navItems.map((item, index) => (
                  <Button variant='text' key={item} sx={{ color: '#1648a5', bgcolor: '#e3f2fd', marginLeft: 1 }} onClick={(event) => handleListItemClick(event,index)}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none'},
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
  );
}

ResponsiveAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default ResponsiveAppBar;