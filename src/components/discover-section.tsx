import Image from "next/image";
import Link from "next/link";
import MasonryLayout from "./masonry-layout";

const tiles = [
  { title: "The psychology of colors", image: "/images/discover/1.webp" },
  {
    title: "The real meaning behind your dreams",
    image: "/images/discover/2.webp",
  },
  { title: "Let me translate something", image: "/images/discover/3.webp" },
  {
    title: "Health and wellness trends of 2024",
    image: "/images/discover/4.webp",
  },
  { title: "Learn about something new", image: "/images/discover/5.webp" },
  { title: "Brainstorm ideas", image: "/images/discover/6.webp" },
  { title: "Shift your perspective", image: "/images/discover/7.webp" },
  { title: "Can you answer these riddles?", image: "/images/discover/8.webp" },
  { title: "Learn a new language with Pi", image: "/images/discover/9.webp" },
  { title: "Have an energy boost on me", image: "/images/discover/10.webp" },
  {
    title: "Learn your relationship attachment style",
    image: "/images/discover/11.webp",
  },
  {
    title: "Perfect your sleeping environment",
    image: "/images/discover/12.webp",
  },
  {
    title: "Quiz: what's my love language?",
    image: "/images/discover/13.webp",
  },
  { title: "How to deal with criticism", image: "/images/discover/14.webp" },
  { title: "Get to inbox zero", image: "/images/discover/15.webp" },
  { title: "Inspiring TED talks for you", image: "/images/discover/16.webp" },
  {
    title: "Explain generative AI like I'm 5",
    image: "/images/discover/17.webp",
  },
  {
    title: "Manifest your deepest desires",
    image: "/images/discover/18.webp",
  },
  {
    title: "Don't let imposter syndrome get the best of you",
    image: "/images/discover/19.webp",
  },
  {
    title: "Let's talk science",
    image: "/images/discover/20.webp",
  },
  {
    title: "Stop insomnia in its tracks",
    image: "/images/discover/21.webp",
  },
  {
    title: "Top tips for giving difficult feedback",
    image: "/images/discover/22.webp",
  },
  {
    title: "Five fascinating facts...",
    image: "/images/discover/23.webp",
  },
  {
    title: "The latest trends in tech",
    image: "/images/discover/24.webp",
  },
];

export default function DiscoverSection() {
  return (
    <div className="h-full overflow-y-auto px-6 no-scrollbar bg-neutral-100 lg:pt-8">
      <h2 className="mb-6">
        <div className="font-alpina-condensed text-h-m text-primary-700">
          {/* TODO: Greet based on time */}
          Good evening
        </div>
      </h2>

      <div className="mb-6 flex items-center rounded-20 border border-white bg-neutral-50 p-4 shadow-card transition-all duration-150 hover:scale-95 hover:bg-neutral-50-hover">
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

      <MasonryLayout tiles={tiles} />
    </div>
  );
}
