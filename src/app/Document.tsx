import stylesUrl from "./styles.css?url";
import { fonts } from "./fonts";

import { TurnstileScript } from "@redwoodjs/sdk/turnstile";
import { Navigation } from "./shared/Navigation";
import { Footer } from "./shared/Footer";

export const Document: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Movie Mashups</title>
      <meta
        name="description"
        content="AI Movie Mashups creates mashups of classic movies using AI built with RedwoodSDK and deployed on Cloudflare. It's Pretty Woman meets Die Hard!"
      />
      <meta
        name="keywords"
        content="AI, Movie, Mashups, Movies, Mashup, AI Movie Mashups, AI Movie Mashup, AI Movie Mashup Generator, AI Movie Mashup Creator, AI Movie Mashup Maker, AI Movie Mashup Editor, AI Movie Mashup Generator, AI Movie Mashup Creator, AI Movie Mashup Maker, AI Movie Mashup Editor, RedwoodSDK"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <TurnstileScript />
      {/* Preload critical fonts */}
      <link
        rel="preload"
        href={fonts.lexend}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={fonts.specialElite}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href={stylesUrl} />
      <link rel="modulepreload" href="/src/client.tsx" />
    </head>
    <body className="flex flex-col min-h-screen">
      <main className="flex flex-col flex-grow">
        <Navigation />
        <div
          id="root"
          className="container mx-auto max-w-screen-xl p-4 flex-grow"
        >
          {children}
        </div>
        <Footer />
      </main>
      <script>import("/src/client.tsx")</script>
    </body>
  </html>
);
