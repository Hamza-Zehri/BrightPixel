import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, RefreshCw, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ---------- Limited company knowledge base ----------
// The assistant ONLY answers from this list. Anything off-topic gets a fallback.
const KNOWLEDGE = [
    {
        keywords: ['website', 'web site', 'web', 'site'],
        response: 'We build fast, modern, SEO-ready websites for businesses. 🖥️ Starting price is Rs 25,000, and a basic website usually takes 2–4 weeks. Want a quote? Tap "Request a Quote" on the page.'
    },
    {
        keywords: ['mobile', 'app', 'android', 'ios'],
        response: 'Yes! We build mobile apps for Android and iOS. 📱 Starting price is Rs 120,000. Apps include modern design, push notifications, and Play Store publishing.'
    },
    {
        keywords: ['pos', 'point of sale', 'billing', 'billing system', 'cash'],
        response: 'We build POS systems for shops, cafés, and restaurants. 💳 It covers sales, billing, product management, and daily sales reports. Prices start from Rs 85,000 for business software.'
    },
    {
        keywords: ['school', 'student', 'fee', 'result', 'admission'],
        response: 'We build complete school management systems 🏫 — admissions, students, attendance, fee records, exams, and result cards. Ideal for schools in Balochistan.'
    },
    {
        keywords: ['inventory', 'stock', 'warehouse', 'supplier'],
        response: 'Our inventory systems 📦 track stock, suppliers, and purchases with low-stock alerts and detailed reports. Great for retail, wholesale, and clothing/fabric businesses.'
    },
    {
        keywords: ['custom', 'tailor', 'special', 'from scratch', 'specific'],
        response: 'Yes, we specialise in custom software! 🛠️ We build exactly what your business needs — no templates. Price depends on scope; contact us for a custom quote.'
    },
    {
        keywords: ['service', 'what do you build', 'what do you make', 'what do you do', 'products'],
        response: 'We build: Custom Software, Websites, Mobile Apps, POS, School Systems, and Inventory Systems. 💡 We also serve restaurants, retail, gyms, clinics, schools, construction, and offices.'
    },
    {
        keywords: ['price', 'cost', 'rate', 'how much', 'charge', 'fees', 'payment'],
        response: 'Our starting prices: 💰 Website Rs 25,000 · Business Software Rs 85,000 · Mobile App Rs 120,000 · Custom Software by quote. Prices are made to suit local businesses.'
    },
    {
        keywords: ['how long', 'timeline', 'take', 'time', 'deadline', 'fast'],
        response: '⏱️ A website usually takes 2–4 weeks, while apps, POS, or school systems take about 1–3 months. We agree a clear timeline before starting the project.'
    },
    {
        keywords: ['process', 'steps', 'how it work', 'how it works', 'procedure', 'start project'],
        response: 'Our process: 1️⃣ Consult → 2️⃣ Plan → 3️⃣ Design → 4️⃣ Develop → 5️⃣ Test → 6️⃣ Deploy. Simple, transparent, and you always know what is happening.'
    },
    {
        keywords: ['support', 'maintenance', 'update', 'after launch', 'help'],
        response: 'Yes! We offer support and maintenance after launch 🛟 — plus free support during the first month on most packages. WhatsApp us any time for quick help.'
    },
    {
        keywords: ['contact', 'whatsapp', 'number', 'phone', 'call', 'reach', 'talk', 'mobile no'],
        response: 'You can reach us at: 📞 +92 335 7981318 (call/WhatsApp) or 📧 hamidzehri42@gmail.com. We reply fast, 7 days a week.'
    },
    {
        keywords: ['email', 'mail', 'gmail', 'message to'],
        response: 'Send us an email at 📧 hamidzehri42@gmail.com or use the contact form lower on this page.'
    },
    {
        keywords: ['location', 'office', 'address', 'where', 'khuzdar', 'branch', 'visit'],
        response: '📍 We are based in Khuzdar, Balochistan, Pakistan, and serve the whole country. You can also find us on Google Maps in the contact section.'
    },
    {
        keywords: ['about', 'who are you', 'company', 'mission', 'vision', 'history', 'team'],
        response: 'Bright Pixel Technologies is a software company in Khuzdar, Balochistan. 🚀 We build custom software, websites, apps, and business systems for businesses across Pakistan — built locally, supported locally.'
    },
    {
        keywords: ['why', 'choose', 'affordable', 'trust', 'good', 'different', 'quality'],
        response: 'Customers choose us because: ✅ Local understanding, ✅ Custom-built software (no copies), ✅ Direct talk with developers, ✅ Affordable local pricing, ✅ Fast support after launch.'
    },
    {
        keywords: ['gym', 'clinic', 'restaurant', 'retail', 'fabric', 'clothing', 'construction', 'office', 'business'],
        response: 'We build solutions for many industries: 🍽️ Restaurants, 🏫 Schools, 🛍️ Retail, 👕 Fabric/Clothing, 🏋️ Gyms, 🩺 Clinics, 🏗️ Construction, and 🏢 Offices.'
    },
    {
        keywords: ['hi', 'hello', 'salam', 'assalam', 'hey', 'good morning', 'good evening', 'help'],
        response: 'Hello! 👋 I can answer questions about our services, prices, process, and how to contact us. What would you like to know?'
    },
    {
        keywords: ['thank', 'thanks', 'shukriya', 'great', 'good job', 'awesome', 'nice'],
        response: 'You are most welcome! 😊 If you need anything else, just ask — or reach us on WhatsApp at +92 335 7981318.'
    },
    {
        keywords: ['bye', 'goodbye', 'see you', 'ok bye', 'exit'],
        response: 'Goodbye! 👋 Feel free to come back anytime, or email us at hamidzehri42@gmail.com.'
    }
];

