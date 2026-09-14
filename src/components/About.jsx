import React from 'react';
import { Target, Eye, Users } from 'lucide-react';
import Reveal from './Reveal';

const team = [
    { name: 'Hamza Zehri', role: 'Founder & Software Engineer', initials: 'HZ' },
    { name: 'Bright Pixel Team', role: 'Development & Design', initials: 'BP' },
    { name: 'Bright Pixel Team', role: 'Support & Delivery', initials: 'BD' },
    { name: 'Bright Pixel Team', role: 'Business Solutions', initials: 'BS' }
];

const About = () => {
    return (
        <section id="about" className="section-pad">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">About Company</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
                        Who <span className="gradient-text-primary">We Are</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Bright Pixel Technologies is a software company based in Khuzdar, Balochistan.
                        We build custom software, websites, and business systems for companies across Pakistan —
                        solving real problems with technology that actually fits the local market.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                    gap: '2rem',
                    marginBottom: '6rem'
                }}>
                    <Reveal>
                        <div className="glass" style={{ padding: '2.5rem', borderRadius: '1.5rem', height: '100%' }}>
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '1rem',
                                background: 'rgba(59, 130, 246, 0.1)',
                                color: 'var(--primary-glow)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                <Target size={28} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Our Mission</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                                To make modern software accessible to businesses in Balochistan and beyond —
                                delivering reliable, affordable systems that improve daily operations and help businesses grow.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="glass" style={{ padding: '2.5rem', borderRadius: '1.5rem', height: '100%' }}>
                            <div style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '1rem',
                                background: 'rgba(139, 92, 246, 0.1)',
                                color: 'var(--secondary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem'
                            }}>
                                <Eye size={28} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Our Vision</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                                A Balochistan where every business — from a small shop to a large school — runs on
                                software built locally, supported locally, and priced fairly.
                            </p>
                        </div>
                    </Reveal>
                </div>

                {/* Team */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                        Meet the <span className="gradient-text-primary">Team</span>
                    </h3>
                    <p style={{ color: 'var(--text-muted)' }}>The people behind every project.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))',
                    gap: '2rem'
                }}>
                    {team.map((member, index) => (
                        <Reveal key={index} delay={index * 0.05}>
                            <div className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', textAlign: 'center' }}>
                                <div style={{
                                    width: '90px',
                                    height: '90px',
                                    margin: '0 auto 1.5rem auto',
                                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: '700',
                                    fontSize: '1.75rem'
                                }}>
                                    {member.initials}
                                </div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>{member.name}</h4>
                                <p style={{ color: 'var(--primary-glow)', fontSize: '0.9rem' }}>{member.role}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.2}>
                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <a href="#contact" className="btn btn-glow" style={{ textDecoration: 'none' }}>
                            <Users size={18} /> Work With Us
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default About;