"use server";

import { env } from "@/env";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

enum Role {
  USER = "user",
  ASSISTANT = "assistant",
  SYSTEM = "system",
}
interface Message {
  role: Role.USER | Role.ASSISTANT | Role.SYSTEM;
  content: string;
}

export async function generateChatResponse(messages: Message[]) {
  try {
    // Add a system message if there isn't one
    if (!messages.some((message) => message.role === Role.SYSTEM)) {
      messages = [
        {
          role: Role.SYSTEM,
          content:
            "You are a helpful assistant named Pi. Be concise, friendly, and helpful.",
        },
        ...messages,
      ];
    }

    const response = await openai.chat.completions.create({
      model: "o3-mini",
      messages: messages,
    });

    const message =
      response.choices[0]?.message?.content ||
      "I'm not sure how to respond to that.";

    return {
      success: true,
      message,
    };
  } catch (error: unknown) {
    console.error("OpenAI API error:", error);
    return {
      success: false,
      error: "Failed to generate response",
      message: "",
    };
  }
}
