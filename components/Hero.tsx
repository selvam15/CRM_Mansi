import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section id="home" className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
            <div className="absolute inset-0 bg-slate-900 bg-opacity-60"></div>
            <div className={`relative z-10 text-center text-white transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider">
                    NST Group of Companies
                </h1>
                <p className="mt-4 text-xl md:text-2xl font-light">
                    NST Fold Card - Your Multi-Business Solution Partner
                </p>
                <a href="#contact" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                    Contact Us
                </a>
            </div>
        </section>
    );
};

export default Hero;