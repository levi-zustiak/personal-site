import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg"/>
        <title>Levi Zustiak</title>
        <meta name="description" content="Hi! I'm Levi Zustiak. A software engineer based in the midwestern United States. Feel free to stop by and say hello!"/>
        <meta name="author" content="Levi Zustiak"/>
        <meta name="keywords" content="software engineer, software developer, portfolio, react, javascript, web app"/>
      </Head>
      <Component {...pageProps}/>
    </>
  )
}

export default MyApp
