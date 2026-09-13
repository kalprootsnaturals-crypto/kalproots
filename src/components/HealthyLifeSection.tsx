import { motion } from "framer-motion";
import { Link } from "wouter";
import {
    ArrowRight,
    CheckCircle2,
    Leaf,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const sections = [
    {
        title: "Pure From Nature",
        description:
            "Every leaf is carefully harvested from premium farms to preserve maximum nutrition and purity.",
    },
    {
        title: "Powerful Nutrition",
        description:
            "Rich in vitamins, minerals, antioxidants and plant protein to support your daily wellness journey.",
    },
    {
        title: "Boost Everyday Health",
        description:
            "Supports immunity, energy, digestion and overall vitality without artificial additives.",
    },
    {
        title: "100% Natural",
        description:
            "No chemicals. No preservatives. Only clean, naturally processed Moringa goodness.",
    },
];

export default function HealthyLifeSection() {
    return (
        <section className="bg-background py-24">
            <div className="container mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    {/* LEFT IMAGE */}
                    <div className="w-full">
                        <div className="lg:sticky lg:top-24">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.96 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="
          relative
          w-full
          overflow-hidden
          rounded-3xl
          shadow-2xl
          bg-muted
        "
                            >
                                <img
                                    src="/kalp-roots-natural.jpeg"
                                    alt="Healthy Lifestyle"
                                    className="
            block
            w-full
            h-auto
            max-h-[700px]
            object-contain
            lg:object-cover
            lg:object-top
          "
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="space-y-20 lg:space-y-36">

                        {sections.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.4 }}
                                transition={{ duration: 0.7 }}
                                className="
          min-h-0
          lg:min-h-[70vh]
          flex
          items-center
        "
                            >
                                <div>

                                    <div className="text-primary font-semibold uppercase tracking-[0.3em] mb-4">
                                        0{index + 1}
                                    </div>

                                    <h3 className="text-4xl lg:text-5xl font-bold mb-8">
                                        {item.title}
                                    </h3>

                                    <p className="text-muted-foreground text-lg leading-9 mb-10">
                                        {item.description}
                                    </p>

                                    <div className="space-y-5 mb-10">

                                        <div className="flex items-center gap-4">
                                            <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                                            <span>Premium Quality Ingredients</span>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                                            <span>Farm Fresh Production</span>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                                            <span>Rich in Natural Nutrients</span>
                                        </div>

                                    </div>

                                    {index === sections.length - 1 && (
                                        <Link href="/products">
                                            <Button
                                                size="lg"
                                                className="rounded-full px-8"
                                            >
                                                Shop Collection
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                    )}

                                </div>
                            </motion.div>
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}