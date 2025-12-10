import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: 'What is the Software Development process?',
        answer: 'The Software Development process involves several stages including planning, design, development, testing, and deployment, followed by ongoing maintenance and support.'
    },
    {
        question: 'How long does it take to develop a website?',
        answer: 'The timeline varies depending on the complexity of the project. A basic website typically takes 2-4 weeks, while more complex custom applications can take 3-6 months.'
    },
    {
        question: 'Do you provide support after the website launch?',
        answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your website remains secure, up-to-date, and performs optimally.'
    },
    {
        question: 'Can you redesign my existing website?',
        answer: 'Absolutely. We specialize in website redesigns that improve aesthetics, functionality, and user experience while maintaining your brand identity.'
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="faq" style={{ padding: '8rem 0' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <span className="section-tag">Common Questions</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
                        Frequently Asked <span className="gradient-text-primary">Questions</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)' }}>
                        If you have any questions regarding our Software Development services, please refer to the FAQs below.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="glass"
                            style={{
                                borderRadius: '1rem',
                                overflow: 'hidden',
                                border: '1px solid var(--border-light)'
                            }}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                style={{
                                    width: '100%',
                                    padding: '1.5rem',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    background: 'none',
                                    border: 'none',
                                    color: 'white',
                                    cursor: 'pointer',
                                    textAlign: 'left'
                                }}
                            >
                                <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>{faq.question}</span>
                                {activeIndex === index ? <Minus size={20} color="var(--primary)" /> : <Plus size={20} color="var(--text-muted)" />}
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
