import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../src/theme';

export default class MyDocument extends Document {
  readonly currentYear = `${new Date().getFullYear}`;
  readonly appAuthor = 'William S Fuller';
  readonly appName = `${this.appAuthor} Portfolio`;
  readonly appDescription =
    'Front End Engineer that loves JavaScript, React, Redux, GraphQL, Node, and Boston Terriers';

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <meta name="HandheldFriendly" content="true" />
          {/* manifest.json provides metadata used when your web app is installed on a
              user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
          */}
          <link rel="manifest" href="/favicon/manifest.json" />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          {/* FAVICON */}
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/favicon/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/favicon/favicon-16x16.png" sizes="16x16" />
          <link rel="manifest" href="/favicon/manifest.json" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
          <link rel="icon" href="/favicon/favicon.ico" />
          {/* GOOGLE */}
          <meta name="description" content={this.appDescription} />
          <meta
            name="keywords"
            content="portfolio, javascript, nodejs, mongodb, reactjs, sketch, graphql, redux, webpack, engineer, front end, nextjs"
          />
          <meta name="author" content={this.appAuthor} />
          <meta name="copyright" content={this.currentYear} />
          <meta name="application-name" content={this.appName} />
          {/* FACEBOOK */}
          <meta property="og:title" content={this.appName} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/social-media-share-image.png" />
          <meta property="og:url" content="https://wsfuller.dev" />
          <meta property="og:description" content={this.appDescription} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="1200" />
          {/* TWITTER */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@williamsfuller_" />
          <meta name="twitter:title" content={this.appName} />
          <meta name="twitter:description" content={this.appDescription} />
          <meta name="twitter:image" content="/social-media-share-image.png" />

          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
