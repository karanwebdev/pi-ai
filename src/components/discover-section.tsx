import { MessageCircle } from "lucide-react";

interface DiscoverCardProps {
  title: string;
  image?: string;
  backgroundColor?: string;
  textColor?: string;
  size?: "small" | "medium" | "large";
}

function DiscoverCard({
  title,
  image,
  backgroundColor = "#f0ece0",
  textColor = "#2d3c2d",
  size = "medium",
}: DiscoverCardProps) {
  const sizeClasses = {
    small: "h-40",
    medium: "h-56",
    large: "h-72",
  };

  return (
    <div
      className={`rounded-lg overflow-hidden relative ${sizeClasses[size]} w-full cursor-pointer transition-transform hover:scale-[1.02]`}
      style={{
        backgroundColor: !image ? backgroundColor : undefined,
        backgroundImage: image ? `url(${image})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {image && <div className="absolute inset-0 bg-black bg-opacity-30"></div>}
      <div
        className={`p-4 absolute bottom-0 left-0 right-0 ${
          image ? "text-white" : ""
        }`}
        style={{ color: image ? "white" : textColor }}
      >
        <h3 className="font-medium text-lg">{title}</h3>
      </div>
    </div>
  );
}

export default function DiscoverSection() {
  return (
    <div className="h-full overflow-auto p-4 border-r border-[#e0dcc8]">
      <div className="mb-6">
        <div className="bg-white rounded-lg p-4 border border-[#e0dcc8] mb-4">
          <div className="flex items-start mb-2">
            <div className="bg-[#f0ece0] p-2 rounded-full mr-3">
              <MessageCircle className="h-5 w-5 text-[#2d3c2d]" />
            </div>
            <div>
              <h3 className="text-lg text-[#2d3c2d] font-alpina-condensed text-h-l">
                Download your Pi conversation history
              </h3>
              <p className="text-sm text-[#5a6b5a] mt-1">Manage history</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 auto-rows-min">
        <div className="grid-item">
          <DiscoverCard
            title="Let's talk science"
            image="/placeholder.svg?height=300&width=300"
            size="small"
          />
        </div>

        <div className="grid-item">
          <DiscoverCard
            title="Win your next debate"
            image="/placeholder.svg?height=300&width=300"
            size="small"
          />
        </div>

        <div className="grid-item">
          <DiscoverCard
            title="Get started with journaling"
            backgroundColor="#f8e9d2"
            size="small"
          />
        </div>

        <div className="grid-item">
          <DiscoverCard
            title="Show your partner you care"
            image="/placeholder.svg?height=400&width=400"
            size="large"
          />
        </div>

        <div className="grid-item">
          <DiscoverCard
            title="Mindfulness techniques"
            backgroundColor="#d2e0f8"
            size="medium"
          />
        </div>

        <div className="grid-item">
          <DiscoverCard
            title="Creative writing prompts"
            backgroundColor="#e9d2f8"
            size="medium"
          />
        </div>

        <div className="grid-item">
          <DiscoverCard
            title="Book recommendations"
            backgroundColor="#d2f8e9"
            size="small"
          />
        </div>

        <div className="grid-item">
          <DiscoverCard
            title="Healthy meal planning"
            image="/placeholder.svg?height=300&width=300"
            size="medium"
          />
        </div>
      </div>
    </div>
  );
}
