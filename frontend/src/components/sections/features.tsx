import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { Airplay, Mail, AlertTriangle, FileText } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Real-Time Flight Monitoring",
    content: "Track flight delays, cancellations, and predictions in real-time with Urgent Assist.",
    image: "/flight-monitoring.png",
    icon: <Airplay className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "AI-Powered Email Assistant",
    content: "Let Gradual Assist handle your flight-related emails, answering questions about delays and rebooking.",
    image: "/email-assistant.png",
    icon: <Mail className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Delay Prediction & Refund Estimates",
    content: "Automatically estimate refund options and receive alternative flight suggestions based on delays.",
    image: "/refund-estimate.png",
    icon: <AlertTriangle className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Automated Reporting",
    content: "Generate detailed reports of your flight history, delays, and compensation claims.",
    image: "/automated-reporting.png",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="Features" subtitle="Assistance and Automation for Travelers">
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
