import { ProductGrid } from "@/components/ProductGrid";
import { Banner } from "@/components/Banner";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Luzyalode Terapias</title>
        <link rel="icon" href="/spa.svg" type="image/svg+xml" />
      </Head>
      <Banner />
      <ProductGrid />
    </>
  );
}
