import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from '@/i18n';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Leaf, Sparkles } from 'lucide-react';

export default function Products() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">

        <SectionWrapper className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t('products.title')}</h1>
          <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('products.desc')}
          </p>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product 1 - Moringa */}
          <SectionWrapper>
            <div className="group bg-card rounded-2xl border border-border/50 overflow-hidden hover-elevate transition-all duration-300 h-full flex flex-col">
              <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/30 relative flex items-center justify-center p-6 overflow-hidden">
                <img src="/moringa_pro.jpeg" alt="Moringa Powder" className="w-full h-auto object-contain max-h-40 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{t('products.moringa_name')}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {t('products.moringa_desc')}
                </p>
                <Link href="/products/moringa-powder">
                  <Button className="w-full rounded-full cursor-pointer">{t('products.buy_now')}</Button>
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
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {t('products.product_dhoop_desc')}
                </p>
                <Button disabled variant="outline" className="w-full rounded-full cursor-not-allowed">{t('products.coming_soon')}</Button>
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
                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {t('products.product_amla_desc')}
                </p>
                <Button disabled variant="outline" className="w-full rounded-full ">{t('products.coming_soon')}</Button>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
}
