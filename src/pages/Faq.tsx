import React from 'react';
import { useTranslation } from '@/i18n';
import { SectionWrapper } from '@/components/SectionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleQuestion } from 'lucide-react';

export default function Faq() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen pt-28 pb-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        <SectionWrapper className="text-center mb-16">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircleQuestion className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t('faq.title')}</h1>
          <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('faq.subtitle')}
          </p>
        </SectionWrapper>

        <SectionWrapper>
          <div className="max-w-3xl mx-auto bg-card border border-border/50 rounded-2xl p-6 md:p-10 shadow-sm">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-border/50 px-4 rounded-lg bg-background data-[state=open]:border-primary/30 transition-colors">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">{t('faq.q1')}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                  {t('faq.a1')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border/50 px-4 rounded-lg bg-background data-[state=open]:border-primary/30 transition-colors">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">{t('faq.q2')}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                  {t('faq.a2')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border/50 px-4 rounded-lg bg-background data-[state=open]:border-primary/30 transition-colors">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">{t('faq.q3')}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                  {t('faq.a3')}
                </AccordionContent>
              </AccordionItem>


              <AccordionItem value="item-3" className="border border-border/50 px-4 rounded-lg bg-background data-[state=open]:border-primary/30 transition-colors">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">{t('faq.q4')}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                  {t('faq.a4')}
                </AccordionContent>
              </AccordionItem>


              <AccordionItem value="item-3" className="border border-border/50 px-4 rounded-lg bg-background data-[state=open]:border-primary/30 transition-colors">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">{t('faq.q5')}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                  {t('faq.a5')}
                </AccordionContent>
              </AccordionItem>


              <AccordionItem value="item-3" className="border border-border/50 px-4 rounded-lg bg-background data-[state=open]:border-primary/30 transition-colors">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">{t('faq.q6')}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                  {t('faq.a6')}
                </AccordionContent>
              </AccordionItem>


              <AccordionItem value="item-3" className="border border-border/50 px-4 rounded-lg bg-background data-[state=open]:border-primary/30 transition-colors">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">{t('faq.q7')}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                  {t('faq.a7')}
                </AccordionContent>
              </AccordionItem>


              <AccordionItem value="item-3" className="border border-border/50 px-4 rounded-lg bg-background data-[state=open]:border-primary/30 transition-colors">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">{t('faq.q8')}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                  {t('faq.a8')}
                </AccordionContent>
              </AccordionItem>


              <AccordionItem value="item-3" className="border border-border/50 px-4 rounded-lg bg-background data-[state=open]:border-primary/30 transition-colors">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">{t('faq.q9')}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                  {t('faq.a9')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border/50 px-4 rounded-lg bg-background data-[state=open]:border-primary/30 transition-colors">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline">{t('faq.q10')}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                  {t('faq.a10')}
                </AccordionContent>
              </AccordionItem>


            </Accordion>
          </div>
        </SectionWrapper>

      </div>
    </div>
  );
}
