"use client";

import Lottie from "lottie-react";
import mobileAnimation from "./intro-mobile.json";
import webAnimation from "./intro-web.json";
import useMediaQuery from "@/hooks/use-media-query";

export default function ResponsiveLottie() {
  const { isMobile } = useMediaQuery();

  return (
    <div className="mx-auto h-screen w-screen bg-neutral-50">
      <Lottie
        animationData={isMobile ? mobileAnimation : webAnimation}
        loop={false}
        autoplay={true}
        className="w-2/3 h-3/4 mx-auto"
      />
    </div>
  );
}
