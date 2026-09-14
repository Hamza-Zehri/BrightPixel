import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const LoadingScreen = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            background: '#000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
        }}>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.img
                    src={logo}
                    alt="Bright Pixel Logo"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        width: '150px',
                        maxWidth: '80%',
                        height: 'auto',
                        marginBottom: '1rem',
                        filter: 'brightness(0) invert(1)',
                        zIndex: 2
                    }}
                />
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    style={{
                        fontSize: '4rem',
                        fontWeight: '900',
                        color: 'white',
                        letterSpacing: '-0.05em',
                        position: 'relative',
                        zIndex: 2,
                        lineHeight: 1
                    }}
                >
                    BRIGHT <span style={{ color: '#3b82f6' }}>PIXEL</span>
                </motion.h1>

                {/* Glow Effect */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '120%',
                        height: '120%',
                        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                        filter: 'blur(40px)',
                        zIndex: 1
                    }}
                />

                {/* Loading Bar */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                    style={{
                        height: '2px',
                        background: '#3b82f6',
                        marginTop: '1rem',
                        boxShadow: '0 0 10px #3b82f6'
                    }}
                />
            </div>
        </div>
    );
};

export default LoadingScreen;
