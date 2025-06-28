import { IoShieldOutline, IoEyeOutline } from "react-icons/io5";
import { IoTrendingUp } from "react-icons/io5";
import { FiZap, FiSmartphone, FiGlobe } from "react-icons/fi";
import { IoSearch, IoSettingsOutline } from "react-icons/io5";
import { FaRegStar, FaRegClock } from "react-icons/fa";
export const newsCategories = [
  { name: `business`, id: 1 },
  { name: `entertainment`, id: 2 },
  { name: `general`, id: 3 },
  { name: `health`, id: 4 },
  { name: `science`, id: 5 },
  { name: `sports`, id: 6 },
  { name: `technology`, id: 7 },
];
export const features = [
  {
    icon: IoTrendingUp,
    title: "Trending News",
    description:
      "Discover the most popular and viral stories of the moment. Stay ahead of the curve with what everyone is talking about.",
    colorClass: "bg-feature-red",
    benefits: [
      "Real-time trending analysis",
      "Social media integration",
      "Viral story detection",
      "Global trend tracking",
    ],
  },
  {
    icon: FiGlobe,
    title: "Categories",
    description:
      "Explore news by specific topics including Business, Technology, Sports, and more. Find exactly what interests you.",
    colorClass: "bg-feature-blue",
    benefits: [
      "15+ news categories",
      "Expert curation",
      "Topic-specific insights",
      "Custom category creation",
    ],
  },
  {
    icon: IoSearch,
    title: "Advanced Search",
    description:
      "Find specific articles with powerful search filters. Search by keywords, date range, source, and category.",
    colorClass: "bg-feature-green",
    benefits: [
      "Smart search algorithms",
      "Advanced filtering",
      "Date range selection",
      "Source-specific search",
    ],
  },
  {
    icon: FaRegStar,
    title: "Bookmark",
    description:
      "Save articles to read later. Your personal collection of interesting stories is always accessible.",
    colorClass: "bg-feature-yellow",
    benefits: [
      "Unlimited bookmarks",
      "Organized collections",
      "Cross-device sync",
      "Quick access",
    ],
  },
  {
    icon: FaRegClock,
    title: "Recent Articles",
    description:
      "Keep track of what you've read. Your reading history helps you find articles you viewed before.",
    colorClass: "bg-feature-purple",
    benefits: [
      "Complete reading history",
      "Smart recommendations",
      "Reading analytics",
      "Quick re-access",
    ],
  },
  {
    icon: IoSettingsOutline,
    title: "Personalization",
    description:
      "Customize your news experience. Adjust preferences, manage notifications, and set your reading preferences.",
    colorClass: "bg-feature-gray",
    benefits: [
      "Custom preferences",
      "Notification control",
      "Theme selection",
      "Reading settings",
    ],
  },
];

export const stats = [
  {
    number: "10K+",
    label: "Daily Articles",
    description: "Fresh content updated every minute",
  },
  {
    number: "50+",
    label: "News Sources",
    description: "Trusted publishers worldwide",
  },
  {
    number: "24/7",
    label: "Real-time Updates",
    description: "Never miss breaking news",
  },
  {
    number: "1M+",
    label: "Happy Readers",
    description: "Join our growing community",
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Analyst",
    avatar: "👩‍💼",
    quote:
      "NewsHub has revolutionized how I stay informed. The trending section helps me catch stories before they go viral.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Tech Entrepreneur",
    avatar: "👨‍💻",
    quote:
      "The advanced search and bookmark features are game-changers. I can find and save exactly what I need.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Marketing Director",
    avatar: "👩‍🎨",
    quote:
      "Love the personalization options! The app learns my preferences and shows me the most relevant news.",
    rating: 5,
  },
];

export const whyChooseUs = [
  {
    icon: IoShieldOutline,
    title: "Trusted Sources",
    description:
      "We partner only with verified, credible news organizations to ensure accuracy and reliability.",
  },
  {
    icon: FiZap,
    title: "Lightning Fast",
    description:
      "Our optimized platform delivers news faster than ever, with instant loading and smooth navigation.",
  },
  {
    icon: IoEyeOutline,
    title: "Ad-Free Experience",
    description:
      "Focus on what matters most - the news. No distracting ads or intrusive pop-ups.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Optimized",
    description:
      "Perfect experience across all devices. Read news seamlessly on phone, tablet, or desktop.",
  },
];

export const newsCategoriesLandingPage = [
  { name: "Business", icon: "📈", count: "2.5K articles" },
  { name: "Technology", icon: "💻", count: "3.2K articles" },
  { name: "Sports", icon: "⚽", count: "1.8K articles" },
  { name: "Health", icon: "🏥", count: "1.5K articles" },
  { name: "Entertainment", icon: "🎬", count: "2.1K articles" },
  { name: "Science", icon: "🔬", count: "900 articles" },
];
