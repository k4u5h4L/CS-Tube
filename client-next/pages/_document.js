import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        {/* <base href="/" /> */}
        <link rel="stylesheet" href="./css/themify-icons.css" />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="./images/favicon.png"
        />
        <link rel="stylesheet" href="./css/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />

        <script src="js/plugin.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
        <script src="js/video-player.js"></script>

        </body>
      </Html>
    )
  }
}

export default MyDocument