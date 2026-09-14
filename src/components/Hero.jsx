import React from 'react';
import { MessageCircle } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="hero-wrapper">
            {/* Background Elements */}
            <div className="hero-bg-glow"></div>
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                width: '300px',
                height: '300px',
                background: 'linear-gradient(135deg, var(--secondary), transparent)',
                filter: 'blur(100px)',
                opacity: 0.2,
                borderRadius: '50%'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '15%',
                left: '5%',
                width: '250px',
                height: '250px',
                background: 'linear-gradient(135deg, var(--accent), transparent)',
                filter: 'blur(100px)',
                opacity: 0.15,
                borderRadius: '50%'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>

                    <div style={{ animationDelay: '0.1s' }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            background: 'var(--chip-bg)',
                            border: '1px solid var(--chip-border)',
                            borderRadius: '100px',
                            fontSize: '0.9rem',
                            color: 'var(--primary-glow)',
                            marginBottom: '2rem',
                            backdropFilter: 'blur(10px)'
                        }}>
                            ✨ Based in Khuzdar · Serving All of Pakistan
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        animationDelay: '0.2s'
                    }}>
                        Software Solutions Built for <br />
                        <span className="gradient-text-primary">Businesses in Balochistan &amp; Pakistan</span>
                    </h1>

                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-muted)',
                        marginBottom: '3rem',
                        maxWidth: '640px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        animationDelay: '0.3s'
                    }}>
                        Custom software, websites, mobile apps, and business systems — designed locally,
                        delivered worldwide, and built around your business.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        animationDelay: '0.4s',
                        flexWrap: 'wrap'
                    }}>
                        <a href="#contact" className="btn btn-glow" style={{ textDecoration: 'none' }}>
                            Request a Quote
                        </a>
                        <a
                            href="https://wa.me/923357981318"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                            style={{ textDecoration: 'none' }}
                        >
                            <MessageCircle size={20} /> WhatsApp Us
                        </a>
                    </div>

                </div>

                {/* Abstract Floating Elements */}
                <div className="animate-float" style={{
                    position: 'absolute',
                    top: '10%',
                    left: '0%',
                    width: '100px',
                    height: '100px',
                    background: 'linear-gradient(45deg, var(--bg-card), rgba(59, 130, 246, 0.2))',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '20px',
                    border: '1px solid var(--chip-border)',
                    transform: 'rotate(-15deg)',
                    zIndex: -1
                }}></div>

                <div className="animate-float" style={{
                    position: 'absolute',
                    bottom: '-10%',
                    right: '5%',
                    width: '150px',
                    height: '150px',
                    background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.2), var(--bg-card))',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '50%',
                    border: '1px solid var(--chip-border)',
                    animationDelay: '1s',
                    zIndex: -1
                }}></div>
            </div>
        </section>
    );
};

export default Hero;