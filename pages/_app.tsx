import { Header, Footer } from "@/components";
import type { AppProps } from "next/app";
import "./index.css";


export default function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>;
}
