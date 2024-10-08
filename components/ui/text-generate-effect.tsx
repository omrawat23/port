"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  delay,
  textColor,
}: {
  words: string;
  className?: string;
  delay: number;
  textColor: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    // Ensure animate function is called correctly
    if (scope.current) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(delay),
        }
      );
    }
  }, [scope, animate, delay]); // Add scope, animate, and delay to the dependency array

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={cn("opacity-0", textColor)}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-zinc-200 text-black text-3xl md:text-5xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
