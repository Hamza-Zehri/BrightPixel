import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

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

            <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>

                    <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1.5rem',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '100px',
                            fontSize: '0.9rem',
                            color: 'var(--primary-glow)',
                            marginBottom: '2rem',
                            backdropFilter: 'blur(10px)'
                        }}>
                            ✨ Redefining Digital Excellence
                        </span>
                    </div>

                    <h1 className="animate-fade-in" style={{
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        animationDelay: '0.2s'
                    }}>
                        We Build The <br />
                        <span className="gradient-text-primary">Digital Future</span>
                    </h1>

                    <p className="animate-fade-in" style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-muted)',
                        marginBottom: '3rem',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        animationDelay: '0.3s'
                    }}>
                        Bright Pixel Technologies transforms businesses with cutting-edge software, AI integration, and premium design solutions.
                    </p>

                    <div className="animate-fade-in" style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        animationDelay: '0.4s',
                        flexWrap: 'wrap'
                    }}>
                        <a href="tel:+923357981318" className="btn btn-glow" style={{ textDecoration: 'none' }}>
                            Call <ArrowRight size={20} />
                        </a>
                        <a href="#contact" className="btn btn-outline" style={{ textDecoration: 'none' }}>
                            Get In Touch Now
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
                    border: '1px solid rgba(255,255,255,0.1)',
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
                    border: '1px solid rgba(255,255,255,0.1)',
                    animationDelay: '1s',
                    zIndex: -1
                }}></div>
            </div>
        </section>
    );
};

export default Hero;
