import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "airlinedelay.lol",
  description: "Smart Delays, Smarter Rescheduling",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["SaaS", "Template", "Next.js", "React", "Tailwind CSS"],
  links: {
    email: "neilteje@gmail.com",
    twitter: "https://twitter.com/itsTeilio",
    discord: "https://discord.gg/VALORANT",
    github: "https://github.com/neilteje",
    instagram: "https://instagram.com/neilteje",
  },
  header: [
    {
      trigger: "Features",
      content: {
        main: {
          icon: <Icons.logo className="h-6 w-6" />,
          title: "AI-Enhanced Travel Management",
          description: "Predict delays, optimize rescheduling, and streamline flight assistance.",
          href: "#",
        },
        items: [
          {
            href: "#",
            title: "Real-Time Delay Predictions",
            description: "Stay ahead of delays with accurate, real-time flight predictions.",
          },
          {
            href: "#",
            title: "Automated Flight Rescheduling",
            description: "Seamlessly rebook your flights and minimize disruptions.",
          },
          {
            href: "#",
            title: "Compensation Claims Assistance",
            description: "Automatically calculate and file for flight delay compensation.",
          },
        ],
      },
    },  
    {
      trigger: "Solutions",
      content: {
        items: [
          {
            title: "For Frequent Travelers",
            href: "#",
            description: "Seamless rescheduling and compensation for frequent fliers.",
          },
          {
            title: "Corporate Travel",
            href: "#",
            description: "Efficient travel management for business travelers and enterprises.",
          },
          {
            title: "Airlines",
            href: "#",
            description: "Automated delay notifications and compensation solutions for airlines.",
          },
          {
            title: "Travel Agencies",
            href: "#",
            description: "Enhanced booking systems with real-time delay predictions.",
          },
          {
            title: "Airport Operations",
            href: "#",
            description: "Optimize flight rescheduling and passenger handling at airports.",
          },
          {
            title: "Logistics",
            href: "#",
            description:
              "Minimize disruptions in air cargo and logistics with predictive rescheduling.",
          },
        ],
      },
    },
    {
      href: "/blog",
      label: "Blog",
    },
  ],
  pricing: [
    {
      name: "BASIC",
      href: "#",
      price: "$9",
      period: "month",
      yearlyPrice: "$7",
      features: [
        "1 User",
        "Real-Time Delay Notifications",
        "Basic Rescheduling Assistance",
        "Email Support",
        "Standard Analytics",
      ],
      description: "Best for casual travelers",
      buttonText: "Subscribe",
      isPopular: false,
    },
    {
      name: "PRO",
      href: "#",
      price: "$29",
      period: "month",
      yearlyPrice: "$25",
      features: [
        "3 Users",
        "Real-Time Delay & Compensation Alerts",
        "Priority Rescheduling Assistance",
        "API Access",
        "Advanced Analytics",
      ],
      description: "Perfect for frequent travelers and small teams",
      buttonText: "Subscribe",
      isPopular: true,
    },
    {
      name: "ENTERPRISE",
      href: "#",
      price: "$79",
      period: "month",
      yearlyPrice: "$65",
      features: [
        "Unlimited Users",
        "Real-Time Delay, Compensation, and Rescheduling",
        "Custom API Integrations",
        "24/7 Premium Support",
        "AI-Powered Travel Insights",
      ],
      description: "Tailored for enterprises and corporate travel management",
      buttonText: "Subscribe",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "What is FlightAssist?",
      answer: (
        <span>
          FlightAssist is a platform that predicts flight delays, automates flight rescheduling, and assists with compensation claims. It helps travelers stay ahead of disruptions and minimizes the stress of flight delays.
        </span>
      ),
    },
    {
      question: "How do I get started with FlightAssist?",
      answer: (
        <span>
          You can get started by signing up for an account on our website. Once you're signed up, simply input your flight details, and FlightAssist will monitor for any delays and provide assistance when needed.
        </span>
      ),
    },
    {
      question: "How does FlightAssist predict flight delays?",
      answer: (
        <span>
          FlightAssist uses real-time data from various sources, including Flightradar24 and airline APIs, to predict flight delays based on factors like weather conditions, air traffic, and historical flight patterns.
        </span>
      ),
    },
    {
      question: "Can FlightAssist help me reschedule my flight?",
      answer: (
        <span>
          Yes, FlightAssist provides automated flight rescheduling options when delays or cancellations occur. It will offer alternative routes and flights, allowing you to choose the best option for your travel needs.
        </span>
      ),
    },
    {
      question: "What kind of support does FlightAssist provide?",
      answer: (
        <span>
          FlightAssist offers customer support via email, and premium users have access to priority support. We also provide detailed documentation and resources to help you get the most out of the platform.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { href: "#", text: "Features", icon: null },
        { href: "#", text: "Pricing", icon: null },
        { href: "#", text: "Documentation", icon: null },
        { href: "#", text: "API", icon: null },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", text: "About Us", icon: null },
        { href: "#", text: "Careers", icon: null },
        { href: "#", text: "Blog", icon: null },
        { href: "#", text: "Press", icon: null },
        { href: "#", text: "Partners", icon: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Community", icon: null },
        { href: "#", text: "Contact", icon: null },
        { href: "#", text: "Support", icon: null },
        { href: "#", text: "Status", icon: null },
      ],
    },
    {
      title: "Social",
      links: [
        {
          href: "#",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "#",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "#",
          text: "Youtube",
          icon: <FaYoutube />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
