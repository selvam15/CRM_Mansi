import React, { useState, useEffect, useRef } from 'react';
import { SpinnerIcon, CheckCircleIcon, ExclamationCircleIcon } from './icons';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<FormStatus>('idle');
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (status === 'error') {
            setStatus('idle');
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('error');
            return;
        }
        setStatus('submitting');
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        }, 1500);
    };
    
    const StatusMessage = () => {
        switch (status) {
            case 'success':
                return (
                    <div className="mt-4 flex items-center justify-center text-green-600 bg-green-100 p-3 rounded-md">
                        <CheckCircleIcon className="w-5 h-5 mr-2" />
                        <p>Your message has been sent successfully!</p>
                    </div>
                );
            case 'error':
                return (
                    <div className="mt-4 flex items-center justify-center text-red-600 bg-red-100 p-3 rounded-md">
                        <ExclamationCircleIcon className="w-5 h-5 mr-2" />
                        <p>Please fill out all fields before submitting.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <section id="contact" className="py-20 bg-white" ref={sectionRef}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-800">Get In Touch</h2>
                    <p className="text-lg text-slate-600 mt-4">We'd love to hear from you. Contact us for any inquiries.</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className={`lg:w-1/2 text-slate-700 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <h3 className="text-2xl font-semibold mb-4 text-slate-800">Contact Information</h3>
                        <div className="space-y-4 p-6 bg-slate-50 rounded-lg">
                            <div>
                                <h4 className="font-bold">Address:</h4>
                                <p>Plot no 2, Door no 1, Balaji Nagar Extension Main Road, Adambakkam, Chennai-600088</p>
                            </div>
                            <div>
                                <h4 className="font-bold">General Inquiries:</h4>
                                <p>Phone: <a href="tel:+919087650009" className="text-blue-600 hover:underline">+91 9087650009</a></p>
                                <p>Email: <a href="mailto:nstglobalsolar@gmail.com" className="text-blue-600 hover:underline">nstglobalsolar@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className={`lg:w-1/2 transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        <form onSubmit={handleSubmit} className="bg-slate-100 p-8 rounded-lg shadow-lg">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-slate-700 font-medium mb-2">Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-slate-700 font-medium mb-2">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-slate-700 font-medium mb-2">Message</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow" required></textarea>
                            </div>
                            <div className="flex items-center justify-end">
                                <button type="submit" disabled={status === 'submitting'} className="w-36 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center">
                                    {status === 'submitting' ? <SpinnerIcon /> : 'Submit'}
                                </button>
                            </div>
                            <StatusMessage />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
