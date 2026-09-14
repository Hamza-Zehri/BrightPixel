import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, RefreshCw, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "👋 Hello! I’m Bright Pixel AI Assistant — how can I help you today?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newUserMessage = {
            id: Date.now(),
            text: inputValue,
            sender: 'user'
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputValue("");

        // Simulate bot response
        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                text: "Thank you for your message! Our team will get back to you shortly.",
                sender: 'bot'
            };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);
    };

    const handleRefresh = () => {
        setMessages([
            { id: 1, text: "👋 Hello! I’m Bright Solutions AI Assistant — how can I help you today?", sender: 'bot' }
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
                        style={{
                            position: 'absolute',
                            bottom: '80px',
                            right: '0',
                            width: '350px',
                            height: '500px',
                            background: 'rgba(15, 23, 42, 0.95)',
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
                                <div>
                                    <h4 style={{ fontSize: '0.95rem', fontWeight: '700', margin: 0 }}>Bright Assistant</h4>
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
                            padding: '1.5rem',
                            overflowY: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem'
                        }}>
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    style={{
                                        alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                        maxWidth: '80%',
                                        padding: '0.8rem 1rem',
                                        borderRadius: '1rem',
                                        background: msg.sender === 'user' ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                                        color: 'white',
                                        borderBottomRightRadius: msg.sender === 'user' ? '4px' : '1rem',
                                        borderBottomLeftRadius: msg.sender === 'bot' ? '4px' : '1rem',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5'
                                    }}
                                >
                                    {msg.text}
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSendMessage} style={{
                            padding: '1rem',
                            borderTop: '1px solid var(--border-light)',
                            display: 'flex',
                            gap: '0.5rem'
                        }}>
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type your message..."
                                style={{
                                    flex: 1,
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--border-light)',
                                    borderRadius: '0.5rem',
                                    padding: '0.75rem 1rem',
                                    color: 'white',
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
