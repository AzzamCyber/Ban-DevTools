import React from 'react';
import { useBanDevTools, UseBanDevToolsOptions } from './useBanDevTools';

export interface BanDevToolsProps extends UseBanDevToolsOptions {
  /**
   * This component renders nothing by default.
   */
  children?: React.ReactNode;
}

/**
 * A wrapper component that activates anti-devtools measures when mounted.
 * Perfect for dropping into Next.js layout.tsx or _app.tsx.
 */
export const BanDevTools: React.FC<BanDevToolsProps> = ({ children = null, ...options }) => {
  useBanDevTools(options);
  
  return React.createElement(React.Fragment, null, children);
};
