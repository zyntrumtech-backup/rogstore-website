const LoadingSkeleton = ({ type = 'card', count = 4 }) => {
  const cards = Array(count).fill(0);

  if (type === 'detail') {
    return (
      <div className="container py-8 animate-pulse">
        <div className="h-6 w-48 bg-[var(--bg-tertiary)] rounded mb-8 skeleton"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="aspect-[4/3] rounded-2xl bg-[var(--bg-tertiary)] skeleton"></div>
          <div className="flex flex-col gap-4">
            <div className="h-4 w-24 bg-[var(--bg-tertiary)] rounded skeleton"></div>
            <div className="h-10 w-3/4 bg-[var(--bg-tertiary)] rounded skeleton"></div>
            <div className="h-6 w-32 bg-[var(--bg-tertiary)] rounded skeleton"></div>
            <div className="h-20 w-full bg-[var(--bg-tertiary)] rounded skeleton"></div>
            <div className="h-12 w-48 bg-[var(--bg-tertiary)] rounded mt-4 skeleton"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {cards.map((_, idx) => (
        <div
          key={idx}
          className="border border-[var(--border-color)] bg-[var(--bg-secondary)] rounded-2xl p-5 flex flex-col gap-4 h-[380px]"
        >
          <div className="aspect-[4/3] w-full rounded-xl bg-[var(--bg-tertiary)] skeleton"></div>
          <div className="h-3 w-16 bg-[var(--bg-tertiary)] rounded skeleton"></div>
          <div className="h-5 w-3/4 bg-[var(--bg-tertiary)] rounded skeleton"></div>
          <div className="h-3 w-full bg-[var(--bg-tertiary)] rounded skeleton"></div>
          <div className="mt-auto flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <div className="h-2 w-8 bg-[var(--bg-tertiary)] rounded skeleton"></div>
              <div className="h-5 w-24 bg-[var(--bg-tertiary)] rounded skeleton"></div>
            </div>
            <div className="h-8 w-20 bg-[var(--bg-tertiary)] rounded skeleton"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
