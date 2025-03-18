"use client";

import Sidebar from "@/components/sidebar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // Set the flag for future visits
      localStorage.setItem("hasVisited", "true");
      // Redirect to onboarding
      router.push("/onboarding");
    } else {
      // Redirect to discover by default
      router.push("/discover");
    }
  }, [router]);

  return <Sidebar />;
}
