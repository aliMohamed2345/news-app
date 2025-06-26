"use client";
import { IoSearch, IoClose } from "react-icons/io5";
import React, { useRef, useState } from "react";

const SearchArea = () => {
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOpen = () => {
    setIsOpenSearch(true);
    inputRef.current?.focus();
  };
  const handleSearch = () => {
    if (!setIsOpenSearch && inputValue.trim() === "") return;
    console.log(`Searching for: ${inputValue}`);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpenSearch(false);
    setInputValue("");
  };
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key && e.key === "Escape") {
      setIsOpenSearch(false);
      setInputValue("");
    }
    if (e.key && e.key === "Enter") handleSearch();
  };

  return (
    <div
      onClick={!isOpenSearch ? handleOpen : undefined}
      className={`relative hidden sm:flex items-center justify-center h-10 rounded-full border-primary bg-background backdrop-blur-md border cursor-pointer transition-all duration-300 ${
        !isOpenSearch
          ? "hover:bg-primary hover:text-primary-foreground w-10"
          : "w-50"
      }`}
      style={{
        transition: "width 0.3s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <input
        placeholder="Search..."
        onKeyDown={(e) => handleInputKeyDown(e)}
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={`overflow-hidden border-none bg-transparent outline-none transition-all ml-16 ${
          isOpenSearch ? "w-52 opacity-100" : "w-0 opacity-0"
        }`}
        disabled={!isOpenSearch}
      />
      <IoSearch
        size={20}
        className={`absolute transition-all duration-300 ${
          isOpenSearch
            ? "top-1/2 left-2 -translate-y-1/2 scale-100"
            : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-110"
        }`}
        onClick={handleSearch}
      />
      <IoClose
        size={20}
        className={`absolute transition-all outline-none border-none duration-200 z-10 ${
          isOpenSearch
            ? "top-1/2 right-2 -translate-y-1/2 opacity-100 scale-100 cursor-pointer"
            : "opacity-0 pointer-events-none scale-90"
        }`}
        onClick={handleClose}
        tabIndex={-1}
      />
    </div>
  );
};

export default SearchArea;
