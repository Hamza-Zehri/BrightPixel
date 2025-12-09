import React from 'react';
import { Code, Bot, Globe, Smartphone, Palette, Headphones } from 'lucide-react';

export const servicesData = [
    {
        id: 'custom-software',
        title: 'Software Development',
        icon: <Code size={40} />,
        shortDesc: 'Crafting custom solutions and web applications to ensuring seamless integration.',
        fullDesc: 'At Bright Solution, our software development services encompass a wide spectrum, from crafting custom solutions and web applications to ensuring seamless integration and API development. With rigorous testing and ongoing support, we guarantee innovative, reliable, and optimized software solutions tailored to your business needs. Our skilled professionals are dedicated to delivering high-quality web solutions that not only meet your requirements but also help you stay competitive in the digital landscape.',
        features: [
            'Custom Software Solutions',
            'Web Application Development',
            'Enterprise Software Development',
            'Cloud-Based Applications',
            'Software Integration',
            'API Development and Integration',
            'Quality Assurance and Testing',
            'Maintenance and Support'
        ],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80'
    },
    {
        id: 'ai-automation',
        title: 'AI Automation',
        icon: <Bot size={40} />,
        shortDesc: 'Intelligent chatbots and workflow automation to streamline operations.',
        fullDesc: 'Leverage the power of Artificial Intelligence to automate repetitive tasks, enhance customer interactions, and gain valuable insights from your data. We specialize in building intelligent agents and predictive models.',
        features: ['Custom Chatbots', 'Process Automation', 'Predictive Analytics', 'Natural Language Processing'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80'
    },
    {
        id: 'web-development',
        title: 'Web Development',
        icon: <Globe size={40} />,
        shortDesc: 'High-performance, SEO-optimized websites that convert visitors into customers.',
        fullDesc: 'Your website is your digital storefront. We create stunning, fast, and responsive websites that not only look great but also perform exceptionally well in search engines and convert visitors into loyal customers.',
        features: ['E-commerce Solutions', 'Corporate Websites', 'Progressive Web Apps (PWA)', 'CMS Development'],
        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=80'
    },
    {
        id: 'mobile-apps',
        title: 'Mobile Apps',
        icon: <Smartphone size={40} />,
        shortDesc: 'Native and cross-platform mobile applications for iOS and Android.',
        fullDesc: 'Reach your customers wherever they are with a custom mobile application. We develop intuitive and feature-rich apps for both iOS and Android platforms, ensuring a seamless user experience.',
        features: ['iOS Development', 'Android Development', 'Cross-Platform (React Native/Flutter)', 'App Store Optimization'],
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80'
    },
    {
        id: 'brand-design',
        title: 'Brand Design',
        icon: <Palette size={40} />,
        shortDesc: 'Strategic branding and visual identity design.',
        fullDesc: 'Stand out from the competition with a unique and memorable brand identity. Our design team works closely with you to create a visual language that resonates with your target audience and communicates your brand values.',
        features: ['Logo Design', 'Brand Guidelines', 'UI/UX Design', 'Marketing Collateral'],
        image: 'https://images.unsplash.com/photo-1626785774573-4b799312c95d?auto=format&fit=crop&w=1000&q=80'
    },
    {
        id: 'bpo-services',
        title: 'BPO Services',
        icon: <Headphones size={40} />,
        shortDesc: '24/7 Customer support and back-office operations.',
        fullDesc: 'Focus on your core business while we handle your customer support and back-office operations. Our dedicated BPO team ensures high-quality service delivery and customer satisfaction.',
        features: ['Customer Support', 'Technical Support', 'Data Entry', 'Virtual Assistants'],
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1000&q=80'
    }
];
