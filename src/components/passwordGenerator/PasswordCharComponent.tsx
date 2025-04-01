import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

export default function PasswordCharComponent() {
  const [password, setPassword] = useState("");

  const passwordCharVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let newPassword = "";

    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomIndex];
    }

    setPassword(newPassword);
  };

  useEffect(() => {
    generatePassword();
  }, []);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">
          Animação de Caracteres de Senha
        </CardTitle>
        <CardDescription>Animando caracteres individuais</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="font-mono text-base h-10 px-3 py-2 rounded-md border border-input bg-background flex items-center overflow-hidden">
          <AnimatePresence mode="popLayout">
            {/*ADMIN - "A" "D" "M" "I" "N" */}

            {password.split("").map((char, index) => (
              <motion.span
                key={index + char}
                variants={passwordCharVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              >
                {char}
              </motion.span>
            ))}
          </AnimatePresence>
        </div>

        <div>
          <p className="text-sm mb-2">Conceitos-chave:</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>
              Animação com <code>delay: index * 0.03</code>
            </li>
            <li>
              Física de mola com <code>type: "spring"</code>
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={generatePassword} className="w-full">
          <RefreshCw className="mr-2 h-4 w-4" />
          Gerar Nova Senha
        </Button>
      </CardFooter>
    </Card>
  );
}
