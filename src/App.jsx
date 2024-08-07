import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './layout/Sidebar';
import MainContent from './layout/MainContent';


const App = () => {
    return (
        <Router>
            <div style={{ display: 'flex', height: '100vh', position: 'relative' }}>
                <Sidebar />
                <MainContent />
            </div>
        </Router>
    );
};

export default App;
