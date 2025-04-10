import React from 'react';
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
    return (
        <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="relative overflow-hidden bg-cover bg-center rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                    style={{ backgroundImage: `url(${testimonial.avatar})` }}
                >
                    {/* Optional overlay for better text readability */}
                    <div className="bg-black bg-opacity-50 p-4 h-full flex flex-col justify-center">
                        <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                        <p className="text-sm text-gray-300">{testimonial.role}</p>
                        <p className="mt-2 text-white text-center">{`"${testimonial.message}"`}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
