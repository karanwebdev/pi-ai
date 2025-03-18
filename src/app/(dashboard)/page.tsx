"use client";

import Sidebar from "@/components/sidebar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      localStorage.setItem("hasVisited", "true");
      router.push("/onboarding");
    } else {
      router.push("/discover");
    }
  }, [router]);

  return <Sidebar />;
}
