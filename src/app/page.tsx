"use client";

import ChatInterface from "@/components/chat-interface";
import DiscoverSection from "@/components/discover-section";
import Sidebar from "@/components/sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [activeView, setActiveView] = useState<
    "discover" | "threads" | "profile"
  >("discover");
  const [isViewCollapsed, setIsViewCollapsed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // Set the flag for future visits
      localStorage.setItem("hasVisited", "true");
      // Redirect to onboarding
      router.push("/onboarding");
    }
  }, [router]);

  const toggleView = (view: "discover" | "threads" | "profile") => {
    if (activeView === view) {
      setIsViewCollapsed(!isViewCollapsed);
    } else {
      setActiveView(view);
      setIsViewCollapsed(false);
    }
  };

  return (
    <div className="flex h-screen bg-neutral-50 no-scrollbar">
      <Sidebar activeView={activeView} toggleView={toggleView} />
      <main className="flex-1 flex">
        {!isViewCollapsed && (
          <div className="w-full flex flex-col lg:w-[375px] lg:shrink-0 lg:border-r lg:border-neutral-300">
            {activeView === "discover" && <DiscoverSection />}
            {activeView === "threads" && (
              <div className="h-full p-4 border-[#e0dcc8]">
                <h1 className="text-xl font-serif text-[#2d3c2d] mb-4">
                  Threads
                </h1>
                <div className="bg-white rounded-lg p-3 mb-3 border border-[#e0dcc8]">
                  <p className="text-sm">Hey Karan, how&apos;s it going? 😊</p>
                </div>
                <div className="bg-[#e8e4d4] rounded-lg p-3 mb-3">
                  <p className="text-sm">New thread</p>
                </div>
              </div>
            )}
            {activeView === "profile" && (
              <div className="h-full p-4 border-r border-[#e0dcc8]">
                <h1 className="text-xl font-serif text-[#2d3c2d] mb-4">
                  Karan
                </h1>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 hover:bg-[#e8e4d4] rounded-lg cursor-pointer">
                    <div className="flex items-center">
                      <span className="text-[#2d3c2d]">Account</span>
                    </div>
                    <span>›</span>
                  </div>
                  <div className="flex items-center justify-between p-3 hover:bg-[#e8e4d4] rounded-lg cursor-pointer">
                    <div className="flex items-center">
                      <span className="text-[#2d3c2d]">Manage history</span>
                    </div>
                    <span>›</span>
                  </div>
                  <div className="flex items-center justify-between p-3 hover:bg-[#e8e4d4] rounded-lg cursor-pointer">
                    <div className="flex items-center">
                      <span className="text-[#2d3c2d]">Voice settings</span>
                    </div>
                    <span>›</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        <ChatInterface />
      </main>
    </div>
  );
}
