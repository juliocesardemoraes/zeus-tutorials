import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const MotionCard = motion(Card);

export default function CardAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  const resetAnimation = () => {
    setIsVisible(false);
    setTimeout(() => setIsVisible(true), 500);
  };

  return (
    <>
      <Button onClick={resetAnimation} className="mb-4">
        Reiniciar Animação
      </Button>
      <AnimatePresence>
        {isVisible && (
          <MotionCard
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: "easeOut",
              },
            }}
            exit={{
              opacity: 0,
              y: 100,
              transition: {
                duration: 0.5,
                ease: "easeIn",
              },
            }}
          >
            <CardHeader>
              <CardTitle className="text-2xl">Animação de Card</CardTitle>
              <CardDescription>
                Demonstração de animação de entrada com Framer Motion
              </CardDescription>
            </CardHeader>
          </MotionCard>
        )}
      </AnimatePresence>
    </>
  );
}
