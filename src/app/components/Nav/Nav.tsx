"use client";
// import SearchArea from "@/app/Components/Nav/SearchArea";
// import ResponsiveSearchArea from "@/app/Components/Nav/ResponsiveSearchArea";
import { IoIosArrowUp } from "react-icons/io";
import Theme from "./Theme";
import SideMenu from "./SideMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { newsCategories } from "@/app/utils/data";
import { useState, useRef, useEffect } from "react";
import { FaHome, FaRegStar } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
const Nav = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const path = usePathname();
  const [isCategoryListOpen, setIsCategoryListOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(e.target as Node))
        setIsCategoryListOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <header className=" shadow-md bg-secondary fixed w-full z-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <div className="flex items-center gap-3 ">
              <SideMenu />
              <Link href="/" className="text-xl sm:text-2xl font-bold">
                <div className="flex items-center gap-1">
                  <span className="bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-white p-2 rounded-md w-8 h-8 flex items-center justify-center ">
                    N
                  </span>
                  <span className="bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent  ">
                    NewsHub
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* <div className="hidden md:block "><SearchArea /></div> */}
          <div className="hidden md:block ">
            <div className="flex items-center gap-4 font-bold">
              <Link
                className={`${
                  path.includes(`/`) &&
                  `bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-white`
                } p-2 font-bold rounded-md hover:bg-background transition-all flex items-center gap-2`}
                href="/"
              >
                <FaHome />
                Home
              </Link>
              <Link
                className={`${
                  path.includes(`/trending `) &&
                  `bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-white`
                } p-2 font-bold rounded-md hover:bg-background transition-all flex items-center gap-2`}
                href="/trending"
              >
                <IoMdTrendingUp />
                Trending
              </Link>
              <Link
                className={`${
                  path.includes("/bookmark") &&
                  `bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-white`
                } p-2 font-bold rounded-md hover:bg-background transition-all flex items-center gap-2`}
                href="/bookmark"
              >
                <FaRegStar />
                BookMarks
              </Link>
              <div
                ref={listRef}
                onClick={() => setIsCategoryListOpen((prev) => !prev)}
                className={`${
                  path === `/category` &&
                  `bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-white`
                } p-2 font-bold rounded-md hover:bg-background hover:text-background-foreground transition-all relative flex gap-2 items-center cursor-pointer`}
              >
                Category{" "}
                <IoIosArrowUp
                  className={`transition-all ${
                    isCategoryListOpen ? `rotate-180` : `rotate-0`
                  }`}
                />
                <div
                  className={`absolute top-8 -left-4 w-[200px] text-center z-10 bg-secondary rounded-lg transition-all p-2 ${
                    isCategoryListOpen
                      ? `opacity-100 scale-100 pointer-events-auto`
                      : `opacity-0 scale-90 pointer-events-none`
                  }`}
                >
                  <div className="flex flex-col gap-1">
                    {newsCategories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/category/${category.name}`}
                        className={`p-2 font-bold rounded-md hover:bg-background hover:text-background-foreground transition-all ${
                          path.includes(`/category/${category.name}`) &&
                          `bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-white`
                        }`}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="gap-3 cursor-pointer flex items-center ">
            {/* <ResponsiveSearchArea /> */}
            <Theme />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
