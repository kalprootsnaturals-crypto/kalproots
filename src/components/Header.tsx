import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { useTranslation } from '@/i18n';
import { Button } from '@/components/ui/button';
import { Leaf, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('kalp-lang', newLang);
  };

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/products', label: t('nav.products') },
    { href: '/about', label: t('nav.about') },
    { href: '/faq', label: t('nav.faq') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-90 transition-opacity">
          {/* <Leaf className="h-6 w-6 md:h-8 md:w-8" /> */}
          <img src="/logo_bg_remove.png" alt="Kalp Roots Logo" className="h-6 md:h-8" />
          <span className="font-serif font-bold text-xl md:text-2xl tracking-tight"></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-colors text-foreground/80 hover:text-primary">
              {link.label}
            </Link>
          ))}
          <Button variant="outline" size="sm" onClick={toggleLanguage} className="rounded-full px-4 ml-2 border-primary/20 text-primary hover:bg-primary/5 cursor-pointer">
            EN | हिं
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <Button variant="ghost" size="sm" onClick={toggleLanguage} className="rounded-full text-primary">
            EN | हिं
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border/50 shadow-lg py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium py-2 border-b border-border/30 last:border-0 text-foreground/90 hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
