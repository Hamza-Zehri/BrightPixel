import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MessageCircle, Phone, Mail, MapPin, Send, Map } from 'lucide-react';
import Reveal from './Reveal';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        // EmailJS Configuration
        const SERVICE_ID = 'service_i7yr951';
        const TEMPLATE_ID = 'template_cbaieqk';
        const PUBLIC_KEY = 'V1uyJIGHg2PHC4lsf';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(() => {
                setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
                e.target.reset();
            }, (error) => {
                console.error('EmailJS Error:', error);
                setStatus({ type: 'error', message: 'Failed to send message. Please try again later or contact us directly.' });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const contactItems = [
        {
            icon: <MessageCircle size={24} />,
            label: 'WhatsApp',
            value: '+92 335 7981318',
            href: 'https://wa.me/923357981318',
            bg: 'rgba(34, 197, 94, 0.1)',
            color: '#22c55e'
        },
        {
            icon: <Phone size={24} />,
            label: 'Call Us 7/24',
            value: '+92 335 7981318',
            href: 'tel:+923357981318',
            bg: 'rgba(59, 130, 246, 0.1)',
            color: 'var(--primary)'
        },
        {
            icon: <Mail size={24} />,
            label: 'Email Us',
            value: 'hamidzehri42@gmail.com',
            href: 'mailto:hamidzehri42@gmail.com',
            bg: 'rgba(139, 92, 246, 0.1)',
            color: 'var(--secondary)'
        },
        {
            icon: <MapPin size={24} />,
            label: 'Office',
            value: 'Khuzdar, Balochistan',
            href: 'https://maps.google.com/?q=Khuzdar,Balochistan,Pakistan',
            bg: 'rgba(6, 182, 212, 0.1)',
            color: 'var(--accent)'
        }
    ];

    return (
        <section id="contact" className="section-pad" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="section-tag">Contact</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
                        Get in <span className="gradient-text-primary">Touch</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Request a quote, ask a question, or just say hello — we reply fast.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 'clamp(2rem, 4vw, 4rem)' }}>

                    {/* Contact Info */}
                    <Reveal>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1.5rem' }}>Contact Information</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.7' }}>
                            Reach us however is easiest for you. We're available for calls, WhatsApp,
                            and on-site meetings across Balochistan.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {contactItems.map((item, index) => (
                                <Reveal key={item.label} delay={index * 0.05}>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="glass"
                                        style={{
                                            padding: '1.25rem',
                                            borderRadius: '1rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '1.25rem',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.borderColor = item.color}
                                        onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
                                    >
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            borderRadius: '12px',
                                            background: item.bg,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: item.color,
                                            flexShrink: 0
                                        }}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>{item.label}</p>
                                            <h4 style={{ fontSize: '1.1rem', fontWeight: '700' }}>{item.value}</h4>
                                        </div>
                                    </a>
                                </Reveal>
                            ))}

                            {/* Google Maps */}
                            <Reveal delay={0.25}>
                                <div style={{
                                    borderRadius: '1.25rem',
                                    overflow: 'hidden',
                                    border: '1px solid var(--border-light)',
                                    position: 'relative',
                                    marginTop: '0.5rem'
                                }}>
                                    <iframe
                                        title="Bright Pixel Office - Khuzdar"
                                        src="https://maps.google.com/maps?q=Khuzdar%2C%20Balochistan%2C%20Pakistan&z=11&output=embed"
                                        width="100%"
                                        height="240"
                                        style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg)' }}
                                        loading="lazy"
                                    ></iframe>
                                    <div style={{
                                        position: 'absolute',
                                        top: '0.75rem',
                                        left: '0.75rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.4rem 0.9rem',
                                        background: 'rgba(2, 6, 23, 0.85)',
                                        borderRadius: '2rem',
                                        fontSize: '0.85rem',
                                        color: 'var(--text-main)',
                                        backdropFilter: 'blur(8px)'
                                    }}>
                                        <Map size={14} color="var(--primary-glow)" /> Khuzdar, Balochistan
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </Reveal>

                    {/* Contact Form */}
                    <Reveal delay={0.1}>
                        <div className="glass" style={{ padding: '2.5rem', borderRadius: '1.5rem', border: '1px solid var(--border-light)' }}>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem' }}>Request a Quote</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Tell us about your project and we'll get back within 24 hours.</p>

                            <form ref={form} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Your Name*</label>
                                    <input name="user_name" type="text" required placeholder="Your Name" style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '0.75rem',
                                        background: 'var(--bg-dark)',
                                        border: '1px solid var(--border-light)',
                                        color: 'var(--text-main)',
                                        outline: 'none'
                                    }} />
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Your Email*</label>
                                    <input name="user_email" type="email" required placeholder="Your Email" style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '0.75rem',
                                        background: 'var(--bg-dark)',
                                        border: '1px solid var(--border-light)',
                                        color: 'var(--text-main)',
                                        outline: 'none'
                                    }} />
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Your Phone</label>
                                    <input name="user_phone" type="tel" placeholder="Your Phone" style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '0.75rem',
                                        background: 'var(--bg-dark)',
                                        border: '1px solid var(--border-light)',
                                        color: 'var(--text-main)',
                                        outline: 'none'
                                    }} />
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>What do you need?*</label>
                                    <select name="service_interest" style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '0.75rem',
                                        background: 'var(--bg-dark)',
                                        border: '1px solid var(--border-light)',
                                        color: 'var(--text-main)',
                                        outline: 'none'
                                    }}>
                                        <option value="">Select a service</option>
                                        <option value="website">Website</option>
                                        <option value="business-software">Business Software</option>
                                        <option value="mobile-app">Mobile App</option>
                                        <option value="pos">POS</option>
                                        <option value="school-system">School System</option>
                                        <option value="inventory">Inventory System</option>
                                        <option value="custom">Custom Software</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Project Details*</label>
                                    <textarea name="message" required rows="4" placeholder="Describe your project..." style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '0.75rem',
                                        background: 'var(--bg-dark)',
                                        border: '1px solid var(--border-light)',
                                        color: 'var(--text-main)',
                                        outline: 'none',
                                        resize: 'none'
                                    }}></textarea>
                                </div>

                                <button disabled={loading} type="submit" className="btn btn-glow" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', opacity: loading ? 0.7 : 1 }}>
                                    {loading ? 'Sending...' : 'Send Message'} <Send size={18} />
                                </button>
                                {status.message && (
                                    <p style={{
                                        marginTop: '0.5rem',
                                        padding: '0.75rem',
                                        borderRadius: '0.5rem',
                                        background: status.type === 'success' ? 'rgba(74, 222, 128, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                        color: status.type === 'success' ? '#4ade80' : '#ef4444',
                                        textAlign: 'center'
                                    }}>
                                        {status.message}
                                    </p>
                                )}
                            </form>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    );
};

export default Contact;