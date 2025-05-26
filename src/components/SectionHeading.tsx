import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  children?: ReactNode;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = 'center', 
  children 
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`mb-12 max-w-3xl ${alignmentClasses[align]}`}>
      <h2 className="text-3xl md:text-4xl font-bold relative">
        {title}
        <span className="absolute bottom-0 left-0 w-16 h-1 bg-primary-600 dark:bg-primary-500 mt-2"></span>
      </h2>
      {subtitle && (
        <p className="mt-6 text-dark-500 dark:text-dark-300 text-lg">{subtitle}</p>
      )}
      {children}
    </div>
  );
};

export default SectionHeading;