import Head from "next/head";
import FeaturedSection from "../src/components/homeAuth/featuredSection";

const HomeAuth = function () {
  return (
    <>
      <Head>
        <title>OnebitFlix - Home</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <FeaturedSection />
      </main>
    </>
  );
};

export default HomeAuth;
