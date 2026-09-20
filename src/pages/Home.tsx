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
import {
  Heart,
  ShieldCheck,
  Sprout,
  PackageCheck,
  Sun,
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

            </div>
          </SectionWrapper>
        </div>
      </section>

      {/* THE KALP ROOTS STORY */}
      <section className="relative overflow-hidden bg-secondary/20 py-20 md:py-28">
        {/* Decorative background elements */}
        <div className="absolute -top-20 -left-20 opacity-[0.05] pointer-events-none">
          <Leaf className="w-80 h-80 text-primary" />
        </div>

        <div className="absolute -bottom-20 -right-20 opacity-[0.05] pointer-events-none">
          <Sprout className="w-80 h-80 text-primary" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Heading */}
          <SectionWrapper className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
              <Leaf className="w-4 h-4" />
              The Kalp Roots Story
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              From Nature to{" "}
              <span className="text-primary">Wellness</span>
            </h2>

            <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full mb-7" />

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Kalp Roots is a natural wellness brand built around a simple
              thought — <span className="font-semibold text-foreground">
                “From Nature to Wellness.”
              </span>{" "}
              Our purpose is to bring thoughtfully selected, quality-focused
              natural products into everyday life, while keeping purity,
              authenticity and care at the heart of everything we do.
            </p>
          </SectionWrapper>

          {/* Story Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* ROOTED IN NATURE */}
            <SectionWrapper className="h-full">
              <div className="group h-full bg-background rounded-3xl border border-border/50 p-7 md:p-9 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Leaf className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif font-bold">
                    Rooted in Nature
                  </h3>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Nature has always been a source of nourishment, tradition
                    and wellbeing. Across generations, people have relied on
                    naturally sourced ingredients as part of their everyday
                    lifestyle.
                  </p>

                  <p>
                    At Kalp Roots, we take inspiration from this timeless
                    connection and work towards creating products that fit
                    naturally into modern living.
                  </p>

                  <p>
                    Our journey begins with carefully selected ingredients and
                    a commitment to maintaining their natural goodness. From
                    sourcing to packaging, we focus on quality and hygiene so
                    that what reaches you is handled with the care it deserves.
                  </p>
                </div>
              </div>
            </SectionWrapper>

            {/* SIMPLE PRODUCTS */}
            <SectionWrapper className="h-full">
              <div className="group h-full bg-background rounded-3xl border border-border/50 p-7 md:p-9 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif font-bold">
                    Simple Products.
                    <br className="hidden sm:block" />
                    Thoughtful Choices.
                  </h3>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We believe wellness does not have to be complicated.
                    Sometimes, the simplest choices can become meaningful
                    parts of our daily routine.
                  </p>

                  <p>
                    Our product range is designed with this philosophy in
                    mind. We focus on natural and traditional ingredients that
                    people can easily incorporate into their lifestyle.
                  </p>

                  <p>
                    Each product is created with attention to quality,
                    presentation and everyday usability. We aim to make natural
                    products accessible while maintaining the standards that
                    our customers expect from a modern wellness brand.
                  </p>
                </div>

                <div className="mt-7 flex items-center gap-3 rounded-2xl bg-primary/5 border border-primary/10 p-4">
                  <PackageCheck className="w-6 h-6 text-primary shrink-0" />

                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Our Current Offering
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Premium Moringa Powder, with more natural products
                      thoughtfully planned for the future.
                    </p>
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* QUALITY */}
            <SectionWrapper className="h-full">
              <div className="group h-full bg-primary text-primary-foreground rounded-3xl p-7 md:p-9 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute -right-12 -bottom-16 opacity-10 pointer-events-none">
                  <ShieldCheck className="w-64 h-64" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                      <ShieldCheck className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif font-bold">
                      Quality at Every Step
                    </h3>
                  </div>

                  <div className="space-y-4 text-primary-foreground/80 leading-relaxed">
                    <p>
                      For us, quality is more than a statement on a package.
                      It is a responsibility.
                    </p>

                    <p>
                      We pay attention to the journey of our products — from
                      selecting suitable raw materials to hygienic processing,
                      careful packing and responsible presentation.
                    </p>

                    <p>
                      We believe that transparency and consistency are
                      essential to building lasting trust with our customers.
                    </p>
                  </div>

                  <div className="mt-7 space-y-3">
                    {[
                      "Choose carefully",
                      "Handle responsibly",
                      "Deliver with care",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm font-medium"
                      >
                        <CheckCircle2 className="w-5 h-5 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionWrapper>

            {/* TRADITION */}
            <SectionWrapper className="h-full">
              <div className="group h-full bg-background rounded-3xl border border-border/50 p-7 md:p-9 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Sun className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif font-bold">
                    Inspired by Tradition,
                    <br className="hidden sm:block" />
                    Made for Today
                  </h3>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Kalp Roots respects the wisdom of traditional natural
                    living while embracing the expectations of today’s
                    consumers.
                  </p>

                  <p>
                    We want our products to feel authentic and rooted in
                    nature, yet convenient and relevant to modern lifestyles.
                  </p>

                  <p>
                    Whether it is adding natural ingredients to your daily
                    routine or choosing products inspired by traditional
                    practices, our goal is to make the experience simple,
                    reliable and meaningful.
                  </p>
                </div>

                <div className="mt-7 rounded-2xl bg-secondary/50 p-5 flex items-center gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sprout className="w-5 h-5 text-primary" />
                  </div>

                  <p className="text-sm font-medium text-foreground">
                    Natural living, thoughtfully brought into everyday life.
                  </p>
                </div>
              </div>
            </SectionWrapper>
          </div>

          {/* Closing Message */}
          <SectionWrapper className="mt-8 md:mt-12">
            <div className="rounded-3xl bg-background border border-primary/10 p-8 md:p-12 text-center shadow-sm">
              <Leaf className="w-8 h-8 text-primary mx-auto mb-5" />

              <p className="text-xl md:text-2xl lg:text-3xl font-serif font-semibold leading-relaxed max-w-3xl mx-auto">
                Thoughtfully rooted in nature.
                <br />
                <span className="text-primary">
                  Made for modern wellness.
                </span>
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section>


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
                {/* <ul className="space-y-3 pt-4">
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
                </ul> */}
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
