import React from "react";
import { useTranslation } from "@/i18n";
import { SectionWrapper } from "@/components/SectionWrapper";
import {
    Leaf,
    ShieldCheck,
    FileText,
    ShoppingBag,
    CreditCard,
    Truck,
    RotateCcw,
    AlertCircle,
    Scale,
    Mail,
} from "lucide-react";

export default function Terms() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col min-h-screen pt-20 bg-background">
            {/* HERO */}
            <section className="relative overflow-hidden bg-linear-to-b from-primary/10 to-background py-20 md:py-28">
                {/* Decorative leaves */}
                <div className="absolute top-10 left-5 md:left-16 opacity-10 -rotate-45 pointer-events-none">
                    <Leaf className="w-40 h-40 md:w-64 md:h-64 text-primary" />
                </div>

                <div className="absolute bottom-0 right-5 md:right-16 opacity-10 rotate-45 pointer-events-none">
                    <Leaf className="w-32 h-32 md:w-56 md:h-56 text-primary" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <SectionWrapper className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5">
                            <FileText className="w-4 h-4" />
                            {t("terms.badge")}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
                            {t("terms.title")}
                        </h1>

                        <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full mb-7" />

                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            {t("terms.intro")}
                        </p>
                    </SectionWrapper>
                </div>
            </section>

            {/* TERMS CONTENT */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="space-y-8">

                        {/* 1. About Kalp Roots */}
                        <SectionWrapper>
                            <div className="bg-card border border-border/50 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <Leaf className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <span className="text-sm font-medium text-primary">
                                            01
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                            {t("terms.about_title")}
                                        </h2>
                                    </div>
                                </div>

                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>{t("terms.about_p1")}</p>
                                    <p>{t("terms.about_p2")}</p>
                                </div>
                            </div>
                        </SectionWrapper>

                        {/* 2. Use of Website */}
                        <SectionWrapper>
                            <div className="bg-card border border-border/50 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <ShieldCheck className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <span className="text-sm font-medium text-primary">
                                            02
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                            {t("terms.website_title")}
                                        </h2>
                                    </div>
                                </div>

                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>{t("terms.website_p1")}</p>

                                    <ul className="space-y-3 pl-1">
                                        <li className="flex gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{t("terms.website_b1")}</span>
                                        </li>

                                        <li className="flex gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{t("terms.website_b2")}</span>
                                        </li>

                                        <li className="flex gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{t("terms.website_b3")}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SectionWrapper>

                        {/* 3. Products */}
                        <SectionWrapper>
                            <div className="bg-card border border-border/50 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <ShoppingBag className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <span className="text-sm font-medium text-primary">
                                            03
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                            {t("terms.products_title")}
                                        </h2>
                                    </div>
                                </div>

                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>{t("terms.products_p1")}</p>
                                    <p>{t("terms.products_p2")}</p>
                                </div>
                            </div>
                        </SectionWrapper>

                        {/* 4. Orders & Payments */}
                        <SectionWrapper>
                            <div className="bg-card border border-border/50 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <CreditCard className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <span className="text-sm font-medium text-primary">
                                            04
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                            {t("terms.payment_title")}
                                        </h2>
                                    </div>
                                </div>

                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>{t("terms.payment_p1")}</p>
                                    <p>{t("terms.payment_p2")}</p>
                                </div>
                            </div>
                        </SectionWrapper>

                        {/* 5. Shipping */}
                        <SectionWrapper>
                            <div className="bg-card border border-border/50 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <Truck className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <span className="text-sm font-medium text-primary">
                                            05
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                            {t("terms.shipping_title")}
                                        </h2>
                                    </div>
                                </div>

                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>{t("terms.shipping_p1")}</p>
                                    <p>{t("terms.shipping_p2")}</p>
                                </div>
                            </div>
                        </SectionWrapper>

                        {/* 6. Returns */}
                        <SectionWrapper>
                            <div className="bg-card border border-border/50 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <RotateCcw className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <span className="text-sm font-medium text-primary">
                                            06
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                            {t("terms.returns_title")}
                                        </h2>
                                    </div>
                                </div>

                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>{t("terms.returns_p1")}</p>
                                    <p>{t("terms.returns_p2")}</p>
                                </div>
                            </div>
                        </SectionWrapper>

                        {/* 7. Product Information */}
                        <SectionWrapper>
                            <div className="bg-card border border-border/50 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <AlertCircle className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <span className="text-sm font-medium text-primary">
                                            07
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                            {t("terms.product_info_title")}
                                        </h2>
                                    </div>
                                </div>

                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>{t("terms.product_info_p1")}</p>
                                    <p>{t("terms.product_info_p2")}</p>
                                </div>
                            </div>
                        </SectionWrapper>

                        {/* 8. Intellectual Property */}
                        <SectionWrapper>
                            <div className="bg-card border border-border/50 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <FileText className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <span className="text-sm font-medium text-primary">
                                            08
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                            {t("terms.intellectual_title")}
                                        </h2>
                                    </div>
                                </div>

                                <p className="text-muted-foreground leading-relaxed">
                                    {t("terms.intellectual_p1")}
                                </p>
                            </div>
                        </SectionWrapper>

                        {/* 9. Liability */}
                        <SectionWrapper>
                            <div className="bg-card border border-border/50 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <Scale className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <span className="text-sm font-medium text-primary">
                                            09
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                            {t("terms.liability_title")}
                                        </h2>
                                    </div>
                                </div>

                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>{t("terms.liability_p1")}</p>
                                    <p>{t("terms.liability_p2")}</p>
                                </div>
                            </div>
                        </SectionWrapper>

                        {/* 10. Changes */}
                        <SectionWrapper>
                            <div className="bg-card border border-border/50 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <FileText className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <span className="text-sm font-medium text-primary">
                                            10
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                            {t("terms.changes_title")}
                                        </h2>
                                    </div>
                                </div>

                                <p className="text-muted-foreground leading-relaxed">
                                    {t("terms.changes_p1")}
                                </p>
                            </div>
                        </SectionWrapper>

                        {/* 11. Contact */}
                        <SectionWrapper>
                            <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-12">
                                <div className="absolute -right-10 -bottom-16 opacity-10">
                                    <Leaf className="w-64 h-64" />
                                </div>

                                <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
                                    <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
                                        <Mail className="w-7 h-7" />
                                    </div>

                                    <div>
                                        <span className="text-sm text-primary-foreground/70">
                                            11
                                        </span>

                                        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-3">
                                            {t("terms.contact_title")}
                                        </h2>

                                        <p className="text-primary-foreground/80 leading-relaxed">
                                            {t("terms.contact_p1")}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SectionWrapper>

                    </div>

                    {/* Bottom Note */}
                    <SectionWrapper className="text-center mt-12">
                        <p className="text-sm text-muted-foreground">
                            {t("terms.last_updated")}
                        </p>
                    </SectionWrapper>
                </div>
            </section>
        </div>
    );
}