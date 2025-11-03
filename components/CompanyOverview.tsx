import React, { useState, useEffect, useRef } from 'react';
import { LinkedInIcon, TwitterIcon } from './icons';

const CompanyOverview: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    
    return (
        <section id="about" className="py-20 bg-white" ref={sectionRef}>
            <div className="container mx-auto px-6">
                <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold text-slate-800">About Our Company</h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-3xl mx-auto">
                        NST Group of Companies is a diversified conglomerate dedicated to providing exceptional services across various sectors. Our commitment to excellence and innovation drives us to be a trusted partner for all your business needs, from property development to global logistics.
                    </p>
                </div>

                <div className={`flex flex-col md:flex-row items-center justify-center gap-12 bg-slate-100 p-8 md:p-12 rounded-lg shadow-lg transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className="flex-shrink-0">
                        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEhrBdnl1MK7dJXJVEe9CUMm2LsPm3R5jpekoA-bzDvNyuP8SO9xtY7nt8ThEpB5UDaGgzDQ4feept2b1p4Hxe6AifJGcsQfGNuY-p9lMFP7sTugOs_Haf9zLD_mtw5iwA3_q41WSyx-agIRv4B_LEaq3qZImE2uH0yiBHHfTqeaPqACijTy_SynGA1F5JYT" alt="Hardhik Chowdary" className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-white transition-transform duration-300 hover:scale-105"/>
                    </div>
                    <div className="text-center md:text-left">
                        <h3 className="text-3xl font-bold text-slate-900">Hardhik Chowdary</h3>
                        <p className="text-blue-600 font-semibold text-lg mt-1">COO</p>
                        
                        <div className="mt-4 text-slate-600 space-y-1">
                            <p><strong>Phone:</strong> <a href="tel:+919087650001" className="hover:text-blue-600 transition-colors">+91 9087650001</a></p>
                            <p><strong>Email:</strong> <a href="mailto:nstglobalsolar@gmail.com" className="hover:text-blue-600 transition-colors">nstglobalsolar@gmail.com</a></p>
                        </div>
                        
                        <p className="mt-4 max-w-xl text-slate-700 italic">
                            "As a dedicated COO, I focus on building lasting relationships and ensuring client satisfaction is at the heart of everything we do at NST Group. Our success is measured by the success of our partners."
                        </p>

                        <div className="mt-6 flex justify-center md:justify-start space-x-4">
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyOverview;