"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import ArticlesGrid from "@/app/components/Articles/ArticlesGrid";
import { useRouter } from "next/navigation";
import FilterSearch from "@/app/components/Search/FilterSearch";
import NoResults from "@/app/components/Articles/NoResults";
import { countries, languages } from "@/app/utils/data";
type CountryObject = { [key: string]: string };
export type SupportedCountry =
  | "nl"
  | "fr"
  | "de"
  | "it"
  | "no"
  | "pt"
  | "ro"
  | "ru"
  | "es"
  | "au"
  | "br"
  | "ca"
  | "cn"
  | "eg"
  | "gr"
  | "hk"
  | "in"
  | "ie"
  | "jp"
  | "ph"
  | "sg"
  | "se"
  | "ch"
  | "tw"
  | "ua"
  | "gb"
  | "us"
  | "il";
const Search = () => {
  const query = useSearchParams().get("q") || "";
  const language = useSearchParams().get("language") || "";
  const country = useSearchParams().get("country") || "";
  const dateFrom = useSearchParams().get("dateFrom") || "";
  const dateTo = useSearchParams().get("dateTo") || "";
  const [inputValue, setInputValue] = useState<string>(query);
  const router = useRouter();

  const getLanguageCode = (languageName: string) => {
    const found = languages.find(
      (langObj) =>
        Object.keys(langObj)[0].toLowerCase() === languageName.toLowerCase()
    );
    return found ? Object.values(found)[0] : undefined;
  };

  const getCountryCode = (countryName: string): string | undefined => {
    for (const item of countries) {
      const entry = item as unknown as CountryObject;
      const [key, value] = Object.entries(entry)[0];
      if (key.toLowerCase() === countryName.toLowerCase()) return value;
    }
    return undefined;
  };

  const handleSearch = () => {
    if (!inputValue.trim()) return;
    else {
      router.push(`/search?q=${inputValue}`);
    }
  };

  return (
    <div className="pt-20 min-h-screen mx-auto px-2 container">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
        Search News
      </h2>
      <div className="flex items-center gap-1 justify-center my-10 ">
        <div className="flex items-center w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-10 rounded-full border-2 border-border bg-background overflow-hidden relative">
          <button
            onClick={handleSearch}
            className="text-background rounded-l-full h-full bg-primary w-10 flex items-center justify-center cursor-pointer transition-all hover:opacity-90"
          >
            <IoSearch size={20} />
          </button>
          <input
            className="w-full outline-none text-primary pl-2 bg-background text-lg font-bold"
            type="text"
            placeholder="Search..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div
            className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all text-primary opacity-0 cursor-pointer hover:bg-primary hover:text-background rounded-full ${
              inputValue && `opacity-100`
            } `}
            onClick={() => setInputValue("")}
          >
            <IoClose size={20} />
          </div>
        </div>
        <FilterSearch />
      </div>
      <p className="text-lg sm:text-2xl font-bold">
        Search Results for &quot;{query}&quot;
      </p>

      <ArticlesGrid
        OnEmptyComponent={<NoResults />}
        type="general"
        q={inputValue}
        language={getLanguageCode(language)}
        country={getCountryCode(country) as SupportedCountry}
        from={dateFrom ?? ""}
        to={dateTo ?? ""}
      />
    </div>
  );
};

export default Search;
