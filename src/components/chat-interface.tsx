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
  const userName = "Karan";

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
        <h1 className="text-xl font-serif text-[#2d3c2d]">
          Good afternoon, {userName}
        </h1>
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
        className="p-4 border-t border-[#e0dcc8] flex items-center"
      >
        <div className="relative flex-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Talk with AI"
            className="w-full p-3 pr-10 rounded-full border border-[#e0dcc8] focus:outline-none focus:ring-1 focus:ring-[#2d3c2d] bg-white"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#2d3c2d] text-white p-1.5 rounded-full"
            disabled={!input.trim()}
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </form>

      <div className="p-2 text-center text-xs text-gray-500">
        By using AI, you agree to our{" "}
        <span className="text-[#2d3c2d] underline">Terms</span> and{" "}
        <span className="text-[#2d3c2d] underline">Privacy Policy</span>.
      </div>
    </div>
  );
}
