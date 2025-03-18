import DiscoverSection from "@/components/discover-section";

export default function DiscoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 flex bg-neutral-50">
      <div className="w-full flex flex-col lg:w-[375px] lg:shrink-0 lg:border-r lg:border-neutral-300">
        <DiscoverSection />
      </div>
      {children}
    </main>
  );
}
