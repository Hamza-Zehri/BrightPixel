import React from 'react';
import { Code, Bot, Globe, Smartphone, Palette, Headphones, CreditCard, GraduationCap, Boxes } from 'lucide-react';

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
    },
    {
        id: 'pos-systems',
        title: 'POS Systems',
        icon: <CreditCard size={40} />,
        shortDesc: 'Fast, reliable point-of-sale software for retail and restaurants.',
        fullDesc: 'Manage sales, orders, billing, and daily cash flow with an easy-to-use POS system built for the local market. Works offline, supports printers, and tracks everything in real time.',
        features: ['Sales & Billing', 'Product & Category Management', 'Daily Sales Reports', 'Restaurant & Retail Modes'],
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80'
    },
    {
        id: 'school-systems',
        title: 'School Systems',
        icon: <GraduationCap size={40} />,
        shortDesc: 'Complete school management systems for admission to results.',
        fullDesc: 'Digitalize your school with a complete management system covering admissions, students, staff, attendance, fee records, exams, and result cards in one place.',
        features: ['Student Records', 'Attendance Management', 'Fee Collection', 'Result Cards & Reports'],
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80'
    },
    {
        id: 'inventory-systems',
        title: 'Inventory Systems',
        icon: <Boxes size={40} />,
        shortDesc: 'Track stock, suppliers, and purchases with full inventory control.',
        fullDesc: 'Never lose track of stock again. Our inventory systems help you manage products, purchases, suppliers, and expiration with automatic low-stock alerts and detailed reports.',
        features: ['Stock Tracking', 'Supplier Management', 'Low-Stock Alerts', 'Purchase & Sales Reports'],
        image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80'
    }
];
