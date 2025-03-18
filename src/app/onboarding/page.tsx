"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUserStore } from "@/store/user-store";
import WelcomeStep from "./components/welcome-step";
import NameStep from "./components/name-step";

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
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      {step === 1 && <WelcomeStep onNext={handleNext} onLogin={handleLogin} />}
      {step === 2 && (
        <NameStep
          userName={userName}
          onNameChange={setUserName}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
