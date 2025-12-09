import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Alex Rony',
        role: 'CEO, TechFlow',
        text: 'Bright Pixel has been instrumental in optimizing our customer support. Their efficient BPO services and dedicated team have far exceeded our expectations.'
    },
    {
        name: 'Jennifer Lynn',
        role: 'Director, Innovate Corp',
        text: 'The software is exceptionally intuitive, scalable, and reliable. It handles complex tasks effortlessly and is easy for all users to navigate. A top-notch solution!'
    },
    {
        name: 'Michael James',
        role: 'Founder, AI Start',
        text: 'Their AI automation platform is a game-changer. It streamlines processes with smart algorithms, saving us significant time. Highly recommend this innovative solution!'
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" style={{ padding: '8rem 0', position: 'relative' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Testimonials</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: '700' }}>
                        Trusted by <span className="gradient-text-primary">Industry Leaders</span>
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {testimonials.map((item, index) => (
                        <div key={index} className="glass" style={{
                            padding: '2.5rem',
                            borderRadius: '1.5rem',
                            position: 'relative',
                            transition: 'transform 0.3s ease'
                        }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <Quote size={40} color="var(--primary)" style={{ opacity: 0.3, marginBottom: '1.5rem' }} />

                            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.5rem' }}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                                ))}
                            </div>

                            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                                "{item.text}"
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-card)', border: '1px solid var(--border-light)' }}></div>
                                <div>
                                    <h4 style={{ fontWeight: '700', fontSize: '1.1rem' }}>{item.name}</h4>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--primary-glow)' }}>{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
