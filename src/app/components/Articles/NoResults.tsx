import { FaSearch } from "react-icons/fa";
const NoResults = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] text-center text-muted-foreground px-4 pt-12">
      <div className="bg-secondary p-5 rounded-full mb-4">
        <FaSearch size={60} className="text-primary" />
      </div>
      <h2 className="text-lg sm:text-3xl font-semibold text-foreground mb-2">
        No Articles Found
      </h2>
      <p className="text-sm sm:text-lg max-w-md">
        We could&apos;t find any articles that match your search. Try using
        different keywords or filters.
      </p>
    </div>
  );
};

export default NoResults;
