import Head from "next/head";
import { useState } from "react";
import { NextPage } from "next";
import { GetStaticProps } from "next";
import data from "../data.json";
import AppartementCard from "components/AppartementCard";
import { dataAppartementProps } from "utils/interfaceProps";
import Layout from "components/Layout";
export const getStaticProps: GetStaticProps = async () => {
  const appartementsData: any = data;
  return {
    props: {
      appartementsData,
    },
  };
};

const Home: NextPage<{
  appartementsData: dataAppartementProps[];
}> = ({ appartementsData }) => {
  const [appartements, setAppartements] = useState(appartementsData);
  console.log("appartementsData", appartements);

  const sortByPrice = (
    appartements: dataAppartementProps[],
    typeOfSort: string
  ) => {
    return [...appartements].sort((appartementA, appartementB) => {
      const priceA: number = appartementA.price;
      const priceB: number = appartementB.price;
      if (typeOfSort === "asc") {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
    });
  };
  const handleSort = (sort: string) => {
    setAppartements(sortByPrice(appartements, sort));
  };

  return (
    <>
      <Head>
        <title>Test Nestor</title>
      </Head>
      <Layout>
        <div className="mx-auto my-4 w-large">
          <div className="flex flex-col md:gap-2 lg:flex-row">
            <button
              onClick={() => handleSort("desc")}
              className="rounded-full border bg-nightBlue px-5 py-1 text-white"
            >
              {" "}
              Trier les appartement du plus cher au moins cher{" "}
            </button>
            <button
              onClick={() => handleSort("asc")}
              className="rounded-full border bg-nightBlue px-5 py-1 text-white"
            >
              {" "}
              Trier les appartement du moins cher au plus cher{" "}
            </button>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-y-6 md:w-full xl:w-3/4">
            {appartements.map((appartement: any) => {
              return (
                <div key={appartement.id} className="">
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
      </Layout>
    </>
  );
};
export default Home;
