import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Mail, AlertTriangle, DollarSign } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Predict: Get Real-Time Delay Predictions",
    content:
      "Our platform monitors your flights in real-time, predicting potential delays or cancellations. Instantly get updates on your current flight status and estimated refund options.",
    image: "/flight-delay.png",
    icon: <AlertTriangle className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Assist: Let the AI Manage Your Emails",
    content:
      "Our AI-powered email client reads your flight-related emails and provides relevant insights. You can ask about flight delays, cancellations, and rebooking options directly from the assistant.",
    image: "/email-assist.png",
    icon: <Mail className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Get Refund Estimates and Alternative Flights",
    content:
      "Whether it's a delay or cancellation, our platform helps you calculate potential refunds and suggests alternative flights, ensuring a smooth travel experience.",
    image: "/refund-estimate.png",
    icon: <DollarSign className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="How it works" subtitle="Assistance in 3 easy steps">
      <Features data={data} />
    </Section>
  );
}
