import React from 'react';
import { useTranslation } from '@/i18n';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Leaf, Target, Heart } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <SectionWrapper className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t('about.title')}</h1>
            <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full"></div>
          </SectionWrapper>

          <SectionWrapper>
            <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-sm text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>
                {t('about.story_text')}
              </p>
              <p>
                At Kalp Roots, we believe that wellness begins with quality, authenticity, and trust. Our flagship product, Premium Moringa Powder, represents our commitment to these values. Often referred to as the "Miracle Tree", Moringa has been a staple in traditional Indian wellness for centuries.
              </p>
              <p>
                We partner with dedicated farmers who understand the soil and respect the environment. Every batch of our product is carefully processed—shade-dried and hygienically ground—to ensure that the vibrant green color, potent nutrients, and natural aroma are preserved just as nature intended.
              </p>
              <div className="pt-8 text-center">
                <p className="font-serif text-2xl text-primary font-bold italic">
                  "From Nature to Wellness"
                </p>
              </div>
            </div>
          </SectionWrapper>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <SectionWrapper>
            <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-3xl p-10 h-full text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-serif font-bold mb-4">{t('about.vision_title')}</h2>
              <p className="text-muted-foreground">
                To be the most trusted natural wellness brand, inspiring people to embrace a healthier lifestyle through pure, plant-based nutrition rooted in traditional wisdom.
              </p>
            </div>
          </SectionWrapper>

          <SectionWrapper>
            <div className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 rounded-3xl p-10 h-full text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-serif font-bold mb-4">{t('about.mission_title')}</h2>
              <p className="text-muted-foreground">
                To deliver uncompromising quality by sourcing the finest natural ingredients, avoiding all artificial additives, and maintaining transparent, ethical practices from farm to family.
              </p>
            </div>
          </SectionWrapper>
        </div>

      </div>
    </div>
  );
}
