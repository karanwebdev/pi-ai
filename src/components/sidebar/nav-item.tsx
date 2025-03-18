"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface NavItemProps {
  href: string;
  icon: string;
  label: string;
  isActive: boolean;
  iconSize?: { width: number; height: number };
  gap?: "small" | "large";
}

export default function NavItem({
  href,
  icon,
  label,
  isActive,
  iconSize = { width: 24, height: 24 },
  gap = "large",
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex h-16 w-16 flex-col items-center justify-center rounded-xl text-primary-900 cursor-pointer",
        gap === "small" ? "gap-0.5" : "gap-1.5",
        {
          "bg-neutral-300": isActive,
          "text-neutral-900 hover:bg-neutral-500 hover:text-neutral-900-hover active:bg-neutral-50-tap active:text-neutral-900-tap":
            !isActive,
        }
      )}
      aria-label={`Go to ${label} page`}
    >
      <Image
        src={icon}
        alt={label}
        width={iconSize.width}
        height={iconSize.height}
      />
      <span className="t-label font-normal">{label}</span>
    </Link>
  );
}
