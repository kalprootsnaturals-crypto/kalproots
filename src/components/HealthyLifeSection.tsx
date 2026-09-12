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

                <div className="grid lg:grid-cols-2 gap-20">

                    {/* LEFT IMAGE */}
                    <div className="hidden lg:block">
                        <div className="sticky top-24">

                            <motion.div
                                initial={{ opacity: 0, scale: 0.92 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: .8 }}
                                className="relative overflow-hidden rounded-3xl shadow-2xl"
                            >
                                <img
                                    src="/moringa.jpeg"
                                    alt="Healthy Lifestyle"
                                    className="h-[700px] w-full object-cover"
                                />

                            </motion.div>

                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="space-y-36">

                        {sections.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ amount: .4 }}
                                transition={{ duration: .7 }}
                                className="min-h-[70vh] flex items-center"
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
                                            <CheckCircle2 className="text-primary w-6 h-6" />
                                            Premium Quality Ingredients
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <CheckCircle2 className="text-primary w-6 h-6" />
                                            Farm Fresh Production
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <CheckCircle2 className="text-primary w-6 h-6" />
                                            Rich in Natural Nutrients
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