"use client";

import Image from "next/image";
import Link from "next/link";

export default function ManageHistory() {
  return (
    <div className="relative grow overflow-x-auto hidden lg:flex lg:flex-col">
      <div className="relative flex h-full w-full flex-col overflow-hidden">
        <div className="absolute w-full bg-gradient-to-b from-neutral-50 to-transparent lg:h-[50px] lg:bg-gradient-to-b lg:from-neutral-50 lg:to-transparent z-10 h-[70px] via-neutral-50"></div>
        <div className="flex items-center bg-neutral-100 py-5 px-4 lg:px-6">
          <Link
            href="/"
            className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-neutral-300 hover:bg-neutral-300-hover active:bg-neutral-300-tap"
          >
            <Image
              src="/icons/close.svg"
              width={14}
              height={14}
              alt="Close Icon"
            />
          </Link>
          <h1 className="grow text-center font-alpina text-h-s text-primary-700">
            Manage history
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-[38.5rem] px-4 py-8 lg:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <Image
              src="/icons/data-transfer.svg"
              width={80}
              height={80}
              alt="Data Transfer Icon"
            />
          </div>
          <h2 className="mb-4 font-alpina text-h-m text-primary-700">
            Download your chat history
          </h2>
          <p className="mb-6 text-neutral-900">
            Inflection is proud to support the{" "}
            <a
              href="https://dtif.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 underline"
            >
              Data Transfer Initiative
            </a>{" "}
            framework for portability and interoperability of conversational AI chat
            histories.
          </p>
          <p className="mb-8 text-neutral-900">
            You can download your entire chat history with Pi in a format you can
            read easily and bring with you.
          </p>
          <button className="rounded-full bg-primary-700 px-6 py-3 text-white hover:bg-primary-700-hover active:bg-primary-700-tap">
            Download your Pi history
          </button>
        </div>
      </div>
    </div>
  );
}
