import Link from "next/link";
import { Navbar, Footer } from "@/components/landing";
import { getLocaleFromCookies, getLocaleDir, getTranslations } from "@/i18n/server";
// apps/web has multiple root layouts (one per route group), so a global
// not-found renders WITHOUT any of them — it must supply its own document
// shell + styles, then compose the marketing chrome like the legal pages do.
import "./globals.css";

export default async function NotFound() {
  const locale = await getLocaleFromCookies();
  const dir = getLocaleDir(locale);
  const t = getTranslations(locale);

  return (
    <html lang={locale === "fa" ? "fa" : "en"} dir={dir} suppressHydrationWarning>
      <head>
        <title>{t.notFound.title}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`min-h-screen antialiased ${locale === "fa" ? "lang-fa" : ""}`}>
        <Navbar />
        <main className="legal-root">
          <section className="legal-hero">
            <div className="legal-container" style={{ textAlign: "center" }}>
              <p className="legal-eyebrow">404</p>
              <h1 className="legal-title">
                {t.notFound.headline1}
                <br />
                <span className="legal-title-soft">{t.notFound.headline2}</span>
              </h1>
              <p className="legal-meta" style={{ maxWidth: "460px", margin: "0 auto" }}>
                {t.notFound.description}
              </p>
              <div style={{ marginTop: "32px" }}>
                <Link
                  href="/"
                  className="inline-block rounded-full px-6 py-2.5 text-[14px] font-medium transition-all"
                  style={{ background: "var(--th-btn-bg)", color: "var(--th-btn-text)" }}
                >
                  {t.notFound.backHome}
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
