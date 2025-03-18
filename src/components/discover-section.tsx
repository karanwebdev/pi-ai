"use client";

import discoverData from "@/data/discover-data.json";
import Image from "next/image";
import Link from "next/link";
import MasonryLayout from "./masonry-layout";
import { getTimeBasedGreeting } from "@/lib/utils";
import { useUserStore } from "@/store/user-store";

export default function DiscoverSection() {
  const name = useUserStore(state => state.name);
  return (
    <div className="h-full overflow-y-auto no-scrollbar bg-neutral-100 lg:pt-8">
      <div className="bg-card-background">
        <div className="flex items-center bg-neutral-100 py-5 mt-[12px]rounded-t-4xl md:mt-0 md:rounded-none px-4 lg:px-6 lg:hidden">
          <Link
            href="/talk"
            aria-label="Go back"
            className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-neutral-300 hover:bg-neutral-300-hover active:bg-neutral-300-tap lg:hidden"
            type="button"
          >
            <Image
              src={"/icons/close.svg"}
              width={14}
              height={14}
              alt="Close Icon"
            />
          </Link>
          <div className="grow text-primary-700"></div>
          <Link
            href="/profile"
            aria-label="Go to profile"
            className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-neutral-300 hover:bg-neutral-300-hover active:bg-neutral-300-tap lg:hidden"
          >
            <Image
              src={"/icons/profile.svg"}
              width={24}
              height={24}
              alt="Profile Icon"
            />
          </Link>
        </div>
      </div>
      <h2 className="mb-6 px-6 ">
        <div className="font-alpina-condensed text-h-m text-primary-700">
          {getTimeBasedGreeting()}{name ? `, ${name}` : ''}
        </div>
      </h2>

      <div className="mb-6 mx-6  flex items-center rounded-20 border border-white bg-neutral-50 p-4 shadow-card transition-all duration-150 hover:scale-95 hover:bg-neutral-50-hover">
        <div className="min-w-[56px] min-h-[56px] mr-4">
          <Image
            src={"/icons/chat.svg"}
            width={56}
            height={56}
            alt="Chat Icon"
            className="text-[#2d3c2d]"
          />
        </div>
        <div>
          <h3 className="text-lg text-[#2d3c2d] font-alpina-condensed text-h-m">
            Download your Pi conversation history
          </h3>
          <Link
            href={"/profile/manage-history"}
            className="t-body-s mt-4 block text-primary-600"
          >
            Manage history
          </Link>
        </div>
      </div>

      <MasonryLayout tiles={discoverData} />
    </div>
  );
}
