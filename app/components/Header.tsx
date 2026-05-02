import React from 'react';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

interface SocialLink {
  href: string;
  icon: string;
  label: string;
  invert?: boolean;
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/jessicawang31',
    icon: '/github.svg',
    label: 'GitHub',
    invert: true,
  },
  {
    href: 'https://www.linkedin.com/in/jessicawang31/',
    icon: '/linkedin.svg',
    label: 'LinkedIn',
  },
  {
    href: 'https://drive.google.com/file/d/1bCsABq0UWRstQDg4ZoJrBbD_IHuppKtp/view?usp=sharing',
    icon: '/doc.png',
    label: 'Resume',
  },
];

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="flex items-start justify-between mb-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white">
            Jessica Wang
          </h1>
          <ThemeToggle />
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-400 mb-4 max-w-2xl">
          Software Engineer
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          Hi! I&apos;m currently working on a Microsoft AI capstone project where I design monetization experiences for AI tools, exploring how to balance user value, trust, and sustainable business models.
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          Alongside this, I&apos;m a Lead Teaching Assistant for Data Structures &amp; Algorithms at the University of Washington, where I help make complex concepts more intuitive and accessible.
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          I&apos;m pursuing a B.S. in Informatics with a minor in Business, and I&apos;m especially interested in building thoughtful, user-centered systems at the intersection of technology, product, and monetization.
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          In my free time, I enjoy cafe hopping and working out—feel free to reach out!
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link, index) => (
            <React.Fragment key={link.href}>
              {index > 0 && (
                <span className="text-gray-300 dark:text-gray-700">
                  ·
                </span>
              )}
              <a
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
              >
                <Image
                  className={`w-5 h-5 ${link.invert ? 'dark:invert' : ''}`}
                  src={link.icon}
                  alt={link.label}
                  width={20}
                  height={20}
                />
                {link.label}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </header>
  );
}
