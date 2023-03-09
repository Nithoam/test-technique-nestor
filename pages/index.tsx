import Head from "next/head";
import { useState } from "react";
import { NextPage } from "next";
import { GetStaticProps } from "next";

import { BsSortNumericDown, BsSortNumericDownAlt } from "react-icons/bs";
import { dataAppartementProps } from "utils/interfaceProps";
import { sortByPrice } from "utils/sortByPrice";
import AppartementCard from "components/AppartementCard";
import Layout from "components/Layout";
import data from "../data.json";

export const getStaticProps: GetStaticProps = async () => {
  const appartementsData: dataAppartementProps[] = data;
  return {
    props: {
      appartementsData,
    },
  };
};

const Home: NextPage<{
  appartementsData: dataAppartementProps[];
}> = ({ appartementsData }) => {
  const appartementsSort = sortByPrice(appartementsData, "desc");

  const [appartements, setAppartements] = useState(appartementsSort);

  const handleSort = (sort: string) => {
    setAppartements(sortByPrice(appartements, sort));
  };
  return (
    <>
      <Head>
        <title>Test Nestor</title>
      </Head>
      <Layout>
        <div className="mx-auto mx-auto my-4 w-large md:w-3/4">
          <div className="flex flex-col md:gap-2 lg:flex-row">
            <div className="flex">
              <div>
                <button
                  onClick={() => handleSort("desc")}
                  className="rounded-full border bg-nightBlue px-5 py-1 text-white"
                >
                  <BsSortNumericDownAlt />
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleSort("asc")}
                  className="rounded-full border bg-nightBlue px-5 py-1 text-white"
                >
                  <BsSortNumericDown />
                </button>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col lg:flex-row">
            <div className="mt-5 grid w-full grid-cols-1 gap-y-6">
              {appartements.map((appartement: any) => {
                return (
                  <div key={appartement.id}>
                    <AppartementCard
                      picture={appartement.picture}
                      title={appartement.name}
                      description={appartement.description}
                      surface={appartement.surface}
                      id={appartement.id}
                      price={appartement.price}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Home;
