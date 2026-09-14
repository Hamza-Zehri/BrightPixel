import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const navItems = [
    { label: 'Home', id: '' },
    { label: 'Services', id: 'services' },
    { label: 'Solutions', id: 'solutions' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState(() => {
        try {
            return document.documentElement.getAttribute('data-theme') || 'dark';
        } catch {
            return 'dark';
        }
    });
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        document.documentElement.setAttribute('data-theme', next);
        try { localStorage.setItem('brightpixel-theme', next); } catch {}
    };

    const renderLink = (item, mobile) => {
        const baseStyle = mobile ? { fontSize: '1.5rem' } : {};
        if (item.id === '') {
            return isHome ? (
                <a key={item.label} href="#home" className="nav-link" style={baseStyle} onClick={() => setIsOpen(false)}>
                    {item.label}
                </a>
            ) : (
                <Link key={item.label} to="/#home" className="nav-link" style={baseStyle}>
                    {item.label}
                </Link>
            );
        }
        if (isHome) {
            return (
                <a key={item.label} href={`#${item.id}`} className="nav-link" style={baseStyle} onClick={() => setIsOpen(false)}>
                    {item.label}
                </a>
            );
        }
        return (
            <Link key={item.label} to={`/#${item.id}`} className="nav-link" style={baseStyle}>
                {item.label}
            </Link>
        );
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', zIndex: 10 }} onClick={() => setIsOpen(false)}>
                    <img src={logo} alt="Bright Pixel" style={{ height: '50px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
                </Link>

                {/* Desktop Menu */}
                <div className="nav-desktop">
                    {navItems.map((item) => renderLink(item, false))}

                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <a href="#contact" className="btn btn-glow" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', textDecoration: 'none' }}>
                        Request a Quote
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="nav-mobile-toggle">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="nav-mobile-overlay">
                    {navItems.map((item) => renderLink(item, true))}
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme" style={{ width: '52px', height: '52px' }}>
                        {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
                    </button>
                    <a href="#contact" className="btn btn-glow" style={{ textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
                        Request a Quote
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;