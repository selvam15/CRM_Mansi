// Fix: Import React types to ensure consistency across files and resolve type conflicts.
import type React from 'react';

export interface BusinessSegment {
  id: number;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  contacts: { phone: string; email: string }[];
  description?: string;
}
