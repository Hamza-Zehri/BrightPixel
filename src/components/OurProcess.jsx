import React from 'react';
import { Search, ClipboardList, PenTool, Code, Bug, Rocket } from 'lucide-react';
import Reveal from './Reveal';

const steps = [
    { icon: <Search size={26} />, title: 'Consult', desc: 'We discuss your business and understand what you need.' },
    { icon: <ClipboardList size={26} />, title: 'Plan', desc: 'Scope, timeline, and budget — agreed before we start.' },
    { icon: <PenTool size={26} />, title: 'Design', desc: 'UI/UX design that your team will actually enjoy using.' },
    { icon: <Code size={26} />, title: 'Develop', desc: 'Clean, reliable code built and tested as we go.' },
    { icon: <Bug size={26} />, title: 'Test', desc: 'Every feature is tested against real-world scenarios.' },
    { icon: <Rocket size={26} />, title: 'Deploy', desc: 'Launched, trained, and supported after go-live.' }
];

const OurProcess = () => {
    return (
        <section id="process" className="section-pad">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Our Process</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
                        From Idea to <span className="gradient-text-primary">Launch</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        A simple, transparent process. You always know what's happening and what's next.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 170px), 1fr))',
                    gap: 'clamp(1.25rem, 2.5vw, 1.5rem)'
                }}>
                    {steps.map((step, index) => (
                        <Reveal key={step.title} delay={index * 0.05}>
                            <div className="glass" style={{ padding: '2rem', borderRadius: '1.25rem', textAlign: 'center', height: '100%', position: 'relative' }}>
                                <div style={{
                                    width: '44px',
                                    height: '44px',
                                    margin: '0 auto 1rem auto',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: '700'
                                }}>
                                    {index + 1}
                                </div>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    margin: '0 auto 1rem auto',
                                    borderRadius: '0.5rem',
                                    background: 'var(--surface-muted)',
                                    color: 'var(--primary-glow)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {step.icon}
                                </div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem' }}>{step.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>{step.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurProcess;