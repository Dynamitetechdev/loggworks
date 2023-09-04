import type { NextPage } from "next";
import Head from "next/head";
import HomePage from "./homepage";
import FAQ from "./faq";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Loggworks</title>
        <meta name="description" content="Loggwork is a good platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
