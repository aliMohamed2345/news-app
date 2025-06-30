const ArticleLoadingSkeleton = ({ numOfElements = 6 }: { numOfElements?: number }) => {
  return (
    <section className="pt-12">
      <div className="container mx-auto max-w-7xl px-4">
        <h1 className="text-2xl font-bold mb-6">Trending News</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: numOfElements }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-secondary min-h-[250px] max-h-[300px] p-2 rounded-xl border flex flex-col gap-5"
            >
              <div className="aspect-video bg-muted rounded-lg w-full" />
              <div className="flex justify-between items-center">
                <span className="h-6 w-24 rounded-full bg-muted" />
                <span className="h-6 w-6 rounded-md bg-muted" />
              </div>
              <div className="h-4 w-3/4 bg-muted rounded" />
              <div className="h-3 w-1/3 bg-muted rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleLoadingSkeleton;
