import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', zIndex: 10 }}>
                    <img src={logo} alt="Bright Pixel" style={{ height: '50px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {['Home', 'About', 'Services', 'Portfolio'].map((item) => {
                        if (item === 'Portfolio') {
                            return (
                                <a
                                    key={item}
                                    href="https://hamzazehri.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nav-link"
                                    style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--primary-glow)' }}
                                >
                                    Portfolio <ExternalLink size={14} />
                                </a>
                            )
                        }
                        // Map 'Home' to top of page
                        const linkTarget = item === 'Home' ? '' : item.toLowerCase();

                        return isHome ? (
                            <a key={item} href={`#${linkTarget}`} className="nav-link">
                                {item}
                            </a>
                        ) : (
                            <Link key={item} to={`/#${linkTarget}`} className="nav-link">
                                {item}
                            </Link>
                        )
                    })}

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginRight: '1rem' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Call Us Now</span>
                        <a href="tel:+923357981318" style={{ fontWeight: '700', color: 'white', fontSize: '1rem' }}>+92 335 7981318</a>
                    </div>

                    <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', textDecoration: 'none' }}>
                        Get In Touch
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden" style={{ display: 'flex', zIndex: 10 }}>
                    <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'white' }}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    background: 'var(--bg-dark)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2rem',
                    zIndex: 9
                }}>
                    {['Home', 'About', 'Services', 'Portfolio'].map((item) => {
                        if (item === 'Portfolio') {
                            return (
                                <a
                                    key={item}
                                    href="https://hamzazehri.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nav-link"
                                    style={{ fontSize: '1.5rem', color: 'var(--primary-glow)' }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Portfolio
                                </a>
                            )
                        }
                        const linkTarget = item === 'Home' ? '' : item.toLowerCase();
                        return isHome ? (
                            <a
                                key={item}
                                href={`#${linkTarget}`}
                                className="nav-link"
                                style={{ fontSize: '1.5rem' }}
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        ) : (
                            <Link
                                key={item}
                                to={`/#${linkTarget}`}
                                className="nav-link"
                                style={{ fontSize: '1.5rem' }}
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </Link>
                        )
                    })}
                    <a href="#contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>
                        Get In Touch
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
