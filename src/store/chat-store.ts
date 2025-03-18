import { Message, Role, Tile } from "@/types";
import { create } from "zustand";

interface ChatState {
  messages: Array<Message>;
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  addMessage: (role: Role, content: string) => void;
  populateFromTile: (tile: Tile) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [
    {
      role: Role.ASSISTANT,
      content:
        "Hey there, great to meet you. I'm Pi, your personal AI. My goal is to be useful, friendly and fun. Ask me for advice, for answers, or let's talk about whatever's on your mind. How's your day going?",
    },
  ],
  isLoading: false,
  setLoading: (loading: boolean) => set({ isLoading: loading }),

  addMessage: (role, content) =>
    set((state) => ({
      messages: [...state.messages, { role, content }],
    })),

  populateFromTile: (tile: Tile) =>
    set(() => {
      // Create a new message with the tile's content
      const newMessage: Message = {
        role: Role.ASSISTANT,
        content: "", 
        title: tile.title,
        image: tile.image,
        blocks: tile.blocks,
        references: tile.references,
        relatedTiles: tile.relatedTiles,
      };

      // Replace the messages with just this new message
      // This clears the chat and starts fresh with the tile content
      return {
        messages: [newMessage],
      };
    }),
}));
