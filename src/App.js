import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LogistrationPage from './pages/auth/logistration.page';
import {Page} from "./pages";
import './App.css'
import {LogIndexPage} from "./pages/dashboard/daily-logs/index.page";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Page><LogistrationPage page="login" /></Page>} />
                <Route path="/signup" element={<Page><LogistrationPage page="signup" /></Page>} />
                <Route path="/dashboard/daily-logs" element={<Page><LogIndexPage page="daily-logs" /></Page>} />
                {/* Redirect to /login if no valid route is matched */}
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
}

export default App;
