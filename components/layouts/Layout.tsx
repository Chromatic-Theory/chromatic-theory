import Head from "next/head";

import Navbar from "../global/Navbar";
import { LocationFragment } from "@/graphql-operations";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-white">
      <Head>
        <title>Chromatic Theory</title>
      </Head>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
