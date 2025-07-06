import { useState, useRef, useEffect } from "react";
interface DropdownMenuProps {
  title: string; // The header text for the dropdown button
  options: string[]; // List of dropdown menu items
  onSelectionChange: (value: string) => void; // Callback to notify parent of selection
}

const DropdownMenu = ({
  title,
  options,
  onSelectionChange,
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>(title);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectValue = (item: string) => {
    setSelectedValue(item);
    onSelectionChange(item); // Notify parent of the new selection
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block text-center bg-secondary transition-all rounded-md w-full border-2 border-primary"
      ref={dropdownRef}
    >
      <button
        type="button"
        className={`inline-flex justify-center px-4 py-2 text-sm font-medium rounded-md hover:opacity-80 hover:scale-105 transition-all shadow-sm w-full cursor-pointer`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selectedValue}
      </button>

      <div
        className={`absolute right-0 mt-2 bg-secondary rounded-md shadow-lg overflow-y-auto w-full transition-transform ease-in-out z-3 h-40 transform ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="py-1 text-center">
          {options.map((option, i) => (
            <li key={i}>
              <button
                type="button"
                className="block w-full px-4 py-2 text-sm hover:bg-muted-foreground transition-all cursor-pointer font-bold text-center"
                onClick={() => selectValue(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
