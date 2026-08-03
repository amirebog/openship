import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/landing";
import { ContactForm } from "@/components/contact-form";
import { getLocaleFromCookies, getTranslations } from "@/i18n/server";

export const metadata: Metadata = {
  title: "Contact - zyrix",
  description: "Get in touch with the zyrix team for support, security, or legal inquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact - zyrix`,
    description: "Get in touch with the zyrix team for support, security, or legal inquiries.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact - zyrix`,
    description: "Get in touch with the zyrix team for support, security, or legal inquiries.",
  },
};

export default async function ContactPage() {
  const locale = await getLocaleFromCookies();
  const t = getTranslations(locale);

  return (
    <>
      <Navbar />
      <main className="legal-root">
        <section className="legal-hero">
          <div className="legal-container">
                <p className="legal-eyebrow">{t.contactPage.heroEyebrow}</p>
                <h1 className="legal-title">
                  {t.contactPage.heroHeadline1}<br />
                  <span className="legal-title-soft">{t.contactPage.heroHeadline2}</span>
                </h1>
                <p className="legal-meta">{t.contactPage.heroMeta}</p>
              </div>
        </section>

        <section className="legal-body">
          <div className="legal-container">
            <div className="legal-grid">
              <aside className="legal-toc" aria-label="Contact info">
                <p className="legal-toc-title">{t.contactPage.tocTitle}</p>
                <ol>
                  <li>
                    <a href="mailto:amireb0047@gmail.com">
                      <span className="legal-toc-n">01</span>
                      {t.contactPage.support}
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/amirebog/openship/issues" target="_blank" rel="noreferrer">
                      <span className="legal-toc-n">02</span>
                      {t.contactPage.githubIssues}
                    </a>
                  </li>
                  <li>
                    <a href="mailto:amireb0047@gmail.com">
                      <span className="legal-toc-n">03</span>
                      {t.contactPage.security}
                    </a>
                  </li>
                  <li>
                    <a href="mailto:amireb0047@gmail.com">
                      <span className="legal-toc-n">04</span>
                      {t.contactPage.privacy}
                    </a>
                  </li>
                  <li>
                    <a href="mailto:amireb0047@gmail.com">
                      <span className="legal-toc-n">05</span>
                      {t.contactPage.legal}
                    </a>
                  </li>
                </ol>
              </aside>

              <article className="legal-article">
                <section className="legal-section" style={{ borderBottom: "none" }}>
                  <ContactForm />
                </section>

                <footer className="legal-foot">
                  <p>
                      Prefer the docs? Read the <a href="/docs">{t.contactPage.docsLink}</a> or {" "}
                      <a href="/trust">{t.contactPage.trustSecurity}</a>.
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
