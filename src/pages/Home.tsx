import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from '@/i18n';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/SectionWrapper';
import HealthyLifeSection from "@/components/HealthyLifeSection";
import {
  Leaf, FlaskConical, Sparkles, ShieldCheck, Microscope, Star,
  Zap, Wind, Dumbbell, Bone, Droplets, Smile, Scale, Sun,
  CheckCircle2, ArrowRight
} from 'lucide-react';


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
              <img
                src="/kalp-root-landscape.jpeg"
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
              {t('hero.tagline')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/products" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-primary hover:bg-white hover:text-primary cursor-pointer rounded-full text-base px-8 h-14">
                  {t('hero.cta_shop')}
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full  cursor-pointer rounded-full text-base px-8 h-14">
                  {t('hero.cta_story')}
                </Button>
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section>

      <HealthyLifeSection />

      {/* WHY CHOOSE SECTION */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <SectionWrapper className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t('why.title')}</h2>
            <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full"></div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: 'why.c1_title', desc: 'why.c1_desc' },
              { icon: FlaskConical, title: 'why.c2_title', desc: 'why.c2_desc' },
              { icon: Sparkles, title: 'why.c3_title', desc: 'why.c3_desc' },
              { icon: ShieldCheck, title: 'why.c4_title', desc: 'why.c4_desc' },
              { icon: Microscope, title: 'why.c5_title', desc: 'why.c5_desc' },
              { icon: Star, title: 'why.c6_title', desc: 'why.c6_desc' }
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

      {/* HEALTH BENEFITS SECTION */}
      <section className="py-20 bg-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <SectionWrapper className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t('benefits.title')}</h2>
            <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full"></div>
          </SectionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Zap, title: 'benefits.b1_title', desc: 'benefits.b1_desc' },
              { icon: Wind, title: 'benefits.b2_title', desc: 'benefits.b2_desc' },
              { icon: ShieldCheck, title: 'benefits.b3_title', desc: 'benefits.b3_desc' },
              { icon: Dumbbell, title: 'benefits.b4_title', desc: 'benefits.b4_desc' },
              { icon: Bone, title: 'benefits.b5_title', desc: 'benefits.b5_desc' },
              { icon: Droplets, title: 'benefits.b6_title', desc: 'benefits.b6_desc' },
              { icon: Sparkles, title: 'benefits.b7_title', desc: 'benefits.b7_desc' },
              { icon: Smile, title: 'benefits.b8_title', desc: 'benefits.b8_desc' },
              { icon: Scale, title: 'benefits.b9_title', desc: 'benefits.b9_desc' },
              { icon: Sun, title: 'benefits.b10_title', desc: 'benefits.b10_desc' }
            ].map((benefit, i) => (
              <SectionWrapper key={i} className="h-full">
                <div className="bg-background rounded-xl p-5 h-full border border-transparent hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <benefit.icon className="w-6 h-6 text-primary mb-4" />
                  <h4 className="font-bold mb-2 text-foreground">{t(benefit.title)}</h4>
                  <p className="text-sm text-muted-foreground">{t(benefit.desc)}</p>
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
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{t('products.title')}</h2>
              <div className="w-24 h-1 bg-primary/20 rounded-full"></div>
            </div>
            <Link href="/products" className="group flex items-center gap-2 text-primary font-medium mt-6 md:mt-0">
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 - Moringa */}
            <SectionWrapper>
              <div className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover-elevate transition-all duration-300 h-full flex flex-col">
                <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/30 relative flex items-center justify-center p-6 overflow-hidden">
                  <div className="w-40 h-40 bg-white/50 rounded-full blur-2xl absolute"></div>
                  <Leaf className="w-24 h-24 text-primary relative z-10 drop-shadow-md group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{t('products.moringa_name')}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">100% natural, premium quality Sahjan leaf powder.</p>
                  <Link href="/products/moringa-powder">
                    <Button className="w-full rounded-full">{t('products.buy_now')}</Button>
                  </Link>
                </div>
              </div>
            </SectionWrapper>

            {/* Product 2 - Dhoop */}
            <SectionWrapper>
              <div className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover-elevate transition-all duration-300 h-full flex flex-col opacity-80">
                <div className="h-64 bg-gradient-to-br from-accent/20 to-orange-100 dark:to-orange-900/20 relative flex items-center justify-center p-6 overflow-hidden">
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                    {t('products.coming_soon')}
                  </div>
                  <Sparkles className="w-20 h-20 text-accent relative z-10" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-foreground/80">{t('products.dhoop_name')}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">Traditional natural wellness incense.</p>
                  <Button disabled variant="outline" className="w-full rounded-full">{t('products.coming_soon')}</Button>
                </div>
              </div>
            </SectionWrapper>

            {/* Product 3 - Amla */}
            <SectionWrapper>
              <div className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover-elevate transition-all duration-300 h-full flex flex-col opacity-80">
                <div className="h-64 bg-gradient-to-br from-green-200/50 to-emerald-100 dark:to-emerald-900/20 relative flex items-center justify-center p-6 overflow-hidden">
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                    {t('products.coming_soon')}
                  </div>
                  <div className="w-20 h-20 rounded-full border-4 border-green-600/30 flex items-center justify-center relative z-10">
                    <Leaf className="w-10 h-10 text-green-700/60" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-foreground/80">{t('products.amla_name')}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow">Pure Indian gooseberry powder.</p>
                  <Button disabled variant="outline" className="w-full rounded-full">{t('products.coming_soon')}</Button>
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
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Customer Love</h2>
            <div className="w-24 h-1 bg-primary-foreground/20 mx-auto rounded-full"></div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Pure quality! I've been taking moringa for 2 months and feel so much more energetic.", name: "Priya S.", loc: "Delhi" },
              { text: "Finally a brand I trust. No artificial anything. Highly recommend!", name: "Rahul M.", loc: "Mumbai" },
              { text: "The packaging is fresh and the product is genuinely good. My whole family uses it now.", name: "Anita K.", loc: "Bangalore" }
            ].map((review, i) => (
              <SectionWrapper key={i} className="h-full">
                <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 p-8 rounded-2xl h-full flex flex-col">
                  <div className="flex text-accent mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="text-lg italic mb-6 flex-grow leading-relaxed">"{review.text}"</p>
                  <div>
                    <p className="font-bold">{review.name}</p>
                    <p className="text-primary-foreground/70 text-sm">{review.loc}</p>
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
                <h2 className="text-3xl md:text-4xl font-serif font-bold">{t('about.title')}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {t('about.story_text')}
                </p>
                <ul className="space-y-3 pt-4">
                  {[
                    "Sourced from the finest farms",
                    "No artificial colors or preservatives",
                    "Hygienically processed and packed"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-6">
                  <Link href="/about">
                    <Button variant="outline" size="lg" className="rounded-full">Read Full Story</Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 w-full flex justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/10 rounded-full blur-3xl transform scale-75"></div>
                <div className="w-64 h-64 md:w-80 md:h-80 bg-background border-8 border-border rounded-full flex items-center justify-center relative z-10 shadow-xl overflow-hidden">
                  <Leaf className="w-32 h-32 text-primary" />
                </div>
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
