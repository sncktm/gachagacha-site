import "@/styles/globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
