import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
