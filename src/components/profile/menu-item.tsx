import Link from "next/link";

interface MenuItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function MenuItem({ href, icon, label }: MenuItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between p-3 hover:bg-[#e8e4d4] rounded-lg cursor-pointer"
    >
      <div className="flex items-center">
        <div className="w-5 h-5 mr-3">{icon}</div>
        <span className="text-[#2d3c2d]">{label}</span>
      </div>
      <span>›</span>
    </Link>
  );
}
