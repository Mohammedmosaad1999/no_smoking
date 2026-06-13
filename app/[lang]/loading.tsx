export default function Loading() {
  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center bg-slate-50/50">
      <div className="relative flex flex-col items-center">
        {/* outer spinning glow */}
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-teal-100 border-t-teal-600" />
        {/* absolute centered indicator */}
        <div className="absolute top-1/2 left-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-650/10 animate-ping" />
      </div>
    </div>
  );
}
