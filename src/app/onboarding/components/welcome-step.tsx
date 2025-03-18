"use client";

import dynamic from "next/dynamic";

const ResponsiveLottie = dynamic(() => import("../lottie-animation"), {
  ssr: false,
});

interface WelcomeStepProps {
  onNext: () => void;
  onLogin: () => void;
}

export default function WelcomeStep({ onNext, onLogin }: WelcomeStepProps) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex items-center justify-center">
        <ResponsiveLottie />
      </div>
      <div className="p-6 pb-8 w-full fixed bottom-0 left-0 right-0 flex flex-col items-center bg-neutral-50">
        <button
          onClick={onNext}
          className="w-full max-w-md py-3 px-6 rounded-full bg-[#2d3c2d] text-white font-medium text-lg mb-4 cursor-pointer"
        >
          Next
        </button>
        <button
          onClick={onLogin}
          className="text-[#2d3c2d] font-medium cursor-pointer"
        >
          Login
        </button>
      </div>
    </div>
  );
}
