"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "@/i18n";

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslations();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className="relative shrink-0">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="
          flex h-10 items-center gap-2 rounded-full
          border border-[var(--th-bd-subtle)]
          bg-[var(--th-bg-card)]
          px-4 text-sm font-medium
          text-[var(--th-text-secondary)]
          transition hover:bg-[var(--th-sf-04)]
        "
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15 15 0 0 1 0 20" />
          <path d="M12 2a15 15 0 0 0 0 20" />
        </svg>

        {locale === "fa" ? "فارسی" : "English"}

        <svg
          className={`h-3.5 w-3.5 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M5.5 7.5L10 12l4.5-4.5z" />
        </svg>
      </button>


      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute end-0 top-12 z-[999]
            min-w-[150px]
            overflow-hidden
            rounded-xl
            border border-[var(--th-bd-subtle)]
            bg-[var(--th-bg-card)]
            p-1
            shadow-xl
          "
        >
          <button
            onClick={() => {
              setLocale("en");
              setOpen(false);
            }}
            className={`
              flex w-full items-center justify-between
              rounded-lg px-3 py-2
              text-sm transition
              ${
                locale === "en"
                  ? "bg-[var(--th-btn-bg)] text-[var(--th-btn-text)]"
                  : "text-[var(--th-text-secondary)] hover:bg-[var(--th-sf-04)]"
              }
            `}
          >
            English
            {locale === "en" && "✓"}
          </button>


          <button
            onClick={() => {
              setLocale("fa");
              setOpen(false);
            }}
            className={`
              flex w-full items-center justify-between
              rounded-lg px-3 py-2
              text-sm transition
              ${
                locale === "fa"
                  ? "bg-[var(--th-btn-bg)] text-[var(--th-btn-text)]"
                  : "text-[var(--th-text-secondary)] hover:bg-[var(--th-sf-04)]"
              }
            `}
          >
            فارسی
            {locale === "fa" && "✓"}
          </button>
        </div>
      )}
    </div>
  );
}