const FALLBACK = "I can only answer about Bright Pixel 🤖 — our services (websites, apps, POS, school systems, inventory), prices, process, and contact info. For anything else, tap \"Request a Quote\" or WhatsApp us at +92 335 7981318 and a human will reply.";

const QUICK_REPLIES = [
    'What do you build?',
    'Website price?',
    'Do you make mobile apps?',
    'Where are you located?',
    'How can I contact you?',
    'How long does a project take?'
];

const getBotResponse = (input) => {
    const text = input.toLowerCase();
    let bestScore = 0;
    let bestReply = null;
    for (const item of KNOWLEDGE) {
        let score = 0;
        for (const keyword of item.keywords) {
            if (text.includes(keyword)) score += 1;
        }
        if (score > bestScore) {
            bestScore = score;
            bestReply = item.response;
        }
    }
    return bestScore > 0 ? bestReply : FALLBACK;
};

const ChatAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "👋 Hello! I'm the Bright Pixel AI Assistant. I can answer questions about our services, pricing, process, and contact info. What would you like to know?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const sendMessage = (text) => {
        if (!text.trim()) return;

        const userMessage = { id: Date.now(), text: text.trim(), sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setIsTyping(true);

        setTimeout(() => {
            const botMessage = { id: Date.now() + 1, text: getBotResponse(text), sender: 'bot' };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 900 + Math.random() * 600);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        sendMessage(inputValue);
        setInputValue("");
    };

    const handleQuickReply = (text) => {
        sendMessage(text);
    };

    const handleRefresh = () => {
        setIsTyping(false);
        setMessages([
            { id: 1, text: "👋 Hello! I'm the Bright Pixel AI Assistant. I can answer questions about our services, pricing, process, and contact info. What would you like to know?", sender: 'bot' }
        ]);
    };

    return (
        <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000 }}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="chat-window"
                        style={{
                            position: 'absolute',
                            bottom: '80px',
                            right: '0',
                            width: '350px',
                            height: '500px',
                            background: 'var(--panel-bg)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid var(--border-light)',
                            borderRadius: '1.5rem',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            padding: '1rem 1.5rem',
                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            color: 'white'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    background: 'rgba(255,255,255,0.2)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Bot size={18} />
                                </div>
                                <div style={{ minWidth: 0 }}>
                                    <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0, whiteSpace: 'nowrap' }}>Bright Assistant</h4>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', opacity: 0.9 }}>
                                        <span style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%' }}></span>
                                        Online
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <button
                                    onClick={handleRefresh}
                                    style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '4px', opacity: 0.8 }}
                                    title="Restart Chat"
                                >
                                    <RefreshCw size={16} />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '4px', opacity: 0.8 }}
                                >
                                    <X size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div style={{
                            flex: 1,
                            padding: '1.25rem',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem'
                        }}>
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    style={{
                                        alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                        maxWidth: '80%',
                                        padding: '0.75rem 1rem',
                                        borderRadius: '1rem',
                                        background: msg.sender === 'user' ? 'var(--primary)' : 'var(--surface-muted)',
                                        color: msg.sender === 'user' ? '#fff' : 'var(--text-main)',
                                        borderBottomRightRadius: msg.sender === 'user' ? '4px' : '1rem',
                                        borderBottomLeftRadius: msg.sender === 'bot' ? '4px' : '1rem',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5',
                                        whiteSpace: 'pre-wrap'
                                    }}
                                >
                                    {msg.text}
                                </div>
                            ))}

                            {isTyping && (
                                <div style={{
                                    alignSelf: 'flex-start',
                                    background: 'var(--surface-muted)',
                                    borderRadius: '1rem',
                                    borderBottomLeftRadius: '4px',
                                    padding: '0.8rem 1rem',
                                    display: 'flex',
                                    gap: '0.3rem'
                                }}>
                                    <span className="typing-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--text-muted)', display: 'inline-block' }}></span>
                                    <span className="typing-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--text-muted)', display: 'inline-block' }}></span>
                                    <span className="typing-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--text-muted)', display: 'inline-block' }}></span>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Replies */}
                        <div style={{
                            padding: '0 1rem 0.5rem',
                            display: 'flex',
                            gap: '0.5rem',
                            overflowX: 'auto',
                            flexShrink: 0
                        }}>
                            {QUICK_REPLIES.map((reply) => (
                                <button
                                    key={reply}
                                    onClick={() => handleQuickReply(reply)}
                                    style={{
                                        background: 'var(--surface-muted)',
                                        border: '1px solid var(--border-light)',
                                        borderRadius: '2rem',
                                        padding: '0.45rem 0.9rem',
                                        fontSize: '0.8rem',
                                        color: 'var(--text-main)',
                                        cursor: 'pointer',
                                        whiteSpace: 'nowrap',
                                        transition: 'all 0.2s ease',
                                        flexShrink: 0
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'var(--primary)';
                                        e.currentTarget.style.color = 'var(--primary-glow)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = '';
                                        e.currentTarget.style.color = '';
                                    }}
                                >
                                    {reply}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSendMessage} style={{
                            padding: '0.75rem 1rem 1rem',
                            borderTop: '1px solid var(--border-light)',
                            display: 'flex',
                            gap: '0.5rem',
                            flexShrink: 0
                        }}>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type your message..."
                                style={{
                                    flex: 1,
                                    background: 'var(--surface-muted)',
                                    border: '1px solid var(--border-light)',
                                    borderRadius: '0.5rem',
                                    padding: '0.75rem 1rem',
                                    color: 'var(--text-main)',
                                    outline: 'none',
                                    fontSize: '0.9rem'
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    background: 'var(--primary)',
                                    border: 'none',
                                    borderRadius: '0.5rem',
                                    width: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s'
                                }}
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                    border: 'none',
                    boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    cursor: 'pointer',
                    position: 'relative'
                }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X size={28} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <MessageSquare size={28} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Notification Dot */}
                {!isOpen && (
                    <span style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        width: '16px',
                        height: '16px',
                        background: '#ef4444',
                        borderRadius: '50%',
                        border: '2px solid var(--bg-dark)'
                    }}></span>
                )}
            </motion.button>
        </div>
    );
};

export default ChatAssistant;