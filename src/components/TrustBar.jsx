import React from 'react';
import { MapPin, Code, Headphones, Map } from 'lucide-react';

const trustItems = [
    { icon: <MapPin size={16} />, label: 'Khuzdar Based' },
    { icon: <Code size={16} />, label: 'Custom Software' },
    { icon: <Headphones size={16} />, label: 'Local Support' },
    { icon: <Map size={16} />, label: 'Pakistan' },
];

const TrustBar = () => {
    return (
        <div className="trust-bar" style={{ padding: '1.25rem 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem 4rem' }}>
                {trustItems.map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '1rem', fontWeight: '500' }}>
                        <span style={{ color: 'var(--primary-glow)', display: 'flex' }}>{item.icon}</span>
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrustBar;