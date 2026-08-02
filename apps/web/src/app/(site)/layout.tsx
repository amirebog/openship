import type { Metadata, Viewport } from "next";
import "../globals.css";
import { getLocaleFromCookies, getLocaleDir } from "@/i18n/server";
import type { Locale } from "@/i18n";

const SITE_URL = "https://zyrix.ir";
const SITE_NAME = "Openship";
const TITLE_DEFAULT = "zyrix - Open Source, Self-Hostable Deployment Platform";
const TITLE_TEMPLATE = "%s - zyrix";
const DESCRIPTION =
  "Deploy anything, own everything. Self-hostable, AI-powered deployment platform with free SSL, unlimited domains, instant rollbacks, and CLI/MCP support. Open source and free forever.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_DEFAULT,
    template: TITLE_TEMPLATE,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  generator: "Next.js",
  category: "technology",
  keywords: [
    "deployment platform",
    "self-hosted",
    "open source",
    "AI deployments",
    "Vercel alternative",
    "Heroku alternative",
    "Netlify alternative",
    "PaaS",
    "free SSL",
    "unlimited domains",
    "CLI deploy",
    "MCP server",
    "instant rollback",
    "git push deploy",
    "docker deploy",
    "self host",
    "VPS deploy",
    "Apache 2.0",
    "open source PaaS",
    "developer tools",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: "zyrix LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE_DEFAULT,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Openship - Deploy Anything. Own Everything.",
    description:
      "Open source, self-hostable deployment platform with AI-powered builds and instant rollbacks.",
    creator: "@zyrix",
    site: "@zyrix",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [
        { url: "/resources/rss.xml", title: "Openship Resources" },
      ],
    },
  },
  // verification: {
  //   google: "<google-site-verification-token>",
  //   yandex: "<yandex-verification-token>",
  //   other: { "msvalidate.01": "<bing-verification-token>" },
  // },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0F0F0F" },
    { media: "(prefers-color-scheme: dark)", color: "#0F0F0F" },
  ],
  // Light-only marketing site. The one dark surface (webmail landing) opts in
  // via `color-scheme: dark` on `body:has(.mail-home)` in globals.css, which
  // overrides this document default for that subtree. Declaring "light" here
  // stops the browser from painting a dark canvas/scrollbars under a dark OS.
  colorScheme: "light",
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "zyrix LLC",
  url: SITE_URL,
  logo: `${SITE_URL}/android-chrome-512x512.png`,
  description: DESCRIPTION,
  foundingDate: "2024",
  sameAs: [
    "https://github.com/amirebog",
    "https://x.com/",
    "https://discord.gg/",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@zyrix.ir",
      availableLanguage: ["English", "Persian"],
    },
  ],
};

function buildWebsiteLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/docs?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: locale,
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocaleFromCookies();
  const dir = getLocaleDir(locale);

  return (
    <html lang={locale === "fa" ? "fa" : "en"} dir={dir} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="preconnect"
          href="https://cdn.zyrix.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://cdn.zyrix.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebsiteLd(locale === "fa" ? "fa-IR" : "en-US")) }}
        />
      </head>
      <body className={`min-h-screen antialiased ${locale === "fa" ? "lang-fa" : ""}`}>
        {children}
      </body>
    </html>
  );
}
