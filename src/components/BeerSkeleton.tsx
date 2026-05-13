export function BeerSkeleton() {
  return (
    <div className="rounded-2xl bg-white dark:bg-slate-800 border border-amber-100 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col animate-pulse">
      <div className="h-44 bg-amber-50 dark:bg-slate-700" />
      <div className="p-4 space-y-2">
        <div className="h-4 bg-amber-100 dark:bg-slate-600 rounded-full w-3/4" />
        <div className="h-3 bg-amber-50 dark:bg-slate-700 rounded-full w-1/2" />
        <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full w-full" />
        <div className="h-3 bg-slate-100 dark:bg-slate-700 rounded-full w-5/6" />
        <div className="flex gap-2 pt-2">
          <div className="h-5 w-16 bg-amber-100 dark:bg-slate-600 rounded-full" />
          <div className="h-5 w-14 bg-slate-100 dark:bg-slate-700 rounded-full" />
        </div>
      </div>
    </div>
  );
}
