"use client";

import { Role } from "@/types";
import type React from "react";
import { useChatStore } from "@/store/chat-store";
import ChatInput from "./chat-input";
import ChatMessage from "./chat-message";
import Image from "next/image";
import Link from "next/link";
// import { Button } from "./ui/button";
// import { ChevronDown, Volume2 } from "lucide-react";

export default function ChatInterface() {
  const { messages, isLoading } = useChatStore();

  return (
    <div className="relative grow overflow-x-auto flex flex-col">
      <div className="relative flex flex-col overflow-hidden sm:overflow-x-visible h-full pt-4 lg:pt-8 grow">
      <div className="flex items-center bg-neutral-50 py-5 mt-[12px]rounded-t-4xl md:mt-0 md:rounded-none px-4 lg:px-6 lg:hidden">
          <Link
            href="/discover"
            aria-label="Go back"
            className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-neutral-300 hover:bg-neutral-300-hover active:bg-neutral-300-tap lg:hidden cursor-pointer"
            type="button"
          >
            <Image
              src={"/icons/magic.svg"}
              width={32}
              height={32}
              alt="Discover Icon"
            />
          </Link>
          <div className="grow text-primary-700"></div>
          <Link
            href="/threads"
            aria-label="Go to threads"
            className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-neutral-300 hover:bg-neutral-300-hover active:bg-neutral-300-tap lg:hidden"
          >
            <Image
              src={"/icons/threads.svg"}
              width={24}
              height={24}
              alt="Threads Icon"
            />
          </Link>
        </div>
        <div className="relative w-full mx-auto max-w-1.5xl 2xl:max-w-[47rem]">
          <div className="absolute w-full bg-gradient-to-b from-neutral-50 to-transparent lg:h-[50px] lg:bg-gradient-to-b lg:from-neutral-50 lg:to-transparent z-10 h-[70px] via-neutral-50"></div>
        </div>
        {/* <div className="relative flex flex-col h-full grow w-full mx-auto max-w-[38.5rem] 2xl:max-w-[47rem]"> */}
        {/* <div className="p-4 w-fit flex justify-between items-center">
            <div className="ml-auto flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Volume2 className="h-5 w-5 text-[#2d3c2d]" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <ChevronDown className="h-5 w-5 text-[#2d3c2d]" />
              </Button>
            </div>
          </div> */}

        <div className="relative grow overflow-y-hidden">
          <div className="h-full">
            <div className="scrollbar-gutter-both-edges relative h-full overflow-y-auto overflow-x-hidden">
              <div className="t-body-chat relative h-full space-y-6 px-5 text-primary-700 w-full mx-auto max-w-[38.5rem] 2xl:max-w-[47rem]">
                <div className="pb-6 lg:pb-8 min-h-[calc(100%-60px)] sm:min-h-[calc(100%-120px)]">
                  <div className="relative space-y-6 pt-36">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          message.role === Role.USER
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`text-primary-700 rounded-10 ${
                            message.role === Role.USER
                              ? "bg-neutral-200 p-3"
                              : ""
                          }`}
                        >
                          <ChatMessage message={message} />
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="flex space-x-2 p-3">
                          <div className="h-2 w-2 rounded-full bg-neutral-400 animate-bounce [animation-delay:-0.3s]"></div>
                          <div className="h-2 w-2 rounded-full bg-neutral-400 animate-bounce [animation-delay:-0.15s]"></div>
                          <div className="h-2 w-2 rounded-full bg-neutral-400 animate-bounce"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ChatInput />
      </div>
    </div>
  );
}
