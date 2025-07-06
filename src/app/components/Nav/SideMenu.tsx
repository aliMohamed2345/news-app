"use client";
import { useState } from "react";
import { PiListBold } from "react-icons/pi";
import { IoArrowBackSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";
import { newsCategories } from "@/app/utils/data";
import { FaHome,FaRegStar  } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isCategoryListOpen, setIsCategoryListOpen] = useState<boolean>(false);
  const path = usePathname();

  const closeSideMenu = () => {
    setIsCategoryListOpen(false);
    setIsOpen(false);
  };
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="p-1 rounded-full transition-all ease-in-out hover:bg-primary font-bold sm:hidden opacity-80 hover:opacity-100 hover:text-primary-foreground cursor-pointer"
      >
        <PiListBold size={25} />
      </button>

      <div
        className={`h-full fixed ${
          isOpen ? `left-0` : `left-[-500px]`
        } min-w-[250px] lg:min-w-[300px] z-10 top-0 transition-all bg-secondary flex-col shadow-lg flex justify-start gap-6`}
      >
        <div className="flex content-start gap-3 items-center my-5 ml-4">
          <button
            onClick={closeSideMenu}
            aria-label="Close menu"
            className="hover:bg-primary hover:text-primary-foreground cursor-pointer hover:opacity-100 rounded-full transition-all p-1"
          >
            <IoArrowBackSharp size={25} />
          </button>

          <div className="text-center">
            <Link href="/" className="text-2xl font-bold">
              <div className="flex items-center gap-1">
                <span className="bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-white p-2 rounded-md w-8 h-8 flex items-center justify-center ">
                  N
                </span>
                <span className="bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end bg-clip-text text-transparent">
                  NewsHub
                </span>
              </div>
            </Link>
          </div>
        </div>
        <ul className="space-y-2">
          <Link
            title={`Home`}
            href={`/`}
            className={`flex ${
              path === `/` &&
              `bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-white`
            } items-center justify-start gap-3 rounded-lg p-2 font-bold hover:bg-background transition-all mx-4 text-lg `}
          >
            <FaHome />
            Home
          </Link>
          <Link
            title={`Trending`}
            href={`/trending`}
            className={`flex ${
              path.includes("/trending") &&
              `bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-white`
            } items-center justify-start gap-3 rounded-lg p-2 font-bold hover:bg-background transition-all mx-4 text-lg `}
          >
            <IoMdTrendingUp />
            Trending
          </Link>
          <Link
            title={`Bookmark`}
            href={`/bookmark`}
            className={`flex ${
              path.includes(`/bookmark`) &&
              `bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-white`
            } items-center justify-start gap-3 rounded-lg p-2 font-bold hover:bg-background transition-all mx-4 text-lg `}
          >
            <FaRegStar />
            BookMarks
          </Link>
          <div className="mx-4">
            <div
              onClick={() => setIsCategoryListOpen((prev) => !prev)}
              title="Category"
              className={`flex items-center justify-between gap-2 rounded-lg p-2 font-bold hover:bg-background transition-all text-lg cursor-pointer`}
            >
              <span>Category</span>
              <IoIosArrowUp
                className={`transition-all ${
                  isCategoryListOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            <div
              className={`transition-all duration-300 ease-in-out transform origin-top overflow-hidden rounded-md ${
                isCategoryListOpen
                  ? "opacity-100 scale-y-100 max-h-96"
                  : "opacity-0 scale-y-0 max-h-0"
              }`}
            >
              <div className="flex flex-col gap-2 bg-background p-2 text-lg">
                {newsCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.name}`}
                    className={`p-2 font-bold hover:bg-secondary rounded-md  ${
                      path.includes(`/category/${category.name}`) &&
                      `bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-white `
                    }`}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </ul>
      </div>
      {
        // Overlay for the side menu
        isOpen && (
          <div
            onClick={closeSideMenu}
            className="fixed inset-0 bg-black/50 z-5"
          ></div>
        )
      }
    </>
  );
};
export default SideMenu;
