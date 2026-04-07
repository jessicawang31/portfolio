import React from 'react';
import Image from 'next/image';
import type { ProjectSection } from './components/ProjectGrid';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  siteUrl: string;
  tags?: string[];
  year?: string;
  highlights?: string[];
  sections?: ProjectSection[];
}

const Card = ({ title, description, imageSrc, siteUrl, tags, year, highlights, sections }: CardProps) => {
  return (
    <div className="group border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-300 dark:hover:border-gray-700 transition-colors duration-200 flex flex-col">
      <div className="p-8 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white">
            {title}
          </h2>
          {year && (
            <span className="text-xs font-medium text-gray-500 dark:text-gray-500 ml-4 mt-1 flex-shrink-0">
              {year}
            </span>
          )}
        </div>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {description}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {highlights && highlights.length > 0 && (
          <ul className="mb-6 space-y-2 flex-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                <span className="mr-2 text-gray-400 dark:text-gray-600 flex-shrink-0">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {sections && sections.length > 0 && (
          <div className="mb-6 space-y-5 flex-1">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-2">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.bullets.map((bullet, index) => (
                    <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="mr-2 text-gray-400 dark:text-gray-600 flex-shrink-0">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-end justify-between gap-4 mt-auto">
          <div className="flex-shrink-0 w-16 h-16 border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 overflow-hidden flex items-center justify-center">
            <Image
              className="w-full h-full object-contain"
              src={imageSrc}
              alt={title}
              width={64}
              height={64}
              priority={true}
            />
          </div>
          <a 
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200"
          >
            Visit site
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
