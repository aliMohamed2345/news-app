import { useState, useRef } from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
const ResponsiveSearchArea = () => {
  const SearchAreaRef = useRef<HTMLDivElement>(null);
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const router = useRouter();
  const handleClose = () => {
    setIsOpenSearch(false);
    setInputValue("");
  };
  const handleSearch = () => {
    if (!setIsOpenSearch && inputValue.trim() === "") return;
    else if (inputValue.trim()) {
      router.push(`/search?q=${inputValue}`);
      setInputValue("");
      setIsOpenSearch(false);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setInputValue("");
      setIsOpenSearch(false);
    }
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <>
      <div
        ref={SearchAreaRef}
        onClick={() => setIsOpenSearch((prev) => !prev)}
        className="font-bold relative sm:hidden flex items-center justify-center h-10 w-10 rounded-full border-primary bg-background backdrop-blur-md border cursor-pointer 
        transition-all duration-300 hover:bg-primary hover:text-primary-foreground active:scale-90"
      >
        <IoSearch size={20} />
      </div>

      <div
        className={`absolute left-0 z-50 w-full px-4 pb-5 pt-8 rounded-b-md transition-all duration-300 ease-in-out origin-top flex items-center ${
          isOpenSearch
            ? "top-[64px] opacity-100 scale-y-100 pointer-events-auto"
            : "top-[40px] opacity-0 scale-y-0 pointer-events-none"
        } bg-secondary border-t border-primary text-primary-foreground `}
      >
        <div className="relative flex items-center w-full h-full">
          <button
            onClick={handleClose}
            className="-top-6 -right-2.5 absolute z-10 text-lg cursor-pointer text-primary hover:bg-accent transition-all rounded-full p-0.5"
          >
            <IoClose />
          </button>
          <button
            onClick={() => setInputValue("")}
            className={`absolute top-1/2 right-4 -translate-y-1/2 z-10 cursor-pointer ${
              inputValue === "" && `hidden`
            }`}
          >
            <IoClose />
          </button>
          <button
            onClick={() => handleSearch()}
            className="flex items-center justify-center h-[42px] w-15 p-3 text-primary border border-primary transition-all hover:bg-primary hover:text-white rounded-l-full cursor-pointer"
          >
            <IoSearch size={40} />
          </button>
          <input
            onKeyDown={(e) => handleKeyDown(e)}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-r-full border border-primary bg-background text-foreground outline-none "
          />
        </div>
      </div>
    </>
  );
};

export default ResponsiveSearchArea;
