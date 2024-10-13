import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Clock, FileWarning } from "lucide-react";

const problems = [
  {
    title: "Frequent Flight Delays",
    description:
      "Passengers are constantly frustrated by unpredictable flight delays, causing missed connections and disrupted travel plans.",
    icon: AlertCircle,
  },
  {
    title: "Inefficient Rescheduling",
    description:
      "Manually searching for alternative flights after delays wastes time, leaving passengers stranded or with poor travel options.",
    icon: Clock,
  },
  {
    title: "Complicated Compensation Claims",
    description:
      "Navigating compensation policies and filing claims for delayed flights is confusing and time-consuming, with many passengers missing out on compensation they deserve.",
    icon: FileWarning,
  },
];

export default function Component() {
  return (
    <Section
      title="Problem"
      subtitle="Flight delays are causing chaos for travelers."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
