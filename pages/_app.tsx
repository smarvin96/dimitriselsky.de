import '@/components/styles/globals.css'

import GoogleAnalytics from "@bradgarropy/next-google-analytics"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <GoogleAnalytics measurementId='G-NGX2DB4MZ9'/>
  <Component {...pageProps} />
  </>
}
