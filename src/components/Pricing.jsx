import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const plans = [
    {
        title: 'Website',
        price: '25,000',
        suffix: 'Rs',
        period: 'starting',
        desc: 'Perfect for businesses that need a professional online presence.',
        highlighted: false,
        features: ['Up to 5 pages', 'Mobile responsive', 'Contact & WhatsApp button', 'SEO basics', '1 month free support']
    },
    {
        title: 'Business Software',
        price: '85,000',
        suffix: 'Rs',
        period: 'starting',
        desc: 'POS, inventory, billing, and reports to run your business.',
        highlighted: true,
        features: ['Custom dashboard', 'Sales & inventory', 'Daily reports', 'Staff access control', 'Training included']
    },
    {
        title: 'Mobile App',
        price: '120,000',
        suffix: 'Rs',
        period: 'starting',
        desc: 'iOS & Android apps for your customers and staff.',
        highlighted: false,
        features: ['Android & iOS', 'Modern UI/UX', 'Push notifications', 'API integration', 'Play Store publishing']
    },
    {
        title: 'Custom Software',
        price: 'Custom',
        suffix: '',
        period: 'quote',
        desc: 'Large or fully custom systems built around your unique workflow.',
        highlighted: false,
        features: ['Full requirement analysis', 'Dedicated development', 'Scalable architecture', 'Ongoing support', 'Long-term partnership']
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="section-pad">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Pricing</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
                        Simple, Honest <span className="gradient-text-primary">Pricing</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Transparent prices for local businesses. Every project is priced after understanding your needs.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                    gap: 'clamp(1.25rem, 2.5vw, 1.5rem)'
                }}>
                    {plans.map((plan, index) => (
                        <Reveal key={plan.title} delay={index * 0.05}>
                            <div
                                className="glass"
                                style={{
                                    padding: '2.5rem',
                                    borderRadius: '1.5rem',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    border: plan.highlighted ? '1px solid var(--primary)' : '1px solid var(--border-light)',
                                    boxShadow: plan.highlighted ? '0 0 40px rgba(59,130,246,0.15)' : 'none'
                                }}
                            >
                                {plan.highlighted && (
                                    <span style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        right: '1rem',
                                        padding: '0.3rem 0.8rem',
                                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                        color: 'white',
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        borderRadius: '2rem'
                                    }}>
                                        Most Popular
                                    </span>
                                )}

                                <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem' }}>{plan.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{plan.desc}</p>

                                <div style={{ marginBottom: '1.5rem' }}>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{plan.period} </span>
                                    <span style={{ fontSize: '3rem', fontWeight: '800' }}>{plan.price}</span>
                                    {plan.suffix && <span style={{ fontSize: '1.25rem', color: 'var(--text-muted)' }}> {plan.suffix}</span>}
                                </div>

                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.75rem',
                                    flex: 1
                                }}>
                                    {plan.features.map((feature, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                                            <Check size={16} color="var(--primary-glow)" style={{ flexShrink: 0 }} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="#contact"
                                    className={`btn ${plan.highlighted ? 'btn-glow' : 'btn-outline'}`}
                                    style={{ textDecoration: 'none', marginTop: '2rem', justifyContent: 'center' }}
                                >
                                    Get Started <ArrowRight size={18} />
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.2}>
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                            Have something different in mind?
                        </p>
                        <a href="#contact" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                            Request Custom Quote
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Pricing;