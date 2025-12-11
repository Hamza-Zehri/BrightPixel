import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';

const projects = [
    {
        title: 'Gold Khuzdar Gym Dashboard',
        category: 'Web Application',
        image: image2
    },
    {
        title: 'Al-Farooq Residential School Website',
        category: 'Website',
        image: image3
    },
    {
        title: 'Cgpa Calculator',
        category: 'Mobile App',
        image: image4
    },
    {
        title: 'Al-Farooq School Management System',
        category: 'Software',
        image: image1
    }
];

const Projects = () => {
    return (
        <section id="projects" style={{ padding: '8rem 0', position: 'relative' }}>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Our Work</span>
                    <h2 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>
                        Featured <span className="gradient-text-primary">Projects</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Explore some of our recent work delivering high-impact digital solutions.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '2rem'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="project-card"
                            style={{
                                position: 'relative',
                                borderRadius: '1.5rem',
                                overflow: 'hidden',
                                aspectRatio: '16/10',
                                cursor: 'pointer'
                            }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                            />

                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                padding: '2rem',
                                opacity: 0,
                                transition: 'opacity 0.3s ease'
                            }}
                                className="project-overlay"
                                onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                            >
                                <span style={{ color: 'var(--primary-glow)', fontSize: '0.9rem', fontWeight: '600' }}>{project.category}</span>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>{project.title}</h3>
                                    <div style={{
                                        width: '40px',
                                        height: '40px',
                                        background: 'white',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <ArrowUpRight size={20} color="black" />
                                    </div>
                                </div>
                            </div>

                            {/* Always visible title for mobile/default state if needed, but hover is cleaner for "Pro" look. 
                  Let's keep the hover effect but ensure the overlay is visible on touch for mobile in a real app. 
                  For now, we'll use a permanent gradient at the bottom for readability.
              */}
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                padding: '2rem',
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                                pointerEvents: 'none'
                            }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'white' }}>{project.title}</h3>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{project.category}</span>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
