"use client";

import ThreadsSection from "@/components/threads-section";
import { usePathname } from 'next/navigation';

export default function ThreadsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isNestedRoute = pathname.split('/').length > 2;

  return (
    <main className="flex-1 flex bg-neutral-50">
      <div className={`w-full flex flex-col lg:w-[375px] lg:shrink-0 lg:border-r lg:border-neutral-300 ${isNestedRoute ? 'hidden lg:flex' : ''}`}>
        <ThreadsSection />
      </div>
      <div className={`w-full ${!isNestedRoute ? 'hidden lg:block' : ''}`}>
        {children}
      </div>
    </main>
  );
}
