"use client";

import { DarkSection } from "./dark-section";
import { useTranslations } from "@/i18n";

export function FinalCta() {
  const { t } = useTranslations();

  return (
    <section className="fcta-outer">
      <DarkSection>
        <div className="fcta-container">
          <h2 className="fcta-title">
            {t.finalCta.title}
          </h2>

          <p className="fcta-sub">
            {t.finalCta.subtitle}
          </p>

          <div className="fcta-row">
            <a href="/login" className="fcta-btn fcta-btn--primary">
              {t.finalCta.getStarted}
            </a>

            <a
              href="https://github.com/oblien/openship"
              target="_blank"
              rel="noreferrer"
              className="fcta-btn fcta-btn--ghost"
            >
              {t.finalCta.viewOnGithub}
            </a>
          </div>

          <ul className="fcta-trust">
            <li>CLI, web &amp; desktop</li>
            <li>Cloud or self-hosted</li>
            <li>No lock-in</li>
            <li>Open source</li>
          </ul>
        </div>
      </DarkSection>
    </section>
  );
}