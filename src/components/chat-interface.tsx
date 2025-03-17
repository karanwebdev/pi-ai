"use client";

import { generateChatResponse } from "@/actions/chat";
import { Tile } from "@/app/types/tile";
import { tiles } from "@/components/discover-section";
import { useChatStore } from "@/store/chat-store";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";

enum Role {
  USER = "user",
  ASSISTANT = "assistant",
  SYSTEM = "system",
}

interface Block {
  type: string;
  content?: string;
  ordered?: boolean;
  items?: string[];
}

interface Reference {
  title: string;
  icon: string;
}

interface Message {
  role: string;
  content: string;
  blocks?: Block[];
  title?: string;
  image?: string;
  references?: Reference[];
  relatedTiles?: string[];
}

export default function ChatInterface() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { messages, addMessage, populateFromTile } = useChatStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addMessage(Role.USER, input);
      setInput("");
      setIsLoading(true);

      try {
        const response = await generateChatResponse([
          ...messages.map((msg) => ({
            role: msg.role === "user" ? Role.USER : Role.ASSISTANT,
            content: msg.content,
          })),
          { role: Role.USER, content: input },
        ]);

        if (response.success) {
          addMessage(Role.ASSISTANT, response.message);
        } else {
          throw new Error(response.error || "Unknown error");
        }
      } catch (error) {
        console.error("Error calling OpenAI:", error);
        addMessage(
          Role.ASSISTANT,
          "Sorry, I encountered an error. Please try again."
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

  const renderMessageContent = (message: Message) => {
    const findTileById = (id: string) => tiles.find((tile) => tile.id === id);
    const relatedTiles = message.relatedTiles
      ?.map((id) => findTileById(id))
      .filter(Boolean) as Tile[];

    return (
      <div className="space-y-4">
        {message.title && (
          <div className="font-alpina-condensed text-h-m text-primary-700 mb-2">
            {message.title}
          </div>
        )}

        {message.image && (
          <div className="mb-4">
            <Image
              src={message.image}
              alt={message.title || "Content image"}
              width={300}
              height={200}
              className="rounded-lg"
            />
          </div>
        )}

        {message.blocks ? (
          <div className="space-y-4">
            {message.blocks.map((block, blockIndex) => {
              if (block.type === "text" && block.content) {
                return <p key={blockIndex}>{block.content}</p>;
              } else if (block.type === "list" && block.items) {
                if (block.ordered) {
                  return (
                    <ol
                      key={blockIndex}
                      className="list-decimal pl-5 space-y-2"
                    >
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ol>
                  );
                } else {
                  return (
                    <ul key={blockIndex} className="list-disc pl-5 space-y-2">
                      {block.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  );
                }
              }
              return null;
            })}
          </div>
        ) : (
          <p>{message.content}</p>
        )}

        {message.references && message.references.length > 0 && (
          <div className="mt-6 pt-4 border-t border-neutral-200">
            <div className="grid grid-cols-2 gap-4">
              {message.references.map((ref, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-neutral-50 rounded-lg"
                >
                  {ref.icon && (
                    <div className="mr-3">
                      <Image src={ref.icon} alt="" width={24} height={24} />
                    </div>
                  )}
                  <span className="text-sm">{ref.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {relatedTiles && relatedTiles.length > 0 && (
          <div className="mt-6">
            <h3 className="font-alpina-condensed text-primary-700 mb-3">
              Related topics:
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {relatedTiles.map((tile) => (
                <div
                  key={tile.id}
                  className="flex items-center p-3 bg-neutral-50 rounded-lg cursor-pointer hover:bg-neutral-100"
                  onClick={() => populateFromTile(tile)}
                >
                  <div className="w-12 h-12 mr-3 overflow-hidden rounded-md">
                    <Image
                      src={tile.image}
                      alt=""
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="text-sm font-medium">{tile.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative grow overflow-x-auto hidden lg:flex lg:flex-col">
      <div className="relative flex flex-col overflow-hidden sm:overflow-x-visible h-full pt-8 grow">
        {/* <div className="relative flex flex-col h-full grow w-full mx-auto max-w-[38.5rem] 2xl:max-w-[47rem]"> */}
        {/* <div className="p-4 flex justify-between items-center">
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
                  <div className="relative space-y-6">
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
                          className={`max-w-[80%] text-primary-700 rounded-10 ${
                            message.role === Role.USER
                              ? "bg-neutral-200 p-3"
                              : ""
                          }`}
                        >
                          {renderMessageContent(message)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-h-[40%] px-5 sm:px-0 z-15 w-full mx-auto max-w-[38.5rem] 2xl:max-w-[47rem]"
        >
          <div className="relative flex h-full w-full cursor-text items-end border border-transparent bg-neutral-25 shadow-input transition-all duration-300 focus-within:border-neutral-400 focus-within:shadow-none hover:border-neutral-400 hover:shadow-none rounded-[30px]">
            <div className="h-full grow overflow-y-auto py-3 pl-[1.185rem] pr-4 lg:py-2.5 2xl:py-[8.5px]">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={isLoading ? "Thinking..." : "Talk with Pi"}
                className="t-body-chat block w-full resize-none overflow-y-hidden
            whitespace-pre-wrap bg-transparent text-primary-700 outline-none
            placeholder:text-neutral-600"
                disabled={isLoading}
              />
            </div>
            <button
              type="submit"
              className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-neutral-600 bg-neutral-50 m-2 transition-colors duration-300"
              disabled={!input.trim() || isLoading}
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
    </div>
  );
}
