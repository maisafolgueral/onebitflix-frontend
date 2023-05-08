import Head from "next/head";
import FeaturedSection from "../src/components/homeAuth/featuredSection";
import NewestCategory from "../src/components/homeAuth/newestCategory";
import FavoriteCategory from "../src/components/homeAuth/favoriteCategory";

const HomeAuth = function () {
  return (
    <>
      <Head>
        <title>OnebitFlix - Home</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
        <FeaturedSection />
        <NewestCategory />
        <FavoriteCategory />
      </main>
    </>
  );
};

export default HomeAuth;