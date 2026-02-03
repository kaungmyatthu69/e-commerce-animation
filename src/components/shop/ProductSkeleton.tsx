export default function ProductSkeleton() {
  return (
    <div className="border border-border rounded-2xl p-4 bg-card flex flex-col h-full">
      {/* Image Skeleton */}
      <div className="aspect-[3/4] rounded-xl bg-secondary animate-pulse mb-5" />

      <div className="flex-1 flex flex-col space-y-3">
        {/* Category & Rating Skeleton */}
        <div className="flex justify-between items-start">
          <div className="h-4 w-20 bg-secondary animate-pulse rounded" />
          <div className="h-5 w-12 bg-secondary animate-pulse rounded-full" />
        </div>

        {/* Title Skeleton */}
        <div className="space-y-2">
          <div className="h-6 w-full bg-secondary animate-pulse rounded" />
          <div className="h-6 w-2/3 bg-secondary animate-pulse rounded" />
        </div>

        {/* Price Skeleton */}
        <div className="mt-auto pt-4">
          <div className="h-8 w-24 bg-secondary animate-pulse rounded" />
        </div>
      </div>
    </div>
  );
}
