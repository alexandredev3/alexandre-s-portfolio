import { useEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { isServer } from '../utils/srr';

interface PortalProps {
  children: ReactNode;
}

export function Portal({ children }: PortalProps) {
  const [element] = useState(() => {
    if (isServer) return null;

    const existingRoot = document.getElementById('react-portal');

    if (existingRoot) {
      return existingRoot;
    }

    const root = document.createElement('div');

    root.setAttribute('id', 'react-portal')

    document.body.appendChild(root);

    return root;
  });
  
  useEffect(() => {
    return () => {
      if (element) {
        element.parentNode?.removeChild(element);
      }
    }
  }, [element]);

  if (!element) return null;
  
  return createPortal(children, element);
}
