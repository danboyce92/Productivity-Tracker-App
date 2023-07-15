import { useState, useEffect, useRef, FC } from 'react';
import Panel from './Panel';

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  value: Option | undefined;
  onChange: (option: Option) => void;
}

const Dropdown: FC<DropdownProps> = ({ options, value, onChange, }) => {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => {
          handleOptionClick(option);
        }}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className=" relative">
      <Panel
        className={`flex justify-between items-center cursor-pointer px-8`}
        onClick={handleToggle}
      >
        {value?.label || 'Select...'}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
};

export default Dropdown;