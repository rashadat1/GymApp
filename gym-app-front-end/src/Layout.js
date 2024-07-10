import React from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="main-content container mx-auto">
                { children }
            </main>
            <Footer />
        </div>

    )
}

export default Layout;