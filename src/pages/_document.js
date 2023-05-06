import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Julian Lechner: Experienced Web Developer making quality websites" />
        <meta name="keywords" content="Web Developer, For Hire, Front End, Full Stack, Resume, Portfolio" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-88S17Y02RM`}
        />
        <script defer src="js/scroll-animated.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-88S17Y02RM', {
                page_path: window.location.pathname,
              });
            `,
          }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
