import type { AppProps } from "next/app";

import MainLayout from "@/layouts/mainLayout";
import "@/styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
//
