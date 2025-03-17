import { Tile } from "@/app/types/tile";
import { create } from "zustand";

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
  role: "user" | "assistant";
  content: string;
  blocks?: Block[];
  title?: string;
  image?: string;
  references?: Reference[];
}

interface ChatState {
  messages: Array<Message>;
  addMessage: (role: "user" | "assistant", content: string) => void;
  populateFromTile: (tile: Tile) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [
    {
      role: "assistant",
      content:
        "Hey there, great to meet you. I'm your personal AI. My goal is to be useful, friendly and fun. Ask me for advice, for answers, or let's talk about whatever's on your mind. How's your day going?",
    },
  ],

  addMessage: (role, content) =>
    set((state) => ({
      messages: [...state.messages, { role, content }],
    })),

  populateFromTile: (tile: Tile) =>
    set(() => {
      // Create a new message with the tile's content
      const newMessage: Message = {
        role: "assistant",
        content: "", // Empty content as we'll use blocks instead
        title: tile.title,
        image: tile.image,
        blocks: tile.blocks,
        references: tile.references,
      };

      // Replace the messages with just this new message
      // This clears the chat and starts fresh with the tile content
      return {
        messages: [newMessage],
      };
    }),
}));
