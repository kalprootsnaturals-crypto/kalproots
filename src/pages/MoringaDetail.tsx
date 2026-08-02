import React from 'react';
import { useTranslation } from '@/i18n';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/SectionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Leaf, CheckCircle2, ShieldCheck, Sun, Star } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function MoringaDetail() {
  const { t } = useTranslation();

  const handleBuyWhatsApp = () => {
    const message = "Hi Kalp Roots! I want to order Premium Moringa Powder.";
    window.open(`https://wa.me/918826671629?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Product Visual */}
          <SectionWrapper>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/40 rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden border border-border/50 shadow-sm">
              <div className="w-full h-full bg-white/40 blur-3xl absolute rounded-full"></div>

              <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6 p-8 bg-background/40 backdrop-blur-sm rounded-full border border-white/20 aspect-square w-3/4 max-w-sm shadow-xl">
                <Leaf className="w-24 h-24 text-primary drop-shadow-md" />
                <div>
                  <h3 className="font-serif font-bold text-2xl text-primary mb-1">Kalp Roots</h3>
                  <p className="text-sm font-medium text-primary/80 uppercase tracking-widest">Premium Quality</p>
                </div>
              </div>
            </div>
          </SectionWrapper>

          {/* Product Info */}
          <SectionWrapper>
            <div className="flex flex-col h-full justify-center">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Star className="w-4 h-4 fill-current" />
                  100% Natural
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t('products.moringa_name')}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Experience the power of the "Miracle Tree". Our Premium Moringa Powder is made from carefully selected, shade-dried Sahjan leaves to preserve maximum nutritional value. A natural, plant-based superfood to support your daily wellness journey.
                </p>
              </div>

              <div className="space-y-6 mb-8">
                <h3 className="font-bold text-xl">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "100% Pure & Natural",
                    "No Preservatives",
                    "Shade-Dried Leaves",
                    "Rich in Antioxidants",
                    "Vegan & Gluten-Free",
                    "Lab Tested Quality",
                    "Supports Immunity",
                    "Natural Energy Booster"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-border">
                <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-8 h-14 gap-3" onClick={handleBuyWhatsApp}>
                  <SiWhatsapp className="w-5 h-5" />
                  Buy via WhatsApp
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  Clicking will open WhatsApp to place your order directly with our team.
                </p>
              </div>
            </div>
          </SectionWrapper>
        </div>

        {/* Nutritional Highlights & Usage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <SectionWrapper>
            <div className="bg-card border border-border/50 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-primary" />
                Nutritional Highlights
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground mb-6">Moringa is recognized globally as a nutritional powerhouse. Our powder is naturally rich in:</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary/30 p-4 rounded-xl">
                    <span className="block font-bold text-primary mb-1">Calcium</span>
                    <span className="text-sm text-muted-foreground">For strong bones</span>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-xl">
                    <span className="block font-bold text-primary mb-1">Iron</span>
                    <span className="text-sm text-muted-foreground">For healthy blood</span>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-xl">
                    <span className="block font-bold text-primary mb-1">Potassium</span>
                    <span className="text-sm text-muted-foreground">For muscle function</span>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-xl">
                    <span className="block font-bold text-primary mb-1">Fibre</span>
                    <span className="text-sm text-muted-foreground">For digestion</span>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-xl">
                    <span className="block font-bold text-primary mb-1">Vitamin A</span>
                    <span className="text-sm text-muted-foreground">For skin & vision</span>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-xl">
                    <span className="block font-bold text-primary mb-1">Antioxidants</span>
                    <span className="text-sm text-muted-foreground">For cellular health</span>
                  </div>
                </div>
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper>
            <div className="bg-card border border-border/50 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-serif font-bold mb-6 flex items-center gap-3">
                <Sun className="w-6 h-6 text-primary" />
                How to Use & Store
              </h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-lg mb-3">Daily Usage</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      <span>Mix ½ to 1 teaspoon (2-4g) in lukewarm water.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      <span>Blend into smoothies, juices, or shakes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      <span>Sprinkle over salads, soups, or mixed into dough.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                      <span>Best consumed in the morning or mid-day for an energy boost.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg mb-3">Storage Instructions</h4>
                  <p className="text-muted-foreground">
                    Store in a cool, dry place away from direct sunlight. Keep the container tightly closed after every use to prevent moisture absorption and maintain freshness.
                  </p>
                </div>
              </div>
            </div>
          </SectionWrapper>
        </div>

        {/* FAQs */}
        <SectionWrapper>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-10">Product FAQs</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-medium">{t('faq.q1')}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {t('faq.a1')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-medium">{t('faq.q2')}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {t('faq.a2')}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-medium">{t('faq.q3')}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {t('faq.a3')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </SectionWrapper>

      </div>
    </div>
  );
}
