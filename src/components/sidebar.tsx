"use client";

import { usePathname } from "next/navigation";
import NavItem from "./sidebar/nav-item";
import { View } from "@/types";

const navigationItems = [
  {
    href: "/discover",
    icon: "/icons/sidebar/discover.svg",
    label: "Discover",
    alt: "Discover new conversations",
    view: View.DISCOVER,
    iconSize: { width: 28, height: 28 },
    gap: "small" as const,
  },
  {
    href: "/threads",
    icon: "/icons/sidebar/threads.svg",
    label: "Threads",
    alt: "View conversation threads",
    view: View.THREADS,
  },
  {
    href: "/profile",
    icon: "/icons/sidebar/profile.svg",
    label: "Profile",
    alt: "Access your profile settings",
    view: View.PROFILE,
  },
];

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ }: SidebarProps) {
  const pathname = usePathname();
  const currentView = pathname.split("/")[1] as View || View.DISCOVER;

  return (
    <div className="hidden w-22 text-neutral-900 bg-neutral-50 lg:flex flex-col items-center gap-1 p-3 pt-5 border-r border-neutral-300">
      {navigationItems.map((item) => (
        <NavItem
          key={item.view}
          href={item.href}
          icon={item.icon}
          label={item.label}
          alt={item.alt}
          isActive={currentView === item.view}
          iconSize={item.iconSize}
          gap={item.gap}
        />
      ))}
    </div>
  );
}
