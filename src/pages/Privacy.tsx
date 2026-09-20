import React from "react";
import { useTranslation } from "@/i18n";
import { SectionWrapper } from "@/components/SectionWrapper";
import {
    Leaf,
    ShieldCheck,
    UserRound,
    Database,
    ShoppingBag,
    Cookie,
    LockKeyhole,
    Share2,
    UserCheck,
    Mail,
    FileText,
} from "lucide-react";

export default function PrivacyPolicy() {
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
                            <ShieldCheck className="w-4 h-4" />
                            {t("privacy.badge")}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
                            {t("privacy.title")}
                        </h1>

                        <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full mb-7" />

                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            {t("privacy.intro")}
                        </p>

                    </SectionWrapper>
                </div>
            </section>

            {/* PRIVACY CONTENT */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">

                    <div className="space-y-8">

                        {/* 01 - About Privacy */}
                        <SectionWrapper>
                            <div className="bg-card border border-border/50 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-md transition-shadow">

                                <div className="flex items-start gap-4 mb-6">

                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <ShieldCheck className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <span className="text-sm font-medium text-primary">
                                            01
                                        </span>

                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                            {t("privacy.about_title")}
                                        </h2>
                                    </div>

                                </div>

                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>{t("privacy.about_p1")}</p>
                                    <p>{t("privacy.about_p2")}</p>
                                </div>

                            </div>
                        </SectionWrapper>


                        {/* 02 - Information We Collect */}
                        <SectionWrapper>
                            <div className="bg-card border border-border/50 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-md transition-shadow">

                                <div className="flex items-start gap-4 mb-6">

                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <Database className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <span className="text-sm font-medium text-primary">
                                            02
                                        </span>

                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                            {t("privacy.collect_title")}
                                        </h2>
                                    </div>

                                </div>

                                <div className="space-y-5 text-muted-foreground leading-relaxed">

                                    <p>{t("privacy.collect_intro")}</p>

                                    <ul className="space-y-3">

                                        <li className="flex gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{t("privacy.collect_b1")}</span>
                                        </li>

                                        <li className="flex gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{t("privacy.collect_b2")}</span>
                                        </li>

                                        <li className="flex gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{t("privacy.collect_b3")}</span>
                                        </li>

                                        <li className="flex gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{t("privacy.collect_b4")}</span>
                                        </li>

                                    </ul>

                                </div>

                            </div>
                        </SectionWrapper>


                        {/* 03 - How We Use Information */}
                        <SectionWrapper>
                            <div className="bg-card border border-border/50 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-md transition-shadow">

                                <div className="flex items-start gap-4 mb-6">

                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <UserCheck className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <span className="text-sm font-medium text-primary">
                                            03
                                        </span>

                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                            {t("privacy.use_title")}
                                        </h2>
                                    </div>

                                </div>

                                <div className="space-y-4 text-muted-foreground leading-relaxed">

                                    <p>{t("privacy.use_intro")}</p>

                                    <ul className="space-y-3">

                                        <li className="flex gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{t("privacy.use_b1")}</span>
                                        </li>

                                        <li className="flex gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{t("privacy.use_b2")}</span>
                                        </li>

                                        <li className="flex gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{t("privacy.use_b3")}</span>
                                        </li>

                                        <li className="flex gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{t("privacy.use_b4")}</span>
                                        </li>

                                    </ul>

                                </div>

                            </div>
                        </SectionWrapper>


                        {/* 04 - Orders and Payments */}
                        <SectionWrapper>
                            <div className="bg-card border border-border/50 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-md transition-shadow">

                                <div className="flex items-start gap-4 mb-6">

                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <ShoppingBag className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <span className="text-sm font-medium text-primary">
                                            04
                                        </span>

                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                            {t("privacy.orders_title")}
                                        </h2>
                                    </div>

                                </div>

                                <div className="space-y-4 text-muted-foreground leading-relaxed">

                                    <p>{t("privacy.orders_p1")}</p>

                                    <p>{t("privacy.orders_p2")}</p>

                                </div>

                            </div>
                        </SectionWrapper>


                        {/* 05 - Cookies */}
                        <SectionWrapper>
                            <div className="bg-card border border-border/50 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-md transition-shadow">

                                <div className="flex items-start gap-4 mb-6">

                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <Cookie className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <span className="text-sm font-medium text-primary">
                                            05
                                        </span>

                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                            {t("privacy.cookies_title")}
                                        </h2>
                                    </div>

                                </div>

                                <div className="space-y-4 text-muted-foreground leading-relaxed">

                                    <p>{t("privacy.cookies_p1")}</p>

                                    <p>{t("privacy.cookies_p2")}</p>

                                </div>

                            </div>
                        </SectionWrapper>


                        {/* 06 - Data Security */}
                        <SectionWrapper>
                            <div className="bg-card border border-border/50 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-md transition-shadow">

                                <div className="flex items-start gap-4 mb-6">

                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <LockKeyhole className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <span className="text-sm font-medium text-primary">
                                            06
                                        </span>

                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                            {t("privacy.security_title")}
                                        </h2>
                                    </div>

                                </div>

                                <p className="text-muted-foreground leading-relaxed">
                                    {t("privacy.security_p1")}
                                </p>

                            </div>
                        </SectionWrapper>


                        {/* 07 - Sharing Information */}
                        <SectionWrapper>
                            <div className="bg-card border border-border/50 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-md transition-shadow">

                                <div className="flex items-start gap-4 mb-6">

                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <Share2 className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <span className="text-sm font-medium text-primary">
                                            07
                                        </span>

                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                            {t("privacy.sharing_title")}
                                        </h2>
                                    </div>

                                </div>

                                <div className="space-y-4 text-muted-foreground leading-relaxed">

                                    <p>{t("privacy.sharing_p1")}</p>

                                    <p>{t("privacy.sharing_p2")}</p>

                                </div>

                            </div>
                        </SectionWrapper>


                        {/* 08 - Your Rights */}
                        <SectionWrapper>
                            <div className="bg-card border border-border/50 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-md transition-shadow">

                                <div className="flex items-start gap-4 mb-6">

                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <UserRound className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <span className="text-sm font-medium text-primary">
                                            08
                                        </span>

                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                            {t("privacy.rights_title")}
                                        </h2>
                                    </div>

                                </div>

                                <div className="space-y-4 text-muted-foreground leading-relaxed">

                                    <p>{t("privacy.rights_p1")}</p>

                                    <ul className="space-y-3">

                                        <li className="flex gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{t("privacy.rights_b1")}</span>
                                        </li>

                                        <li className="flex gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{t("privacy.rights_b2")}</span>
                                        </li>

                                        <li className="flex gap-3">
                                            <span className="text-primary mt-1">•</span>
                                            <span>{t("privacy.rights_b3")}</span>
                                        </li>

                                    </ul>

                                </div>

                            </div>
                        </SectionWrapper>


                        {/* 09 - Third Party Services */}
                        <SectionWrapper>
                            <div className="bg-card border border-border/50 rounded-3xl p-7 md:p-10 shadow-sm hover:shadow-md transition-shadow">

                                <div className="flex items-start gap-4 mb-6">

                                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <FileText className="w-6 h-6 text-primary" />
                                    </div>

                                    <div>
                                        <span className="text-sm font-medium text-primary">
                                            09
                                        </span>

                                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                                            {t("privacy.third_party_title")}
                                        </h2>
                                    </div>

                                </div>

                                <p className="text-muted-foreground leading-relaxed">
                                    {t("privacy.third_party_p1")}
                                </p>

                            </div>
                        </SectionWrapper>


                        {/* 10 - Policy Changes */}
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
                                            {t("privacy.changes_title")}
                                        </h2>
                                    </div>

                                </div>

                                <p className="text-muted-foreground leading-relaxed">
                                    {t("privacy.changes_p1")}
                                </p>

                            </div>
                        </SectionWrapper>


                        {/* 11 - Contact */}
                        <SectionWrapper>
                            <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-12">

                                <div className="absolute -right-10 -bottom-16 opacity-10 pointer-events-none">
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
                                            {t("privacy.contact_title")}
                                        </h2>

                                        <p className="text-primary-foreground/80 leading-relaxed">
                                            {t("privacy.contact_p1")}
                                        </p>

                                    </div>

                                </div>

                            </div>
                        </SectionWrapper>

                    </div>

                    {/* Last Updated */}
                    <SectionWrapper className="text-center mt-12">

                        <p className="text-sm text-muted-foreground">
                            {t("privacy.last_updated")}
                        </p>

                    </SectionWrapper>

                </div>
            </section>
        </div>
    );
}