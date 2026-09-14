import React from 'react';
import {
    Utensils,
    GraduationCap,
    ShoppingBag,
    Shirt,
    Dumbbell,
    Stethoscope,
    HardHat,
    Building2
} from 'lucide-react';
import Reveal from './Reveal';

const industries = [
    { icon: <Utensils size={28} />, label: 'Restaurants', desc: 'POS, ordering, and billing', color: '#f43f5e' },
    { icon: <GraduationCap size={28} />, label: 'Schools', desc: 'Student & fee management', color: '#10b981' },
    { icon: <ShoppingBag size={28} />, label: 'Retail', desc: 'Sales & inventory tracking', color: '#f59e0b' },
    { icon: <Shirt size={28} />, label: 'Fabric/Clothing', desc: 'Stock, sales & tailoring', color: '#8b5cf6' },
    { icon: <Dumbbell size={28} />, label: 'Gyms', desc: 'Memberships & billing', color: '#3b82f6' },
    { icon: <Stethoscope size={28} />, label: 'Clinics', desc: 'Patients & appointments', color: '#06b6d4' },
    { icon: <HardHat size={28} />, label: 'Construction', desc: 'Projects & material tracking', color: '#fb923c' },
    { icon: <Building2 size={28} />, label: 'Offices', desc: 'Workflow & HR systems', color: '#a3e635' }
];

const BusinessSolutions = () => {
    return (
        <section id="solutions" className="section-pad" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Business Solutions</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
                        Built for Your <span className="gradient-text-primary">Industry</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        We understand local businesses — here's what we specialize in.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))',
                    gap: 'clamp(1.25rem, 2.5vw, 1.5rem)'
                }}>
                    {industries.map((item, index) => (
                        <Reveal key={item.label} delay={index * 0.05}>
                            <div
                                className="glass"
                                style={{
                                    padding: '2rem',
                                    borderRadius: '1.25rem',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    height: '100%'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    margin: '0 auto 1.25rem auto',
                                    borderRadius: '1rem',
                                    background: 'var(--surface-muted)',
                                    color: item.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {item.icon}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>{item.label}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BusinessSolutions;