import { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../utils/gtag";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="GPT-3 Writer" key="title" />
        <meta
          property="og:description"
          content="build with buildspace"
          key="description"
        />
        <meta
          property="og:image"
          content="https://cdn.buildspace.so/courses/gpt3-writer/project-og.jpg"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
