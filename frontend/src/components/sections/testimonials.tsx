"use client";

import Marquee from "@/components/magicui/marquee";
import Section from "@/components/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "bg-primary/20 p-1 py-0.5 font-bold text-primary dark:bg-primary/20 dark:text-primary",
        className
      )}
    >
      {children}
    </span>
  );
};

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export const TestimonialCard = ({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) => (
  <div
    className={cn(
      "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
      // light styles
      " border border-neutral-200 bg-white",
      // dark styles
      "dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props} // Spread the rest of the props here
  >
    <div className="select-none text-sm font-normal text-neutral-700 dark:text-neutral-400">
      {description}
      <div className="flex flex-row py-1">
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
        <Star className="size-4 text-yellow-500 fill-yellow-500" />
      </div>
    </div>

    <div className="flex w-full select-none items-center justify-start gap-5">
      <Image
        width={40}
        height={40}
        src={img || ""}
        alt={name}
        className="h-10 w-10 rounded-full ring-1 ring-border ring-offset-4"
      />

      <div>
        <p className="font-medium text-neutral-500">{name}</p>
        <p className="text-xs font-normal text-neutral-400">{role}</p>
      </div>
    </div>
  </div>
);

const testimonials = [
  {
    name: "James Norbel",
    role: "Frequent Business Traveler",
    img: "https://randomuser.me/api/portraits/men/50.jpg",
    description: (
      <p>
        Using #FlightFixer has saved me countless hours. I used to miss
        connections all the time due to delays, but now I get rescheduled on
        the spot.
        <Highlight>
          My travel stress has been cut in half.
        </Highlight>
        A must-have for frequent travelers.
      </p>
    ),
  },
  {
    name: "Elon Musk",
    role: "Product Manager at Tesla",
    img: "https://randomuser.me/api/portraits/women/34.jpg",
    description: (
      <p>
        #SkyShift’s delay predictions are spot-on! I never have to wait at the
        airport anymore, and the compensation filing is super easy.
        <Highlight>
          I get notifications and alternatives before the airline even informs
          me.
        </Highlight>
        Highly recommended!
      </p>
    ),
  },
  {
    name: "Rishabh Jain",
    role: "CEO at LogisticsPro",
    img: "https://randomuser.me/api/portraits/men/30.jpg",
    description: (
      <p>
        As someone managing multiple locations, #AirFlow has been a lifesaver.
        Our employees get real-time rerouting, ensuring our operations run
        smoothly despite flight delays.
        <Highlight>
          We’ve reduced downtime and travel disruption by 40%.
        </Highlight>
        Fantastic tool for businesses!
      </p>
    ),
  },
  {
    name: "Eshana Jain",
    role: "Travel Blogger",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
    description: (
      <p>
        #FlightFixer has transformed my travel planning. I love that I don’t
        need to worry about last-minute changes.
        <Highlight>
          It automatically reschedules my flights and handles compensation, all
          while I’m busy exploring.
        </Highlight>
        Perfect for adventurers like me.
      </p>
    ),
  },
  {
    name: "Eshan Jain",
    role: "Operations Manager at TechCo",
    img: "https://randomuser.me/api/portraits/men/35.jpg",
    description: (
      <p>
        Implementing #SkySync for our corporate travel has improved our
        efficiency. Delays are handled proactively, and our staff gets real-time
        updates on rerouting and compensation.
        <Highlight>
          It has revolutionized how we handle travel disruptions.
        </Highlight>
        I can’t recommend it enough.
      </p>
    ),
  },
  {
    name: "Lisa Davis",
    role: "Family Traveler",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    description: (
      <p>
        Traveling with kids is stressful enough. #SkyShift made sure my family
        was automatically rebooked after our flight was canceled.
        <Highlight>
          No waiting in long lines at the airport anymore!
        </Highlight>{" "}
        An amazing tool for families.
      </p>
    ),
  },
];

export default function Testimonials() {
  return (
    <Section
      title="Testimonials"
      subtitle="What our customers are saying"
      className="max-w-8xl"
    >
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
    </Section>
  );
}
