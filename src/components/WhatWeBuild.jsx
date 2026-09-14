import React from 'react';
import { Code, Globe, Smartphone, CreditCard, GraduationCap, Boxes, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';

const whatWeBuild = [
    {
        title: 'Custom Software',
        desc: 'Tailor-made software designed around your exact business processes.',
        icon: <Code size={32} />,
        color: 'var(--primary)',
        bg: 'rgba(59, 130, 246, 0.1)',
        id: 'custom-software'
    },
    {
        title: 'Websites',
        desc: 'Fast, modern, and SEO-ready websites that turn visitors into customers.',
        icon: <Globe size={32} />,
        color: 'var(--accent)',
        bg: 'rgba(6, 182, 212, 0.1)',
        id: 'web-development'
    },
    {
        title: 'Mobile Apps',
        desc: 'iOS and Android apps your customers will love to use.',
        icon: <Smartphone size={32} />,
        color: 'var(--secondary)',
        bg: 'rgba(139, 92, 246, 0.1)',
        id: 'mobile-apps'
    },
    {
        title: 'POS',
        desc: 'Fast billing and easy sales tracking for shops, cafés, and restaurants.',
        icon: <CreditCard size={32} />,
        color: '#f59e0b',
        bg: 'rgba(245, 158, 11, 0.1)',
        id: 'pos-systems'
    },
    {
        title: 'School Systems',
        desc: 'Admissions, attendance, fees, and results — all in one system.',
        icon: <GraduationCap size={32} />,
        color: '#10b981',
        bg: 'rgba(16, 185, 129, 0.1)',
        id: 'school-systems'
    },
    {
        title: 'Inventory Systems',
        desc: 'Track stock, suppliers, and purchases with low-stock alerts.',
        icon: <Boxes size={32} />,
        color: '#f43f5e',
        bg: 'rgba(244, 63, 94, 0.1)',
        id: 'inventory-systems'
    }
];

const WhatWeBuild = () => {
    return (
        <section id="services" className="section-pad">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">What We Build</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
                        Software That <span className="gradient-text-primary">Solves Real Problems</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        From websites to complete business systems — we build the software your business actually needs.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
                    gap: 'clamp(1.25rem, 2.5vw, 2rem)'
                }}>
                    {whatWeBuild.map((item, index) => (
                        <Reveal key={item.id} delay={index * 0.05}>
                            <Link
                                to={`/service/${item.id}`}
                                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                            >
                                <div
                                    className="glass"
                                    style={{
                                        padding: '2.5rem',
                                        borderRadius: '1.5rem',
                                        transition: 'all 0.3s ease',
                                        height: '100%'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.borderColor = item.color;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.borderColor = '';
                                    }}
                                >
                                    <div style={{
                                        width: '64px',
                                        height: '64px',
                                        background: item.bg,
                                        color: item.color,
                                        borderRadius: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '1.5rem'
                                    }}>
                                        {item.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>{item.desc}</p>
                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-glow)', fontWeight: '600' }}>
                                        Learn More <ArrowRight size={18} />
                                    </span>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeBuild;