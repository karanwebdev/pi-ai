import Link from "next/link";

export default function ProfileSection() {
  return (
    <div className="h-full p-4 border-r border-[#e0dcc8]">
      <h1 className="text-xl font-serif text-[#2d3c2d] mb-4">Karan</h1>
      <div className="space-y-2">
        <Link
          href="/profile/account"
          className="flex items-center justify-between p-3 hover:bg-[#e8e4d4] rounded-lg cursor-pointer"
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-[#2d3c2d]">Account</span>
          </div>
          <span>›</span>
        </Link>
        <Link
          href="/profile/manage-history"
          className="flex items-center justify-between p-3 hover:bg-[#e8e4d4] rounded-lg cursor-pointer"
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-[#2d3c2d]">Manage history</span>
          </div>
          <span>›</span>
        </Link>
        <Link
          href="/profile/voice-settings"
          className="flex items-center justify-between p-3 hover:bg-[#e8e4d4] rounded-lg cursor-pointer"
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            <span className="text-[#2d3c2d]">Voice settings</span>
          </div>
          <span>›</span>
        </Link>

        <div className="pt-4 mt-4 border-t border-[#e0dcc8]">
          <Link
            href="#"
            className="flex items-center justify-between p-3 hover:bg-[#e8e4d4] rounded-lg cursor-pointer"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-[#2d3c2d]">Give feedback</span>
            </div>
            <span>›</span>
          </Link>

          <Link
            href="#"
            className="flex items-center justify-between p-3 hover:bg-[#e8e4d4] rounded-lg cursor-pointer"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span className="text-[#2d3c2d]">Share Pi with others</span>
            </div>
            <span>›</span>
          </Link>

          <Link
            href="#"
            className="flex items-center justify-between p-3 hover:bg-[#e8e4d4] rounded-lg cursor-pointer"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              <span className="text-[#2d3c2d]">Join our Discord community</span>
            </div>
            <span>›</span>
          </Link>
        </div>

        <div className="pt-4 mt-4 border-t border-[#e0dcc8]">
          <Link
            href="#"
            className="flex items-center justify-between p-3 hover:bg-[#e8e4d4] rounded-lg cursor-pointer"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-[#2d3c2d]">Privacy policy</span>
            </div>
            <span>›</span>
          </Link>

          <Link
            href="#"
            className="flex items-center justify-between p-3 hover:bg-[#e8e4d4] rounded-lg cursor-pointer"
          >
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-[#2d3c2d]">Terms of service</span>
            </div>
            <span>›</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
