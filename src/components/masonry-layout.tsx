"use client"

import { Tile } from "@/types";
import { useChatStore } from "@/store/chat-store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const MasonryLayout: React.FC<{ tiles: Tile[] }> = ({ tiles }) => {
  const populateFromTile = useChatStore((state) => state.populateFromTile);
  const router = useRouter();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 px-6 "
      style={{ gridAutoRows: "minmax(160px, auto)" }}
    >
      {tiles.map((tile: Tile, index: number) => {
        let colSpan = "col-span-1";
        let isLongTile = false;
        let isBigTile = false;

        switch (index % 8) {
          case 0:
          case 1:
          case 5:
          case 6:
            colSpan = "col-span-1";
            break;
          case 2:
          case 4:
            colSpan = "col-span-2";
            isLongTile = true;
            break;
          case 3:
          case 7:
            colSpan = "col-span-2 row-span-2";
            isBigTile = true;
            break;
        }

        const handleTileClick = () => {
          if (tile.blocks && tile.blocks.length > 0) {
            populateFromTile(tile);
            // Navigate to talk page on mobile
            if (isMobile) {
              router.push('/talk');
            }
          }
        };

        return (
          <button
            key={index}
            onClick={handleTileClick}
            className={`${colSpan} cursor-pointer group/card relative flex h-full w-full overflow-hidden rounded-20 border border-white text-left shadow-card transition-all duration-150 hover:scale-95 ${
              isLongTile
                ? "bg-neutral-50 hover:bg-neutral-50-hover flex-row-reverse items-end p-3"
                : "justify-end flex-col"
            }`}
            type="button"
          >
            <div
              className={`relative ${
                isLongTile ? "aspect-square h-full" : "w-full h-full"
              }`}
            >
              <Image
                alt={`Card image for ${tile.title}`}
                src={tile.image}
                fill
                className="object-cover rounded-10"
                sizes={
                  isBigTile
                    ? "(min-width: 1024px) 50vw, 100vw"
                    : "(max-width: 640px) 50vw, 25vw"
                }
              />
            </div>

            <div
              className={`${isBigTile ? "t-heading-m" : "t-heading-s"} ${
                isLongTile
                  ? "flex-1 p-1 text-primary-700"
                  : "p-4 absolute w-full bg-gradient-to-b from-transparent to-primary-900 text-neutral-25"
              }`}
            >
              {tile.title}
            </div>

            {/* Hover overlay only for non-long tiles */}
            {!isLongTile && (
              <div className="pointer-events-none absolute inset-0 opacity-[.16] transition-all duration-150 group-hover/card:bg-primary-900"></div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default MasonryLayout;
