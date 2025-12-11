import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { servicesData } from '../data/servicesData';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--bg-card)',
            padding: '6rem 0 2rem 0',
            position: 'relative',
            overflow: 'hidden',
            marginTop: '4rem'
        }}>
            {/* Watermark */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '15vw',
                fontWeight: '900',
                color: 'rgba(255,255,255,0.02)',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                zIndex: 0
            }}>
                BRIGHT PIXEL
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>

                    {/* Brand */}
                    <div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <img src={logo} alt="Bright Pixel" style={{ height: '50px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
                        </div>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                            We elevate your business through our skills and the latest technology.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    transition: 'all 0.3s ease'
                                }} className="social-link">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.5rem', color: 'white' }}>All Services</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {servicesData.map((service) => (
                                <li key={service.id}>
                                    <Link
                                        to={`/service/${service.id}`}
                                        style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }}
                                        className="footer-link"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.5rem', color: 'white' }}>Get In Touch</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--text-muted)' }}>
                                <Phone size={18} color="var(--primary)" />
                                <span>+92 335 7981318</span>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--text-muted)' }}>
                                <Mail size={18} color="var(--primary)" />
                                <span>hamidzehri42@gmail.com</span>
                            </li>
                            <li style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: 'var(--text-muted)' }}>
                                <MapPin size={18} color="var(--primary)" />
                                <span>Khuzdar, Balochistan</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div style={{
                    borderTop: '1px solid var(--border-light)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem'
                }}>
                    <p>&copy; {new Date().getFullYear()} Bright Pixel Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
