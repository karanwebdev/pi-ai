"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import mobileAnimation from "./intro-mobile.json";
import webAnimation from "./intro-web.json";

export default function ResponsiveLottie() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => window.innerWidth <= 768;
    setIsMobile(checkMobile());

    const handleResize = () => setIsMobile(checkMobile());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-2/3 mx-auto h-screen">
      <Lottie
        animationData={isMobile ? mobileAnimation : webAnimation}
        loop={false}
        autoplay={true}
      />
    </div>
  );
}
