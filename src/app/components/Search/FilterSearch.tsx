"use client";

import { useState, useEffect } from "react";
import { CiFilter } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import DropDownMenu from "../Home/DropDownMenu";
import { countries, languages } from "@/app/utils/data";
import { MdCalendarToday } from "react-icons/md";
import { useRouter, useSearchParams } from "next/navigation";

interface FilterProps {
  country: string;
  language: string;
  dateFrom: string;
  dateTo: string;
}

const FilterSearch = () => {
  const [isFilterOpened, setIsFilterOpened] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<FilterProps>({
    country: "",
    language: "",
    dateFrom: "",
    dateTo: "",
  });

  // parse and format country/language
  const validCountries = countries.map((c) =>
    Object.keys(c)[0].replace(/_/g, " ")
  );
  const validLanguages = languages.map((l) =>
    Object.keys(l)[0].replace(/_/g, " ")
  );

  // handle change
  const handleFilterChange = (key: keyof FilterProps, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  // apply filters to URL
  const applyFilters = () => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value.trim()) params.set(key, value);
    });
    router.push(`/search?${params.toString()}`);
    setIsFilterOpened(false);
  };

  // populate state from URL (optional)
  useEffect(() => {
    const country = searchParams.get("country") || "";
    const language = searchParams.get("language") || "";
    const dateFrom = searchParams.get("dateFrom") || "";
    const dateTo = searchParams.get("dateTo") || "";
    setFilters({ country, language, dateFrom, dateTo });
  }, [searchParams]);
console.log(filters.dateFrom, filters.dateTo)
  return (
    <>
      <button
        onClick={() => setIsFilterOpened(true)}
        className="flex gap-2 items-center text-lg cursor-pointer h-10 border-2 border-border text-primary p-2 transition-all rounded-full hover:bg-primary hover:text-background"
      >
        <CiFilter size={20} />
        <span className="hidden sm:block">Filter</span>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 w-full h-full z-20 ${
          isFilterOpened ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsFilterOpened(false)}
      />

      {/* Modal */}
      <div
        className={`fixed z-30 inset-1/2 -translate-1/2 w-[90vw] md:w-[70vw] overflow-auto h-[550px] p-6 rounded-xl bg-background shadow-xl transition-all ease-in-out \
        ${
          isFilterOpened
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsFilterOpened(false)}
          className="absolute top-4 right-4 cursor-pointer p-1 rounded-full hover:bg-accent transition-all"
        >
          <IoClose size={20} />
        </button>

        <h2 className="flex items-center gap-1 font-bold text-2xl mb-8">
          <CiFilter /> <span>Advanced Search</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col w-full md:w-1/2 gap-1">
            <h5 className="font-bold">Country</h5>
            <p className="text-accent">Filter news by country</p>
            <DropDownMenu
              options={validCountries}
              title="Select country"
              onSelectionChange={(val) => handleFilterChange("country", val)}
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2 gap-1">
            <h5 className="font-bold">Language</h5>
            <p className="text-accent">Filter news by language</p>
            <DropDownMenu
              options={validLanguages}
              title="Select language"
              onSelectionChange={(val) => handleFilterChange("language", val)}
            />
          </div>
        </div>

        <div className="w-full h-1 rounded-full bg-secondary my-10" />

        <div className="flex flex-col gap-2">
          <h5 className="font-bold flex gap-1 items-center">
            <MdCalendarToday /> Date Range
          </h5>
          <p className="text-accent">Filter articles by publication date</p>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col w-full md:w-1/2 gap-1">
              <label htmlFor="from-date">From Date</label>
              <input
                id="from-date"
                type="date"
                className="bg-secondary border-2 border-primary p-2 rounded-lg"
                value={filters.dateFrom}
                onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-1">
              <label htmlFor="to-date">To Date</label>
              <input
                id="to-date"
                type="date"
                className="bg-secondary border-2 border-primary p-2 rounded-lg"
                value={filters.dateTo}
                onChange={(e) => handleFilterChange("dateTo", e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-10">
          <button
            onClick={applyFilters}
            className="px-6 py-2 mx-auto cursor-pointer scale-105 bg-gradient-to-r from-gradient-primary-start to-gradient-primary-end text-white rounded-full hover:opacity-90 transition"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSearch;
