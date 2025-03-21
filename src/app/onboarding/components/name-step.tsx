"use client";

interface NameStepProps {
  userName: string;
  onNameChange: (name: string) => void;
  onNext: () => void;
}

export default function NameStep({ userName, onNameChange, onNext }: NameStepProps) {
  return (
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
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Your first name"
            className="w-full p-4 pr-10 border border-[#e0dcc8] rounded-full bg-transparent text-[#2d3c2d] focus:outline-none focus:border-[#2d3c2d]"
          />
          {userName && (
            <button
              onClick={() => onNameChange("")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              ×
            </button>
          )}
        </div>
      </div>
      <div className="w-full max-w-md mx-auto mb-8">
        <button
          onClick={onNext}
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
  );
}
