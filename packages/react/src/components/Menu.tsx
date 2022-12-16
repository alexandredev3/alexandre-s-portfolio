import { type HTMLAttributes, useState } from "react";
import { List, X } from "phosphor-react";

import { Portal } from './Portal';

type MenuProps = HTMLAttributes<HTMLDivElement>;

export function Menu({ children, ...rest }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div {...rest}>
      <button
        aria-expanded={isOpen}
        aria-controls="menu-panel"
        aria-label="Menu"
        onClick={handleToggleMenu}
      >
        {isOpen ? (
          <X className="text-gray-200" focusable="false" size={28} />
        ) : (
          <List className="text-gray-200" focusable="false" size={28} />
        )}
      </button>

      {isOpen && (
        <Portal>
          <div role="navigation" id="menu-panel" className="menu-panel" aria-hidden={false}>
            {children}
          </div>
        </Portal>
      )}
    </div>
  );
}

