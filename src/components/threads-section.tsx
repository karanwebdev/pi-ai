"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { useUserStore } from '@/store/user-store';
import useMediaQuery from "@/hooks/use-media-query";

export default function ThreadsSection() {
  const router = useRouter();
  const { isMobile } = useMediaQuery();
  const name = useUserStore(state => state.name);


  const handleThreadClick = () => {
    if (isMobile) {
      router.push('/talk');
    }
  };

  return (
    <div className="h-full overflow-y-auto no-scrollbar bg-neutral-50 lg:pt-8">
      <div className="flex items-center bg-neutral-50 py-5 mt-[12px] rounded-t-4xl md:mt-0 md:rounded-none px-4 lg:px-6 lg:hidden">
        <Link
          href="/talk"
          aria-label="Go back"
          className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-neutral-300 hover:bg-neutral-300-hover active:bg-neutral-300-tap lg:hidden"
        >
          <Image
            src="/icons/magic.svg"
            width={24}
            height={24}
            alt="Talk Icon"
          />
        </Link>
        <div className="grow text-primary-700"></div>
        <Link
          href="/discover"
          aria-label="Go to discover"
          className="flex h-9 w-9 items-center justify-center rounded-full p-1.5 text-primary-700 bg-neutral-300 hover:bg-neutral-300-hover active:bg-neutral-300-tap lg:hidden"
        >
          <Image
            src="/icons/close.svg"
            width={14}
            height={14}
            alt="Discover Icon"
          />
        </Link>
      </div>

      <div className="px-4 lg:px-6">
        <h1 className="text-h-l-mobile font-alpina-condensed text-primary-700 mb-4">Threads</h1>
        
        <button
          onClick={handleThreadClick}
          className="w-full bg-white rounded-lg p-3 mb-3 border border-neutral-300 hover:bg-neutral-50-hover text-left transition-colors"
        >
          <p className="text-sm">Hey {name}, how&apos;s it going? 😊</p>
        </button>

        <button
          onClick={handleThreadClick}
          className="w-full bg-neutral-300 rounded-lg p-3 mb-3 hover:bg-neutral-300-hover text-left transition-colors cursor-pointer"
        >
          <p className="text-sm">New thread</p>
        </button>
      </div>
    </div>
  );
}
