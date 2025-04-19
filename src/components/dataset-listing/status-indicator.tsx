import React from 'react';
import { Badge } from '@/components/ui/badge';

interface StatusIndicatorProps {
  status: 'active' | 'expired';
}

function StatusIndicator({ status }: StatusIndicatorProps) {
  if (status === 'active') {
    return (
      <Badge variant="active" className="flex items-center">
        <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
        Ativo
      </Badge>
    );
  }
  
  if (status === 'expired') {
    return (
      <Badge variant="expired" className="flex items-center">
        <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
        Expirado
      </Badge>
    );
  }
  
  return null;
}

export { StatusIndicator }; 