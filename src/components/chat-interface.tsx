"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { ArrowUp, ChevronDown, Volume2 } from "lucide-react";
import { useState } from "react";

interface ChatInterfaceProps {
  messages: Array<{ role: "user" | "assistant"; content: string }>;
  onSendMessage: (message: string) => void;
}

export default function ChatInterface({
  messages,
  onSendMessage,
}: ChatInterfaceProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 border-b border-[#e0dcc8] flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Volume2 className="h-5 w-5 text-[#2d3c2d]" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ChevronDown className="h-5 w-5 text-[#2d3c2d]" />
          </Button>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.role === "user"
                  ? "bg-[#e0dcc8] text-[#2d3c2d]"
                  : "bg-white text-[#2d3c2d] border border-[#e0dcc8]"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      {messages.length > 0 &&
        messages[messages.length - 1].role === "assistant" && (
          <div className="px-4 py-2">
            <Button
              variant="outline"
              className="rounded-full text-sm px-4 py-1 h-auto border-[#e0dcc8] text-[#2d3c2d] hover:bg-[#e8e4d4]"
              onClick={() => onSendMessage("Sure Thanks")}
            >
              Sure Thanks
            </Button>
          </div>
        )}

      <form
        onSubmit={handleSubmit}
        className="max-h-[40%] px-5 sm:px-0 z-15 w-full mx-auto max-w-[38.5rem] 2xl:max-w-[47rem]"
      >
        <div className="relative flex h-full w-full cursor-text items-end border border-transparent bg-neutral-25 shadow-input transition-all duration-300 focus-within:border-neutral-400 focus-within:shadow-none hover:border-neutral-400 hover:shadow-none rounded-[30px]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Talk with Pi"
            className="h-full grow overflow-y-auto py-3 pl-[1.185rem] pr-4 lg:py-2.5 2xl:py-[8.5px]"
          />
          <button
            type="submit"
            className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-neutral-600 bg-neutral-50 m-2 transition-colors duration-300"
            disabled={!input.trim()}
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </form>

      <div className="px-5 py-6 w-full mx-auto max-w-[38.5rem] 2xl:max-w-[47rem]">
        <div className="t-label mx-auto text-center text-neutral-900">
          By using Pi, you agree to our{" "}
          <span className="text-primary-600 underline">Terms</span> and{" "}
          <span className="text-primary-600 underline">Privacy Policy</span>.
        </div>
      </div>
    </div>
  );
}
