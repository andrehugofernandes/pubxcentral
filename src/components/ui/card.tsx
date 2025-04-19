import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  highlighted?: boolean;
}

function Card({
  children,
  className = '',
  highlighted = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md p-6',
        highlighted && 'ring-2 ring-primary-500 shadow-lg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { Card }; 