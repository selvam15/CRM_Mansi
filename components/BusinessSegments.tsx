import React, { useState, useEffect, useRef } from 'react';
import { BuildingIcon, TruckIcon, SunIcon, GlobeIcon, ChevronDownIcon } from './icons';
import type { BusinessSegment } from '../types';

const businessData: BusinessSegment[] = [
    {
        id: 1,
        name: 'NST Property Developers',
        icon: BuildingIcon,
        contacts: [
            { phone: '9087650001', email: 'nstpackersnmovers@gmail.com' }
        ],
    },
    {
        id: 2,
        name: 'NST Packers & Movers',
        icon: TruckIcon,
        contacts: [
            { phone: '9087650005', email: 'nstpackersnmovers@gmail.com' },
            { phone: '9087650009', email: 'nstglobalsolar@gmail.com' }
        ],
    },
    {
        id: 3,
        name: 'NST Global Solar & Wind Energy Pvt Ltd',
        icon: SunIcon,
        contacts: [],
        description: 'Pioneering renewable energy solutions for a sustainable future. We specialize in the development and management of solar and wind energy projects.'
    },
    {
        id: 4,
        name: 'Global Elementum Enterprises LLP',
        icon: GlobeIcon,
        contacts: [
            { phone: '9087650007', email: 'md@globalelementum.com' },
            { phone: '9087650003', email: 'md@globalelementum.com' }
        ],
    },
];

interface FoldCardProps {
    segment: BusinessSegment;
    isOpen: boolean;
    onClick: () => void;
    isVisible: boolean;
    delay: number;
}

const FoldCard: React.FC<FoldCardProps> = ({ segment, isOpen, onClick, isVisible, delay }) => {
    const { name, icon: Icon, contacts, description } = segment;
    return (
        <div 
            className={`border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <button
                onClick={onClick}
                className={`w-full flex justify-between items-center p-6 text-left transition-colors duration-300 ${isOpen ? 'bg-blue-50' : 'bg-white'}`}
            >
                <div className="flex items-center space-x-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                    <h4 className="text-xl font-semibold text-slate-800">{name}</h4>
                </div>
                <ChevronDownIcon className={`w-6 h-6 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-auto' : 'grid-rows-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="bg-slate-50 p-6 border-t border-slate-200">
                        {description && <p className="text-slate-600 mb-4">{description}</p>}
                        {contacts.length > 0 && contacts.map((contact, index) => (
                            <div key={index} className="mb-2 text-slate-700">
                                <p><strong>Phone:</strong> <a href={`tel:+91${contact.phone}`} className="hover:text-blue-600">{contact.phone}</a></p>
                                <p><strong>Email:</strong> <a href={`mailto:${contact.email}`} className="hover:text-blue-600">{contact.email}</a></p>
                            </div>
                        ))}
                        {contacts.length === 0 && !description && <p className="text-slate-500">More information coming soon.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

const BusinessSegments: React.FC = () => {
    const [openCardId, setOpenCardId] = useState<number | null>(1);
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

    const handleCardClick = (id: number) => {
        setOpenCardId(openCardId === id ? null : id);
    };

    return (
        <section id="services" className="py-20 bg-slate-100" ref={sectionRef}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-800">Our Business Segments</h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
                        Explore our diverse portfolio of businesses, each committed to delivering quality and value.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto space-y-4">
                    {businessData.map((segment, index) => (
                        <FoldCard
                            key={segment.id}
                            segment={segment}
                            isOpen={openCardId === segment.id}
                            onClick={() => handleCardClick(segment.id)}
                            isVisible={isVisible}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BusinessSegments;