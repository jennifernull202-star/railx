export default function AdSlot({ position }: { position: string }) {
  return (
    <div className="w-full h-32 bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-500 text-sm">
      Advertisement Space ({position})
    </div>
  );
}
