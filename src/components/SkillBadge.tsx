import { ReactNode } from 'react';

interface SkillBadgeProps {
  icon?: ReactNode;
  name: string;
  className?: string;
}

const SkillBadge = ({ icon, name, className = '' }: SkillBadgeProps) => {
  return (
    <div 
      className={`flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-800 shadow-sm rounded-full border border-gray-200 dark:border-dark-700 ${className}`}
    >
      {icon && <span className="text-primary-600 dark:text-primary-400">{icon}</span>}
      <span className="font-medium">{name}</span>
    </div>
  );
};

export default SkillBadge;