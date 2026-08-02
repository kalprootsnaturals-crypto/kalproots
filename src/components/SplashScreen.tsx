import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "kalp-roots-splash";

export default function SplashScreen() {
    const [visible, setVisible] = useState(false);
    const [step, setStep] = useState(0);

    useEffect(() => {
        const alreadySeen = sessionStorage.getItem(SESSION_KEY);

        if (alreadySeen) return;

        setVisible(true);
        sessionStorage.setItem(SESSION_KEY, "true");

        const greetingTimer = setTimeout(() => {
            setStep(1);
        }, 1000);

        const hideTimer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => {
            clearTimeout(greetingTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    if (!visible) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
            <AnimatePresence mode="wait">
                <motion.h1
                    key={step}
                    initial={{
                        opacity: 0,
                        scale: 0.92
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1
                    }}
                    exit={{
                        opacity: 0,
                        scale: 1.08
                    }}
                    transition={{
                        duration: 0.6
                    }}
                    className="font-black tracking-[0.12em]
                     text-primary
                     text-6xl
                     sm:text-7xl
                     md:text-8xl
                     lg:text-9xl"
                >
                    {step === 0 ? "Hello" : "नमस्ते"}
                </motion.h1>
            </AnimatePresence>
        </motion.div>
    );
}