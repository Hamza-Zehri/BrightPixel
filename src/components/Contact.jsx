import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '8rem 0', background: 'var(--bg-dark)' }}>
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="section-tag">Get In Touch</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--text-main)' }}>
                        Contact <span className="gradient-text-primary">Us</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        We'd love to hear from you.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Contact Information</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                            For any inquiries or assistance, feel free to reach out to us. We're here to help with your questions, comments, or concerns. You can contact us through the form below or by phone. Our team will get back to you as soon as possible.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary)'
                                }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Call Us 7/24</p>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)' }}>+92 335 7981318</h4>
                                </div>
                            </div>

                            <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    background: 'rgba(139, 92, 246, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--secondary)'
                                }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Make a Quote</p>
                                    <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)' }}>hamidzehri42@gmail.com</h4>
                                </div>
                            </div>

                            <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '12px',
                                    background: 'rgba(6, 182, 212, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent)'
                                }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Location</p>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)' }}>Chamrock hostel, Khuzdar</h4>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass"
                        style={{ padding: '3rem', borderRadius: '2rem', border: '1px solid var(--border-light)' }}
                    >
                        <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-main)' }}>We’d Love to Hear from You</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Send us a message and we'll respond as soon as possible.</p>

                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-main)' }}>Your Name*</label>
                                <input type="text" placeholder="Your Name" style={{
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
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-main)' }}>Your Email*</label>
                                <input type="email" placeholder="Your Email" style={{
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
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-main)' }}>Your Phone</label>
                                <input type="tel" placeholder="Your Phone" style={{
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
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-main)' }}>Write a Message*</label>
                                <textarea rows="4" placeholder="Write a Message" style={{
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

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
