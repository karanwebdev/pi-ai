"use client";

import ProfileSection from "@/components/profile-section";
import { usePathname } from 'next/navigation';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isNestedRoute = pathname.split('/').length > 2;

  return (
    <main className="flex-1 flex bg-neutral-50 w-screen">
      <div className={`w-full flex flex-col lg:w-[375px] lg:shrink-0 lg:border-r lg:border-neutral-300 ${isNestedRoute ? 'hidden lg:flex' : ''}`}>
        <ProfileSection />
      </div>
      <div className={`w-full ${!isNestedRoute ? 'hidden lg:block' : ''}`}>
        {children}
      </div>
    </main>
  );
}
