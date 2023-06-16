import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Julian Lechner: Experienced Web Developer making quality websites" />
        
        <meta name="keywords" content="web developer, front-end, back-end, full-stack, JavaScript, HTML, CSS, Python, PHP, Ruby, Node.js, React, Angular, Vue.js, responsive design, UI/UX, website optimization, SEO, web design, web application, mobile app development, web developer resume, web developer portfolio, coding, programming, software engineer, software development, computer science, coding bootcamp, web developer skills, web developer experience, web developer certifications, web developer job market, web developer interview, web developer career, web developer industry, web developer trends, web developer resources, web developer networking" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:description" content="Experienced Web Developer making quality websites" />
        <meta property="og:image" content="https://jlechner.com/images/myself.png" />
        <meta property="og:title" content="Julian Lechner - Web Developer" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://jlechner.com/images/myself.png" />
        <script
          defer
          src="https://kit.fontawesome.com/a7908c27f8.js"
          crossorigin="anonymous"
        ></script>
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
      <body className="bg-white text-white">
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}
