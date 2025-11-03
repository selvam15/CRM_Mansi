import React, { useState, useEffect, useRef } from 'react';
import { LinkedInIcon, TwitterIcon } from './icons';

const Footer: React.FC = () => {
    const footerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <footer className="bg-slate-800 text-slate-300 py-12" ref={footerRef}>
            <div className={`container mx-auto px-6 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">NST Group of Companies</h3>
                    <p>Plot no 2, Door no 1, Balaji Nagar Extension Main Road, Adambakkam, Chennai-600088</p>
                    <p className="mt-2">
                        <a href="tel:+919087650001" className="hover:text-blue-400 transition-colors">+91 9087650001</a> | <a href="mailto:nstglobalsolar@gmail.com" className="hover:text-blue-400 transition-colors">nstglobalsolar@gmail.com</a>
                    </p>
                </div>
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="#" className="hover:text-white transition-all duration-300 transform hover:scale-110"><LinkedInIcon /></a>
                    <a href="#" className="hover:text-white transition-all duration-300 transform hover:scale-110"><TwitterIcon /></a>
                </div>
                <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} NST Group of Companies. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;