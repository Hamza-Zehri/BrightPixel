import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData.jsx';
import { motion } from 'framer-motion';

const Services = () => {
    const scrollRef = useRef(null);

    return (
        <section id="services" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Our Expertise</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
                        Solutions That <span className="gradient-text-primary">Scale</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Swipe to explore our comprehensive range of services designed to elevate your business.
                    </p>
                </div>

                {/* Slider Container */}
                <motion.div
                    className="services-slider"
                    ref={scrollRef}
                    style={{
                        display: 'flex',
                        gap: '2rem',
                        overflowX: 'auto',
                        paddingBottom: '2rem',
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                        scrollSnapType: 'x mandatory',
                        scrollbarWidth: 'none', /* Firefox */
                        msOverflowStyle: 'none',  /* IE 10+ */
                        cursor: 'grab'
                    }}
                    whileTap={{ cursor: 'grabbing' }}
                >
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            className="glass"
                            style={{
                                minWidth: '350px',
                                maxWidth: '350px',
                                padding: '2.5rem',
                                borderRadius: '1.5rem',
                                scrollSnapAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                border: '1px solid var(--border-light)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            whileHover={{ y: -10, borderColor: 'var(--primary)' }}
                            transition={{ duration: 0.3 }}
                        >
                            <div>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    borderRadius: '1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary)',
                                    marginBottom: '2rem'
                                }}>
                                    {service.icon}
                                </div>

                                <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1rem' }}>{service.title}</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>{service.shortDesc}</p>
                            </div>

                            <Link
                                to={`/service/${service.id}`}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--primary-glow)',
                                    fontWeight: '600',
                                    marginTop: 'auto'
                                }}
                            >
                                Learn More <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
