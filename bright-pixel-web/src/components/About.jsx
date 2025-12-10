import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{ padding: '8rem 0', background: 'linear-gradient(to bottom, var(--bg-dark), var(--bg-card))' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-tag">About Us</span>
                        <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                            We Are The Architects of <br />
                            <span className="gradient-text">Digital Transformation</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                            Since 2025, Bright Pixel Technologies has been at the forefront of innovation. We don't just build software; we engineer growth engines for forward-thinking businesses.
                        </p>

                        <div style={{ display: 'grid', gap: '1rem' }}>
                            {[
                                'Award-winning development team',
                                'AI-first approach to problem solving',
                                'Global delivery capabilities',
                                'Agile methodology & rapid prototyping'
                            ].map((item, index) => (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <CheckCircle2 color="var(--accent)" size={20} />
                                    <span style={{ fontSize: '1.1rem' }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="btn btn-primary" style={{ marginTop: '3rem' }}>
                            More About Our Journey
                        </button>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        style={{ position: 'relative' }}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{
                            position: 'relative',
                            borderRadius: '2rem',
                            overflow: 'hidden',
                            border: '1px solid var(--border-light)',
                            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)'
                        }}>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                                alt="Team working"
                                style={{ width: '100%', display: 'block' }}
                            />

                            {/* Overlay Stats */}
                            <div className="glass" style={{
                                position: 'absolute',
                                bottom: '2rem',
                                left: '2rem',
                                right: '2rem',
                                padding: '2rem',
                                borderRadius: '1.5rem',
                                display: 'flex',
                                justifyContent: 'space-around'
                            }}>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 className="gradient-text-primary" style={{ fontSize: '2.5rem', fontWeight: '800' }}>1+</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Years</p>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 className="gradient-text-primary" style={{ fontSize: '2.5rem', fontWeight: '800' }}>20</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Projects</p>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 className="gradient-text-primary" style={{ fontSize: '2.5rem', fontWeight: '800' }}>98%</h3>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Retention</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Glow */}
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                            borderRadius: '2rem',
                            filter: 'blur(30px)',
                            opacity: 0.2,
                            zIndex: -1
                        }}></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
