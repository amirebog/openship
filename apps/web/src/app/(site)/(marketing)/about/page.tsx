import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/landing";
import { getLocaleFromCookies, getTranslations } from "@/i18n/server";

export const metadata: Metadata = {
  title: "About - Openship",
  description: "Open source, self-hostable deployment platform. Learn the philosophy and technology behind Openship.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About - Openship`,
    description: "Open source, self-hostable deployment platform. Learn the philosophy and technology behind Openship.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `About - Openship`,
    description: "Open source, self-hostable deployment platform. Learn the philosophy and technology behind Openship.",
  },
};

export default async function AboutPage() {
  const locale = await getLocaleFromCookies();
  const t = getTranslations(locale);
  const sections = t.aboutPage.sections || [];

  return (
    <>
      <Navbar />
      <main className="legal-root">
        <section className="legal-hero">
          <div className="legal-container">
            <p className="legal-eyebrow">{t.aboutPage.heroEyebrow}</p>
            <h1 className="legal-title">
              {t.aboutPage.heroTitle1}
              <br />
              <span className="legal-title-soft">{t.aboutPage.heroTitle2}</span>
            </h1>
            <p className="legal-meta">
              {t.aboutPage.heroMeta}
            </p>
          </div>
        </section>

        <section className="legal-body">
          <div className="legal-container">
            <div className="legal-grid">
              <aside className="legal-toc" aria-label={t.aboutPage.tocTitle}>
                <p className="legal-toc-title">{t.aboutPage.tocTitle}</p>
                <ol>
                  {sections.map((section, i) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>
                        <span className="legal-toc-n">{String(i + 1).padStart(2, "0")}</span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </aside>

              <article className="legal-article">
                {sections.map((section, i) => (
                  <section key={section.id} id={section.id} className="legal-section">
                    <header className="legal-section-head">
                      <span className="legal-section-n">{String(i + 1).padStart(2, "0")}</span>
                      <h2 className="legal-section-title">{section.title}</h2>
                    </header>
                    {section.paragraphs.map((paragraph, j) => (
                      <p key={j} className="legal-p">{paragraph}</p>
                    ))}
                  </section>
                ))}

                <footer className="legal-foot">
                  <p>
                    {t.aboutPage.footer} <a href="/contact">{t.contactPage.title}</a>.
                  </p>
                </footer>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
