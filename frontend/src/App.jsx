import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    useMediaQuery,
    useTheme,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomePage from './pages/HomePage';
import KassiererPage from './pages/KassiererPage';
import TierpflegerPage from './pages/TierpflegerPage';
import ZoobesucherPage from './pages/ZoobesucherPage';

function App() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    const menuItems = [
        { text: 'Home', link: '/' },
        { text: 'Besucher', link: '/Zoobesucher' },
        { text: 'Tierpfleger', link: '/Tierpfleger' },
        { text: 'Kassierer', link: '/Kassierer' },
    ];

    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    {isSmallScreen || isMediumScreen || isLargeScreen ? (
                        <Box sx={{ flexGrow: 1 }}>
                            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            </Typography>
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    ) : null}
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Zoo App
                    </Typography>
                    {!isSmallScreen || !isMediumScreen || !isLargeScreen ? (
                        <Box sx={{ display: 'flex' }}>
                            {menuItems.map((item) => (
                                <Button key={item.text} color="inherit" component={Link} to={item.link}>
                                    {item.text}
                                </Button>
                            ))}
                        </Box>
                    ) : null}
                </Toolbar>
            </AppBar>
            {isSmallScreen && (
                <Drawer anchor="left" open={drawerOpen} onClose={closeDrawer}>
                    <List>
                        {menuItems.map((item) => (
                            <ListItem button key={item.text} component={Link} to={item.link} onClick={closeDrawer}>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            )}
            <Container>
                <Routes>
                    <Route path="/" element={<HomePage />} exact />
                    <Route path="/Zoobesucher" element={<ZoobesucherPage />} />
                    <Route path="/Tierpfleger" element={<TierpflegerPage />} />
                    <Route path="/Kassierer" element={<KassiererPage />} />
                </Routes>
            </Container>
        </Router>
    );
}

export default App;