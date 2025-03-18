import DiscoverSection from "@/components/discover-section";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen w-screen flex-col overflow-hidden bg-neutral-100 lg:flex-row">
      <div className="flex h-full w-full flex-col overflow-hidden lg:w-[400px] 2xl:w-[496px]">
        <DiscoverSection />
      </div>
      {children}
    </main>
  );
}
