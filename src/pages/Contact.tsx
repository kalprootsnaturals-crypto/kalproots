import React from 'react';
import { useTranslation } from '@/i18n';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();

  const handleWhatsApp = () => {
    window.open(`https://wa.me/918826671629`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    toast({
      title: "Success",
      description: t('contact.success'),
      duration: 5000,
    });
    form.reset();
  };

  return (
    <div className="flex flex-col min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">

        <SectionWrapper className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t('contact.title')}</h1>
          <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </SectionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <SectionWrapper>
            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-center">
              <h2 className="text-2xl font-serif font-bold mb-8">{t('contact.get_in_touch')}</h2>

              <div className="space-y-8 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t('common.phone')}</h3>
                    <p className="text-muted-foreground">{t('contact.phone')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t('common.email')}</h3>
                    <p className="text-muted-foreground">{t('contact.email')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{t('common.location')}</h3>
                    <p className="text-muted-foreground">Village and Post Kharusa, Orai , District Jalaun, Uttar Pradesh (India)
                      285001</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-primary/10">
                <Button size="lg" className="w-full sm:w-auto rounded-full text-base px-8 h-14 gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white" onClick={handleWhatsApp}>
                  <SiWhatsapp className="w-6 h-6" />
                  {t('contact.whatsapp')}
                </Button>
              </div>
            </div>
          </SectionWrapper>

          {/* Contact Form */}
          <SectionWrapper>
            <div className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-sm h-full">
              <h2 className="text-2xl font-serif font-bold mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">{t('contact.name_label')}</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">{t('contact.email_label')}</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">{t('contact.message_label')}</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full rounded-xl gap-2">
                  <Send className="w-4 h-4" />
                  {t('contact.send')}
                </Button>
              </form>
            </div>
          </SectionWrapper>
        </div>

      </div>
    </div>
  );
}
