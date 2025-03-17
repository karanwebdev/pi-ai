"use client";

import { LucideHome, MessageSquare, User } from "lucide-react";

interface SidebarProps {
  activeView: "discover" | "threads" | "profile";
  toggleView: (view: "discover" | "threads" | "profile") => void;
}

export default function Sidebar({ activeView, toggleView }: SidebarProps) {
  return (
    <div className="w-16 bg-[#f0ece0] flex flex-col items-center py-6 border-r border-[#e0dcc8]">
      <div className="flex flex-col items-center space-y-8">
        <button
          onClick={() => toggleView("discover")}
          className={`p-2 rounded-lg ${
            activeView === "discover" ? "bg-[#e0dcc8]" : "hover:bg-[#e8e4d4]"
          } transition-colors flex flex-col items-center`}
          aria-label="Discover"
        >
          <LucideHome className="w-5 h-5 text-[#2d3c2d]" />
          <span className="text-xs mt-1 text-[#2d3c2d]">Discover</span>
        </button>

        <button
          onClick={() => toggleView("threads")}
          className={`p-2 rounded-lg ${
            activeView === "threads" ? "bg-[#e0dcc8]" : "hover:bg-[#e8e4d4]"
          } transition-colors flex flex-col items-center`}
          aria-label="Threads"
        >
          <MessageSquare className="w-5 h-5 text-[#2d3c2d]" />
          <span className="text-xs mt-1 text-[#2d3c2d]">Threads</span>
        </button>

        <button
          onClick={() => toggleView("profile")}
          className={`p-2 rounded-lg ${
            activeView === "profile" ? "bg-[#e0dcc8]" : "hover:bg-[#e8e4d4]"
          } transition-colors flex flex-col items-center`}
          aria-label="Profile"
        >
          <User className="w-5 h-5 text-[#2d3c2d]" />
          <span className="text-xs mt-1 text-[#2d3c2d]">Profile</span>
        </button>
      </div>
    </div>
  );
}
