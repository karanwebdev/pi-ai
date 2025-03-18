"use client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUserStore } from "@/store/user-store";

// Dynamically import Lottie component to disable SSR
const ResponsiveLottie = dynamic(() => import("./lottie-animation"), {
  ssr: false,
});

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [userName, setUserName] = useState("");
  const router = useRouter();

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2 && userName.trim()) {
      useUserStore.getState().setName(userName);
      router.push("/discover");
    }
  };

  const handleLogin = () => {
    // For existing users, just redirect to home
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      {step === 1 && (
        <div className="flex flex-col h-screen">
          <div className="flex-1 flex items-center justify-center">
            <ResponsiveLottie />
          </div>
          <div className="p-6 pb-8 w-full fixed bottom-0 left-0 right-0 flex flex-col items-center bg-neutral-50">
            <button
              onClick={handleNext}
              className="w-full max-w-md py-3 px-6 rounded-full bg-[#2d3c2d] text-white font-medium text-lg mb-4 cursor-pointer"
            >
              Next
            </button>
            <button
              onClick={handleLogin}
              className="text-[#2d3c2d] font-medium cursor-pointer"
            >
              Login
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col h-screen w-screen p-6">
          <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
            <h1 className="text-4xl font-alpina-condensed text-[#2d3c2d] mb-4">
              Hello! I&apos;m Pi.
              <span role="img" aria-label="waving hand" className="ml-2">
                👋
              </span>
            </h1>
            <h2 className="text-4xl font-alpina-condensed text-[#2d3c2d] mb-8">
              What&apos;s your name?
            </h2>
            <p className="text-gray-600 mb-8">
              I take data privacy seriously. Our chats stay between us.
              <br />
              We never share your data for ads or marketing.
            </p>
            <div className="relative mb-8">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Your first name"
                className="w-full p-4 pr-10 border border-[#e0dcc8] rounded-full bg-transparent text-[#2d3c2d] focus:outline-none focus:border-[#2d3c2d]"
              />
              {userName && (
                <button
                  onClick={() => setUserName("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  ×
                </button>
              )}
            </div>
          </div>
          <div className="w-full max-w-md mx-auto mb-8">
            <button
              onClick={handleNext}
              disabled={!userName.trim()}
              className={`w-full py-3 px-6 rounded-full font-medium text-lg ${
                userName.trim()
                  ? "bg-[#2d3c2d] text-white"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
