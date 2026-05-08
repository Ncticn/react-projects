export default function Divider() {
  return (
    <div className="divider">
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="h-px w-full bg-blue-600"></div>
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="inline-block h-4 w-1.5! rounded-[3px] bg-blue-200"></div>
          <div className="inline-block h-4 w-1.5! rounded-[3px] bg-blue-200"></div>
        </div>
        <div className="h-px w-full bg-blue-600"></div>
      </div>
    </div>
  );
}
