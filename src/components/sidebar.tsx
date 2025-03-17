"use client";

import clsx from "clsx";

interface SidebarProps {
  activeView: "discover" | "threads" | "profile";
  toggleView: (view: "discover" | "threads" | "profile") => void;
}

//TODO: Make button reusable comp, handle gap-0.5/1.5 discrepancy
export default function Sidebar({ activeView, toggleView }: SidebarProps) {
  return (
    <div className="hidden w-22 text-neutral-900 bg-neutral-50 lg:flex flex-col items-center gap-1 p-3 pt-5 border-r border-neutral-300">
      <button
        onClick={() => toggleView("discover")}
        className={clsx(
          "flex h-16 w-16 flex-col items-center justify-center rounded-xl text-primary-900 cursor-pointer gap-0.5",
          {
            "bg-neutral-300": activeView === "discover",
            // TODO: Add hover classes
            "text-neutral-900 hover:bg-neutral-500 hover:text-neutral-900-hover active:bg-neutral-50-tap active:text-neutral-900-tap":
              activeView !== "discover",
          }
        )}
        aria-label="Go to Discover page"
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.3 5C8.90751 5 9.4 5.49249 9.4 6.1V7.2H10.5C11.1075 7.2 11.6 7.69249 11.6 8.3C11.6 8.90751 11.1075 9.4 10.5 9.4H9.4V10.5C9.4 11.1075 8.90751 11.6 8.3 11.6C7.69249 11.6 7.2 11.1075 7.2 10.5V9.4H6.1C5.49249 9.4 5 8.90751 5 8.3C5 7.69249 5.49249 7.2 6.1 7.2H7.2V6.1C7.2 5.49249 7.69249 5 8.3 5ZM17.1 5C17.5735 5 17.9938 5.30295 18.1435 5.7521L20.4922 12.797L26.2863 14.9701C26.7156 15.1311 27 15.5415 27 16C27 16.4585 26.7156 16.8689 26.2863 17.0299L20.4922 19.203L18.1435 26.2479C17.9938 26.697 17.5735 27 17.1 27C16.6265 27 16.2062 26.697 16.0565 26.2479L13.7078 19.203L7.91372 17.0299C7.48441 16.8689 7.2 16.4585 7.2 16C7.2 15.5415 7.48441 15.1311 7.91372 14.9701L13.7078 12.797L16.0565 5.7521C16.2062 5.30295 16.6265 5 17.1 5ZM9.4 20.4C10.0075 20.4 10.5 20.8925 10.5 21.5V22.6H11.6C12.2075 22.6 12.7 23.0925 12.7 23.7C12.7 24.3075 12.2075 24.8 11.6 24.8H10.5V25.9C10.5 26.5075 10.0075 27 9.4 27C8.79249 27 8.3 26.5075 8.3 25.9V24.8H7.2C6.59249 24.8 6.1 24.3075 6.1 23.7C6.1 23.0925 6.59249 22.6 7.2 22.6H8.3V21.5C8.3 20.8925 8.79249 20.4 9.4 20.4Z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="t-label font-normal">Discover</span>
      </button>

      <button
        onClick={() => toggleView("threads")}
        className={clsx(
          "flex h-16 w-16 flex-col items-center justify-center rounded-xl hover:bg-neutral-50 text-primary-900 cursor-pointer gap-1.5",
          {
            "bg-neutral-300": activeView === "threads",
            // TODO: Add hover classes
            "text-neutral-900 hover:bg-neutral-500 hover:text-neutral-900-hover active:bg-neutral-50-tap active:text-neutral-900-tap":
              activeView !== "threads",
          }
        )}
        aria-label="Go to Discover page"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
        >
          <path
            d="M2 6V20.6667C2 21.403 2.59695 22 3.33333 22H18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M7.14286 18L20.8571 18C21.4883 18 22 17.4883 22 16.8571L22 3.14286C22 2.51168 21.4883 2 20.8571 2L7.14286 2C6.51167 2 6 2.51168 6 3.14286L6 16.8571C6 17.4883 6.51167 18 7.14286 18Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 9H9V7H19V9Z"
            fill="currentColor"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 13H9V11H17V13Z"
            fill="currentColor"
          ></path>
          <path d="M19 9H9V7H19V9Z" fill="currentColor"></path>
          <path d="M9 13H17V11H9V13Z" fill="currentColor"></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.8571 1H7.14286C5.95939 1 5 1.95939 5 3.14286V16.8571C5 18.0406 5.95939 19 7.14286 19H20.8571C22.0406 19 23 18.0406 23 16.8571L23 3.14286C23 1.95939 22.0406 1 20.8571 1ZM7.14286 3L20.8571 3C20.936 3 21 3.06396 21 3.14286L21 16.8571C21 16.936 20.936 17 20.8571 17H7.14286C7.06396 17 7 16.936 7 16.8571V3.14286C7 3.06396 7.06396 3 7.14286 3Z"
            fill="currentColor"
          ></path>
          <path
            d="M3 6C3 5.44772 2.55228 5 2 5C1.44772 5 1 5.44772 1 6V20.6667C1 21.9553 2.04467 23 3.33333 23H18C18.5523 23 19 22.5523 19 22C19 21.4477 18.5523 21 18 21H3.33333C3.14924 21 3 20.8508 3 20.6667V6Z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="t-label font-normal">Threads</span>
      </button>

      <button
        onClick={() => toggleView("profile")}
        className={clsx(
          "flex h-16 w-16 flex-col items-center justify-center rounded-xl hover:bg-neutral-50 text-primary-900 cursor-pointer gap-1.5",
          {
            "bg-neutral-300": activeView === "profile",
            // TODO: Add hover classes
            "text-neutral-900 hover:bg-neutral-500 hover:text-neutral-900-hover active:bg-neutral-50-tap active:text-neutral-900-tap":
              activeView !== "profile",
          }
        )}
        aria-label="Go to Profile page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d="M12 12C10.9 12 9.95833 11.6083 9.175 10.825C8.39167 10.0417 8 9.1 8 8C8 6.9 8.39167 5.95833 9.175 5.175C9.95833 4.39167 10.9 4 12 4C13.1 4 14.0417 4.39167 14.825 5.175C15.6083 5.95833 16 6.9 16 8C16 9.1 15.6083 10.0417 14.825 10.825C14.0417 11.6083 13.1 12 12 12ZM18 20H6C5.45 20 4.97933 19.8043 4.588 19.413C4.196 19.021 4 18.55 4 18V17.2C4 16.6333 4.146 16.1123 4.438 15.637C4.72933 15.1623 5.11667 14.8 5.6 14.55C6.63333 14.0333 7.68333 13.6457 8.75 13.387C9.81667 13.129 10.9 13 12 13C13.1 13 14.1833 13.129 15.25 13.387C16.3167 13.6457 17.3667 14.0333 18.4 14.55C18.8833 14.8 19.2707 15.1623 19.562 15.637C19.854 16.1123 20 16.6333 20 17.2V18C20 18.55 19.8043 19.021 19.413 19.413C19.021 19.8043 18.55 20 18 20Z"></path>
        </svg>
        <span className="t-label font-normal">Profile</span>
      </button>
    </div>
  );
}
