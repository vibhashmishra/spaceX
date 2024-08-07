import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
    Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
    const theme = useTheme();
    const isMediumScreen = useMediaQuery(theme.breakpoints.up('md'));
    const [open, setOpen] = useState(false); // Drawer initially closed
    const [showTopBar, setShowTopBar] = useState(false); // To manage TopBar visibility

    useEffect(() => {
        if (isMediumScreen) {
            setOpen(true); // Automatically open on medium screens and up
            setShowTopBar(false); // Hide TopBar on medium screens and up
        } else {
            setOpen(false); // Ensure Drawer is closed on small screens
            setShowTopBar(true); // Show TopBar on small screens
        }
    }, [isMediumScreen]);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            {/* Top Bar */}
            {showTopBar && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '64px',
                        backgroundColor: theme.palette.primary.main,
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0 16px',
                        zIndex: theme.zIndex.appBar
                    }}
                >
                    {/* <WebIcon sx={{ color: '#fff', marginRight: 2 }} /> */}
                    {/* <Typography variant="h6" sx={{ color: '#fff' }}>
                        My Website
                    </Typography> */}

                    <img src="src/assets/SpaceX-Logo.wine.png" style={{ width: "200px" }} />
                </Box>
            )}

            {/* Menu Icon for small screens */}
            {!isMediumScreen && (
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        zIndex: theme.zIndex.drawer + 1,
                        display: { md: 'none' },
                    }}
                >
                    <MenuIcon />
                </IconButton>
            )}

            {/* Drawer */}
            <Drawer
                anchor={open && !isMediumScreen ? 'right' : 'left'} // Open from the right when toggled on small screens
                variant={isMediumScreen ? 'persistent' : 'temporary'}
                open={open}
                onClose={handleDrawerToggle}
                sx={{
                    width: 240,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 240,
                        boxSizing: 'border-box',
                        // backgroundColor: '#343a40',
                        color: '#fff',
                    },
                }}
            >
                <Toolbar>
                    <img src="src/assets/SpaceX-Logo.wine.png" style={{ width: "200px" }} />

                </Toolbar>
                <List>
                    <ListItem /* component={RouterLink} to="/" onClick={() => setOpen(false)} */>

                        {/* <ListItemText primary="Dashboard" /> */}
                        <Typography variant='h5' style={{ color: "#353535", fontWeight: "600", cursor:"pointer" }}>Dashboard</Typography>
                    </ListItem>
                    <ListItem  /* component={RouterLink} to="/analytics" onClick={() => setOpen(false)} */>
                        {/* <ListItemText primary="Rocket" /> */}
                        <Typography variant='h5' style={{ color: "#353535", fontWeight: "600", cursor:"pointer" }}>Rocket</Typography>
                    </ListItem>

                </List>
            </Drawer>
        </>
    );
};

export default Sidebar;
