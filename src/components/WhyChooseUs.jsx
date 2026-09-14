import React from 'react';
import { MapPin, Code, MessageSquare, Wallet, LifeBuoy } from 'lucide-react';
import Reveal from './Reveal';

const reasons = [
    {
        icon: <MapPin size={32} />,
        title: 'Local Understanding',
        desc: 'We know the challenges of doing business in Balochistan. Solutions that work here are built differently.'
    },
    {
        icon: <Code size={32} />,
        title: 'Custom Development',
        desc: 'No templates, no copy-paste. Every system is built from scratch around your specific workflow.'
    },
    {
        icon: <MessageSquare size={32} />,
        title: 'Direct Communication',
        desc: 'Talk directly to the developers building your software — in Urdu, Balochi, or English.'
    },
    {
        icon: <Wallet size={32} />,
        title: 'Affordable',
        desc: 'Pricing built for local businesses. Get enterprise-grade software without the enterprise price tag.'
    },
    {
        icon: <LifeBuoy size={32} />,
        title: 'Support',
        desc: 'On-site and remote support, quickly. We stay with you long after launch.'
    }
];

const WhyChooseUs = () => {
    return (
        <section id="why-us" className="section-pad" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Why Choose Us</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
                        The Bright Pixel <span className="gradient-text-primary">Difference</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Five reasons local businesses choose to work with us.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 270px), 1fr))',
                    gap: 'clamp(1.25rem, 2.5vw, 1.5rem)'
                }}>
                    {reasons.map((reason, index) => (
                        <Reveal key={reason.title} delay={index * 0.05}>
                            <div
                                className="glass"
                                style={{
                                    padding: '2rem',
                                    borderRadius: '1.25rem',
                                    transition: 'all 0.3s ease',
                                    height: '100%'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    marginBottom: '1.25rem',
                                    borderRadius: '1rem',
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    color: 'var(--primary-glow)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {reason.icon}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem' }}>{reason.title}</h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.98rem' }}>{reason.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;