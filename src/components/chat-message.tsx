import { Message } from "@/app/types";
import discoverData from "@/data/discover-data.json";
import Image from "next/image";
import type React from "react";
import { TextAnimate } from "./ui/text-animate";
import { useChatStore } from "@/store/chat-store";
import { memo } from "react";

const ChatMessage = memo(({ message }: { message: Message }) => {
    const populateFromTile = useChatStore(state => state.populateFromTile)
    const findTileById = (id: string) =>
        discoverData.find((tile) => tile.id === id);
  
      return (
        <div className="space-y-4">
          {message.title && message.image && (
            <div className="flex items-end gap-2 overflow-hidden rounded-20 border border-neutral-400 p-2">
              <div className="t-heading-m flex-1 py-2 pl-2 text-primary-700">
                {message.title}
              </div>
              <div className="relative h-[180px] w-full flex-1 overflow-hidden rounded-10">
                <Image
                  src={message.image}
                  alt={message.title || "Content image"}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full"
                  style={{ height: "100%" }}
                />
              </div>
            </div>
          )}
  
          {message.blocks ? (
            <div className="space-y-4">
              {message.blocks.map((block, blockIndex) => {
                const delayValue = blockIndex * 0.3;
  
                if (block.type === "text" && block.content) {
                  return (
                    <TextAnimate
                      animation="blurIn"
                      key={blockIndex}
                      delay={delayValue}
                    >
                      {block.content}
                    </TextAnimate>
                  );
                } else if (block.type === "list" && block.items) {
                  if (block.ordered) {
                    return (
                      <ol
                        key={blockIndex}
                        className="list-decimal pl-5 space-y-2"
                      >
                        {block.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <TextAnimate
                              animation="blurIn"
                              delay={delayValue + itemIndex * 0.1}
                            >
                              {item}
                            </TextAnimate>
                          </li>
                        ))}
                      </ol>
                    );
                  } else {
                    return (
                      <ul key={blockIndex} className="list-disc pl-5 space-y-2">
                        {block.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <TextAnimate
                              animation="blurIn"
                              delay={delayValue + itemIndex * 0.1}
                            >
                              {item}
                            </TextAnimate>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                }
                return null;
              })}
            </div>
          ) : (
            <TextAnimate animation="blurIn">{message.content}</TextAnimate>
          )}
  
          {message.relatedTiles && message.relatedTiles.length > 0 && (
            <div className="mt-6 pt-4 border-t border-neutral-200">
              <div className="grid grid-cols-2 gap-4">
                {message.relatedTiles.map((tileId, index) => {
                  const tile = findTileById(tileId);
                  if (!tile) return null;
  
                  return (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-neutral-50 rounded-lg cursor-pointer hover:bg-neutral-100"
                      onClick={() => populateFromTile(tile)}
                    >
                      {tile.image && (
                        <div className="w-8 h-8 mr-3 overflow-hidden rounded-md">
                          <Image
                            src={tile.image}
                            alt=""
                            width={32}
                            height={32}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      )}
                      <span className="text-sm">{tile.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      );
})

ChatMessage.displayName = "ChatMessage";

export default ChatMessage