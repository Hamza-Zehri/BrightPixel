import React from 'react';

const Team = () => {
    return (
        <section id="team" style={{ padding: '8rem 0', background: 'var(--bg-dark)' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Our Team</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
                        Meet The <span className="gradient-text-primary">Experts</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Our skilled professionals are dedicated to delivering high-quality web solutions.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    marginTop: '4rem'
                }}>
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="glass" style={{ padding: '2rem', borderRadius: '1.5rem', textAlign: 'center' }}>
                            <div style={{
                                width: '120px',
                                height: '120px',
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-light)',
                                borderRadius: '50%',
                                margin: '0 auto 1.5rem auto'
                            }}></div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Team Member {item}</h3>
                            <p style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>Software Engineer</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
