import * as React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useRouter } from 'next/router';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BoltIcon from '@mui/icons-material/Bolt';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import GppGoodIcon from '@mui/icons-material/GppGood';
import WaterIcon from '@mui/icons-material/Water';
import ConstructionIcon from '@mui/icons-material/Construction';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Logo from '../../public/logo.png';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
const drawerWidth = 240;

function MyLayout({ children }, props) {

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseLogout = () => {
        setAnchorEl(null);
        //logout function goes here
    }

    // ==================================================== 
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const listItemsData = [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: <InboxIcon />
        },
        {
            name: 'Tenants',
            url: '/tenants',
            icon: <PeopleAltIcon />

        }
    ]

    const router = useRouter()

    const [ServiceOpen, setOpenService] = React.useState(true);

    const ServiceHandleClickToggle = () => {
        setOpenService(!ServiceOpen);
    };

    const drawer = (
        <div>
            <Toolbar sx={{ justifyContent: 'center' }} >
                <Box
                    component="img"
                    sx={{
                        height: 64,
                        width: '70%',
                        height: '100%',
                        padding: '1em 0em',
                    }}
                    alt="Your logo."
                    src={Logo.src}
                />
            </Toolbar>
            <Divider />
            <List>
                {listItemsData.map(({ name, url, icon }, index) => (
                    <ListItem key={index} disablePadding>
                        <Link href={url} style={{ width: '100%' }}>
                            <ListItemButton >
                                <ListItemIcon>
                                    {icon}
                                </ListItemIcon>
                                <ListItemText primary={name} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
                <ListItemButton onClick={ServiceHandleClickToggle}>
                    <ListItemIcon>
                        <EngineeringIcon />
                    </ListItemIcon>
                    <ListItemText primary="Services" />
                    {ServiceOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={ServiceOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ backgroundColor: '#f5f5f5' }}>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => {
                            router.push('/electricity')
                        }} >
                            <ListItemIcon>
                                <BoltIcon />
                            </ListItemIcon>
                            <ListItemText primary="Electricity" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <CleaningServicesIcon />
                            </ListItemIcon>
                            <ListItemText primary="Cleaning" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <GppGoodIcon />
                            </ListItemIcon>
                            <ListItemText primary="Security" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <WaterIcon />
                            </ListItemIcon>
                            <ListItemText primary="Water Supply" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <ConstructionIcon />
                            </ListItemIcon>
                            <ListItemText primary="Repair" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        Omkar Development
                    </Typography>
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            sx={{ top: '35px' }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link href={'/profile'} style={{ textDecoration: "none", color: '#000' }}>
                                    Profile
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseLogout}>
                                <Link href={'/'} style={{ textDecoration: "none", color: '#000' }}>
                                    Logout
                                </Link>
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            {/* <Component {...pageProps} /> */}
            {children}
        </Box>


    )
}

export default MyLayout
