import React from 'react';
import { Link } from 'wouter';
import { useTranslation } from '@/i18n';
import { Leaf, Instagram, Facebook, Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';


export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary/5 border-t border-primary/10 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/3 -translate-y-1/3">
        <Leaf className="w-96 h-96 text-primary" />

      </div>


      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-primary mb-4">
              {/* <Leaf className="h-8 w-8" /> */}
              <img src="/logo_bg_remove.png" alt="Kalp Roots Logo" className="h-6 md:h-8" />
              <span className="font-serif font-bold text-2xl"></span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <SiWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t('nav.home')}</Link></li>
              <li><Link href="/products" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t('nav.products')}</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t('nav.about')}</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t('nav.faq')}</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary text-sm transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="font-bold text-foreground mb-4">{t('contact.title')}</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="font-medium text-foreground">Email:</span> kalprootsnaturals@gmail.com
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="font-medium text-foreground">Phone:</span> +91 88266 71629
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">{t('footer.privacy')}</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
