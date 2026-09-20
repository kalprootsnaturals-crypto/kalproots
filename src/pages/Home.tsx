import React from "react";
import { Link } from "wouter";
import { useTranslation } from "@/i18n";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/SectionWrapper";
import {
  Leaf,
  FlaskConical,
  Sparkles,
  Microscope,
  Star,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* LANDSCAPE IMAGE STORY SECTION */}
      <section className="bg-background pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionWrapper>
            <div
              className="
          group
          relative
          w-full
          overflow-hidden
          rounded-2xl
          sm:rounded-3xl
          aspect-[16/9]
          md:aspect-[21/9]
          shadow-lg
        "
            >
              {/* Landscape Image */}
              {/* Mobile */}
              <img
                src="/kalp_mobile.jpeg"
                alt="Fresh moringa leaves in nature"
                className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    object-center
    transition-transform
    duration-1000
    ease-out
    group-hover:scale-105
    block md:hidden
  "
              />

              {/* Desktop */}
              <img
                src="/kalp_desktop.jpeg"
                alt="Fresh moringa leaves in nature"
                className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    object-center
    transition-transform
    duration-1000
    ease-out
    group-hover:scale-105
    hidden md:block
  "
              />
            </div>
          </SectionWrapper>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background pt-8 pb-20 md:pt-12 md:pb-32">
        {/* <GreetingBanner /> */}

        {/* Floating leaf background shapes */}
        <div className="absolute top-20 left-10 opacity-20 transform -rotate-45">
          <Leaf className="w-24 h-24 text-primary" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 transform rotate-45">
          <Leaf className="w-40 h-40 text-primary" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center mt-12 md:mt-20">
          <SectionWrapper>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
              {t("hero.tagline")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/products" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-white hover:text-primary cursor-pointer rounded-full text-base px-8 h-14"
                >
                  {t("hero.cta_shop")}
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full  cursor-pointer rounded-full text-base px-8 h-14"
                >
                  {t("hero.cta_story")}
                </Button>
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* <HealthyLifeSection /> */}

      {/* WHY CHOOSE SECTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionWrapper className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              {t("why.title")}
            </h2>
            <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full"></div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "why.c1_title", desc: "why.c1_desc" },
              {
                icon: FlaskConical,
                title: "why.c2_title",
                desc: "why.c2_desc",
              },
              { icon: Microscope, title: "why.c5_title", desc: "why.c5_desc" },
              // { icon: Star, title: 'why.c6_title', desc: 'why.c6_desc' }
            ].map((feature, i) => (
              <SectionWrapper key={i} className="h-full">
                <div className="bg-card border border-border/50 rounded-2xl p-6 h-full hover-elevate transition-all duration-300 flex flex-col items-center text-center group hover:border-primary/30">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t(feature.title)}</h3>
                  <p className="text-muted-foreground">{t(feature.desc)}</p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PRODUCTS (PREVIEW) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionWrapper className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                {t("products.title")}
              </h2>
              <div className="w-24 h-1 bg-primary/20 rounded-full"></div>
            </div>
            <Link
              href="/products"
              className="group flex items-center gap-2 text-primary font-medium mt-6 md:mt-0"
            >
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 - Moringa */}
            <SectionWrapper>
              <div className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover-elevate transition-all duration-300 h-full flex flex-col">
                <div className="h-64 bg-linear-to-br from-primary/20 to-secondary/30 relative flex items-center justify-center p-6 overflow-hidden">
                  <img
                    src="/moringa_pro.jpeg"
                    alt="Moringa Powder"
                    className="w-full h-auto object-contain max-h-40 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-bold mb-2">
                    {t("products.moringa_name")}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 grow">
                    {t("products.moringa_desc")}
                  </p>
                  <Link href="/products/moringa-powder">
                    <Button className="w-full rounded-full cursor-pointer">
                      {t("products.buy_now")}
                    </Button>
                  </Link>
                </div>
              </div>
            </SectionWrapper>

            {/* Product 2 - Dhoop */}
            <SectionWrapper>
              <div className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover-elevate transition-all duration-300 h-full flex flex-col opacity-80">
                <div className="h-64 bg-gradient-to-br from-accent/20 to-orange-100 dark:to-orange-900/20 relative flex items-center justify-center p-6 overflow-hidden">
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                    {t("products.coming_soon")}
                  </div>
                  <Sparkles className="w-20 h-20 text-accent relative z-10" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-foreground/80">
                    {t("products.dhoop_name")}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    {t("products.dhoop_desc")}
                  </p>
                  <Button
                    disabled
                    variant="outline"
                    className="w-full rounded-full "
                  >
                    {t("products.coming_soon")}
                  </Button>
                </div>
              </div>
            </SectionWrapper>

            {/* Product 3 - Amla */}
            <SectionWrapper>
              <div className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover-elevate transition-all duration-300 h-full flex flex-col opacity-80">
                <div className="h-64 bg-gradient-to-br from-green-200/50 to-emerald-100 dark:to-emerald-900/20 relative flex items-center justify-center p-6 overflow-hidden">
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                    {t("products.coming_soon")}
                  </div>
                  <div className="w-20 h-20 rounded-full border-4 border-green-600/30 flex items-center justify-center relative z-10">
                    <Leaf className="w-10 h-10 text-green-700/60" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-foreground/80">
                    {t("products.amla_name")}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    {t("products.amla_desc")}
                  </p>
                  <Button
                    disabled
                    variant="outline"
                    className="w-full rounded-full"
                  >
                    {t("products.coming_soon")}
                  </Button>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform -rotate-12 translate-x-1/4 -translate-y-1/4">
          <Leaf className="w-96 h-96" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <SectionWrapper className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Customer Love
            </h2>
            <div className="w-24 h-1 bg-primary-foreground/20 mx-auto rounded-full"></div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Pure quality! I've been taking moringa for 2 months and feel so much more energetic.",
                name: "Priya S.",
                loc: "Delhi",
              },
              {
                text: "Finally a brand I trust. No artificial anything. Highly recommend!",
                name: "Rahul M.",
                loc: "Mumbai",
              },
              {
                text: "The packaging is fresh and the product is genuinely good. My whole family uses it now.",
                name: "Anita K.",
                loc: "Bangalore",
              },
            ].map((review, i) => (
              <SectionWrapper key={i} className="h-full">
                <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 p-8 rounded-2xl h-full flex flex-col">
                  <div className="flex text-accent mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg italic mb-6 flex-grow leading-relaxed">
                    "{review.text}"
                  </p>
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-primary-foreground/70 text-sm">
                      {review.loc}
                    </p>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="pt-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionWrapper>
            <div className="bg-secondary/30 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold">
                  {t("about.title")}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t("about.story_text")}
                </p>
                <ul className="space-y-3 pt-4">
                  {[
                    "Sourced from the finest farms",
                    "No artificial colors or preservatives",
                    "Hygienically processed and packed",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-foreground font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Link href="/about">
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full"
                    >
                      Read Full Story
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 w-full flex justify-center relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="
      w-full
      max-w-[387px]
      lg:max-w-[430px]
      overflow-hidden
      rounded-3xl
      shadow-2xl
    "
                >
                  <img
                    src="/kalp-roots-wellness.jpeg"
                    alt="Kalp Roots"
                    className="block w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section>

      <section className="py-6 md:py-20 bg-background">
        <SectionWrapper className="container mx-auto px-4 md:px-6">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src="/kalp-roots-footer.jpeg"
              alt="Kalp Roots — Rooted in Nature, Committed to Wellness"
              className="w-full h-auto block"
            />
          </div>
        </SectionWrapper>
      </section>
    </div>
  );
}
