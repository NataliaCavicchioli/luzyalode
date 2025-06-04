import { ProductGrid } from "@/components/ProductGrid";
import { Banner } from "@/components/Banner";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Luzyalode Terapias</title>
        <link rel="icon" href="/spa.svg" type="image/svg+xml" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Banner />
      <ProductGrid />
    </>
  );
}
