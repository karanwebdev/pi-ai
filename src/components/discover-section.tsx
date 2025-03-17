import { Tile } from "@/app/types/tile";
import Image from "next/image";
import Link from "next/link";
import MasonryLayout from "./masonry-layout";

export const tiles: Tile[] = [
  {
    id: "colors",
    title: "The psychology of colors",
    image: "/images/discover/1.webp",
    relatedTiles: ["dreams", "perspective"],
  },
  {
    id: "health-wellness",
    title: "Health and wellness trends of 2024",
    image: "/images/discover/4.webp",
    blocks: [
      {
        type: "text",
        content:
          "Keeping fit and healthy is one of the best things you can do for yourself, but it can sometimes feel tedious.",
      },
      {
        type: "text",
        content:
          "Shake up your routine by trying out some of these top 5 health and wellness trends for this year:",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Personalized wellness plans: As people become more aware of their individual health needs, personalized wellness plans that take into account factors like genetics, lifestyle, and personal preferences will become more common.",
          "Digital health tools: The use of digital tools and apps to track and monitor health metrics like heart rate, sleep patterns, and nutrition will continue to grow.",
          "Plant-based diets: As people become more conscious of the environmental impact of their food choices, plant-based diets are expected to become more popular.",
          "Mind-body practices: Practices like meditation, yoga, and mindfulness are expected to continue growing in popularity as people seek ways to reduce stress and improve mental well-being.",
          "Functional fitness: Workouts that focus on improving functional abilities like strength, balance, and flexibility will become more popular as people seek to maintain their health and independence as they age.",
        ],
      },
      {
        type: "text",
        content:
          "I hope you feel inspired to carry on in your journey to optimal health and well-being.",
      },
      {
        type: "text",
        content:
          "Are there any areas of healthy living you'd like to talk about more?",
      },
    ],
    references: [],
    relatedTiles: ["gut-health", "sleep-environment", "insomnia"],
  },
  {
    id: "dreams",
    title: "The real meaning behind your dreams",
    image: "/images/discover/2.webp",
    relatedTiles: ["colors", "perspective"],
  },
  {
    id: "translate",
    title: "Let me translate something",
    image: "/images/discover/3.webp",
    relatedTiles: ["language", "science"],
  },
  {
    id: "learn-new",
    title: "Learn about something new",
    image: "/images/discover/5.webp",
    relatedTiles: ["science", "tech-trends", "fascinating-facts"],
  },
  {
    id: "brainstorm",
    title: "Brainstorm ideas",
    image: "/images/discover/6.webp",
    relatedTiles: ["perspective", "manifest"],
  },
  {
    id: "perspective",
    title: "Shift your perspective",
    image: "/images/discover/7.webp",
    relatedTiles: ["brainstorm", "imposter-syndrome"],
  },
  {
    id: "riddles",
    title: "Can you answer these riddles?",
    image: "/images/discover/8.webp",
    relatedTiles: ["fascinating-facts"],
  },
  {
    id: "language",
    title: "Learn a new language with Pi",
    image: "/images/discover/9.webp",
    relatedTiles: ["translate"],
  },
  {
    id: "energy",
    title: "Have an energy boost on me",
    image: "/images/discover/10.webp",
    relatedTiles: ["health-wellness"],
  },
  {
    id: "attachment-style",
    title: "Learn your relationship attachment style",
    image: "/images/discover/11.webp",
    relatedTiles: ["love-language", "criticism"],
  },
  {
    id: "sleep-environment",
    title: "Perfect your sleeping environment",
    image: "/images/discover/12.webp",
    relatedTiles: ["insomnia", "health-wellness"],
  },
  {
    id: "love-language",
    title: "Quiz: what's my love language?",
    image: "/images/discover/13.webp",
    relatedTiles: ["attachment-style"],
  },
  {
    id: "criticism",
    title: "How to deal with criticism",
    image: "/images/discover/14.webp",
    relatedTiles: ["difficult-feedback", "imposter-syndrome"],
  },
  {
    id: "inbox-zero",
    title: "Get to inbox zero",
    image: "/images/discover/15.webp",
    relatedTiles: ["tech-trends"],
  },
  {
    id: "ted-talks",
    title: "Inspiring TED talks for you",
    image: "/images/discover/16.webp",
    relatedTiles: ["perspective", "science"],
  },
  {
    id: "explain-ai",
    title: "Explain generative AI like I'm 5",
    image: "/images/discover/17.webp",
    relatedTiles: ["tech-trends", "science"],
  },
  {
    id: "manifest",
    title: "Manifest your deepest desires",
    image: "/images/discover/18.webp",
    relatedTiles: ["perspective", "brainstorm"],
  },
  {
    id: "imposter-syndrome",
    title: "Don't let imposter syndrome get the best of you",
    image: "/images/discover/19.webp",
    relatedTiles: ["criticism", "difficult-feedback"],
  },
  {
    id: "science",
    title: "Let's talk science",
    image: "/images/discover/20.webp",
    relatedTiles: ["tech-trends", "fascinating-facts"],
  },
  {
    id: "insomnia",
    title: "Stop insomnia in its tracks",
    image: "/images/discover/21.webp",
    relatedTiles: ["sleep-environment", "health-wellness"],
  },
  {
    id: "difficult-feedback",
    title: "Top tips for giving difficult feedback",
    image: "/images/discover/22.webp",
    relatedTiles: ["criticism"],
  },
  {
    id: "fascinating-facts",
    title: "Five fascinating facts...",
    image: "/images/discover/23.webp",
    relatedTiles: ["science", "learn-new"],
  },
  {
    id: "tech-trends",
    title: "The latest trends in tech",
    image: "/images/discover/24.webp",
    relatedTiles: ["explain-ai", "science"],
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
