'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ServiceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: ServiceCard[] = [
  {
    id: 1,
    title: 'Comfortable',
    description: 'Facebook Ads, Google Ads, LinkedIn Ads.',
    icon: '✓',
  },
  {
    id: 2,
    title: 'Luxury',
    description: 'Instagram Ads, Videos, Designs, Photos.',
    icon: '✓',
  },
  {
    id: 3,
    title: 'Modern',
    description: 'Email Marketing, Social Media, Content.',
    icon: '✓',
  },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="py-16" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-3xl font-bold"
            style={{ color: 'var(--text-main)' }}
          >
            Our Services
          </h2>
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="px-4 py-2 rounded-full border transition-all hover:opacity-70"
              style={{
                borderColor: 'var(--border-soft)',
                color: 'var(--text-main)',
              }}
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 rounded-full border transition-all hover:opacity-70"
              style={{
                borderColor: 'var(--border-soft)',
                color: 'var(--text-main)',
              }}
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="min-w-full md:min-w-1/3 px-4"
              >
                <div
                  className="p-6 rounded-lg text-white h-full"
                  style={{ backgroundColor: 'var(--primary)' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-lg">{service.title}</h3>
                  </div>
                  <p className="text-sm opacity-90">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
