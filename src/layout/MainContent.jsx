import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, Paper, Typography } from '@mui/material';

const Home = () => (
    <Container sx={{ mt: 8 }}> {/* Adding top margin to account for TopBar */}
        <Paper sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
                Home Page
            </Typography>
            <Typography variant="body1">
                Welcome to the Home page.
            </Typography>
        </Paper>
    </Container>
);

const Analytics = () => (
    <Container sx={{ mt: 8 }}> {/* Adding top margin to account for TopBar */}
        <Paper sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
                Analytics Page
            </Typography>
            <Typography variant="body1">
                Analytics data goes here.
            </Typography>
        </Paper>
    </Container>
);

const Settings = () => (
    <Container sx={{ mt: 8 }}> {/* Adding top margin to account for TopBar */}
        <Paper sx={{ p: 2 }}>
            <Typography variant="h5" gutterBottom>
                Settings Page
            </Typography>
            <Typography variant="body1">
                Configure your settings here.
            </Typography>
        </Paper>
    </Container>
);

const MainContent = () => {
    return (
        <Container sx={{ flexGrow: 1, mt: 2, ml: { xs: 0, md: 240 } }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Container>
    );
};

export default MainContent;
