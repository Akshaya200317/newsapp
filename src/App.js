import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navbar';
import NewsList from './components/NewsList';

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<NewsList category="general" />} />
                    <Route path="/business" element={<NewsList category="business" />} />
                    <Route path="/technology" element={<NewsList category="technology" />} />
                    <Route path="/sports" element={<NewsList category="sports" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
