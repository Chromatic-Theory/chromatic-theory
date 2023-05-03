import '@/styles/globals.css'
import { Raleway } from "next/font/google";
import type { AppProps } from "next/app";
import Layout from "@/components/layouts/Layout";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={raleway.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
