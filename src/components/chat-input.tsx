import React from 'react'
import { generateChatResponse } from "@/actions/chat";
import { useChatStore } from "@/store/chat-store";
import { ArrowUp } from "lucide-react";
import { useForm } from "react-hook-form";
import { Role } from '@/app/types';

type FormData = {
    message: string;
  };

const ChatInput = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, isValid },
      } = useForm<FormData>({
        mode: "onSubmit",
        defaultValues: {
          message: "",
        },
      });
      const { messages, addMessage } = useChatStore();
    
      const onSubmit = async (data: FormData) => {
        addMessage(Role.USER, data.message);
        reset();
    
        try {
          const response = await generateChatResponse([
            ...messages.map((msg) => ({
              role: msg.role === "user" ? Role.USER : Role.ASSISTANT,
              content: msg.content,
            })),
            { role: Role.USER, content: data.message },
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
        }
      };
  return (
    <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-h-[40%] px-5 sm:px-0 z-15 w-full mx-auto max-w-[38.5rem] 2xl:max-w-[47rem]"
        >
          <div className="relative flex h-full w-full cursor-text items-end border border-transparent bg-neutral-25 shadow-input transition-all duration-300 focus-within:border-neutral-400 focus-within:shadow-none hover:border-neutral-400 hover:shadow-none rounded-[30px]">
            <div className="h-full grow overflow-y-auto py-3 pl-[1.185rem] pr-4 lg:py-2.5 2xl:py-[8.5px]">
              <input
              {...register("message", {
                required: true,
                validate: (value) => value.trim().length > 0,
              })}
                type="text"
                placeholder={isSubmitting ? "Thinking..." : "Talk with Pi"}
                className="t-body-chat block w-full resize-none overflow-y-hidden
            whitespace-pre-wrap bg-transparent text-primary-700 outline-none
            placeholder:text-neutral-600"
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-neutral-600 bg-neutral-50 m-2 transition-colors duration-300"
              disabled={!isValid || isSubmitting}
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
  )
}

export default ChatInput