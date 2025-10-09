import React from "react";
import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
} from "lucide-react";



// Stats Data
export const statsData = [
  {
    value: "10K+",
    label: "Active Users",
  },
  {
    value: "2M+",
    label: "Outfits Styled",
  },
  {
    value: "500K+",
    label: "Wardrobe Items Scanned",
  },
  {
    value: "4.9/5",
    label: "User Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Personal Style Analytics",
    description:
      "Understand your most-worn items and color palettes to refine your unique style.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "AI Wardrobe Scanner",
    description:
      "Simply snap photos of your clothes, and our AI will automatically tag and organize them for you.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Smart Closet Curation",
    description:
      "Discover gaps in your wardrobe and get smart suggestions for new pieces that complete your look.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "Occasion-Based Planning",
    description:
      "Sync your calendar to get outfit suggestions tailored for work, weekends, and special events.",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Weather-Aware Styling",
    description:
      "Get daily outfit recommendations based on your local weather forecast, so you're always prepared.",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Trend Integration",
    description:
      "Stay ahead of the curve. Our AI incorporates the latest fashion trends into your daily outfit suggestions.",
  },
];

// How It Works Data
export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Digitize Your Wardrobe",
    description:
      "Upload photos of your clothes. Our AI does the rest, creating your virtual closet in minutes.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Sync Your Life",
    description:
      "Connect your calendar and set your style preferences so we know what you're dressing for.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Get Daily Outfits",
    description:
      "Receive personalized, weather-appropriate outfit recommendations in your inbox every morning.",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Alex Carter",
    role: "Busy Professional",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    quote:
      "This app has been a lifesaver. I no longer waste time staring at my closet in the morning. I just pick one of the amazing outfits suggested for my day!",
  },
  {
    name: "Jamie Lee",
    role: "Fashion Enthusiast",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
    quote:
      "I thought I knew my wardrobe, but the AI stylist showed me combinations I never would have thought of. It's like having a personal stylist in my pocket.",
  },
  {
    name: "Casey Williams",
    role: "Student",
    image: "https://randomuser.me/api/portraits/women/85.jpg",
    quote:
      "The suggestions for new pieces are genius. It helped me build a versatile wardrobe on a budget by showing me exactly what I was missing. Highly recommend!",
  },
];


// --- Landing Page Component ---

const landing = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <div className="container mx-auto px-6 py-12">
        {/* You can add a Hero Section here */}
        
        {/* --- Stats Section --- */}
        <section className="py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statsData.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
                <p className="text-gray-500 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-12" />

        {/* --- Features Section --- */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-10">Unlock Your Style Potential</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-12" />

        {/* --- How It Works Section --- */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-10">Get Styled in 3 Easy Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {howItWorksData.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-full shadow-md mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-12" />

        {/* --- Testimonials Section --- */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-10">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <blockquote className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default landing;