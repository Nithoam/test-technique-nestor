import Head from "next/head";
import type { NextPage, GetStaticProps } from "next";
import Image from "next/image";
import { Params } from "next/dist/server/router";
import data from "../../data.json";
import { dataAppartementProps } from "utils/interfaceProps";
import Layout from "components/Layout";
import { NumericFormat } from "react-number-format";

export const getStaticPaths = async () => {
  const appartementsData: dataAppartementProps[] = data;

  const paths = appartementsData?.map((path: { id: number }) => ({
    params: {
      id: `${path.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as Params;
  const appartementData: dataAppartementProps = data[id - 1];
  return {
    props: {
      appartementData,
    },
  };
};

const Article: NextPage<{
  appartementData: dataAppartementProps;
}> = ({ appartementData }) => {
  return (
    <>
      <Head>
        <title>{appartementData?.name}</title>
      </Head>
      <Layout>
        <div className="m-auto my-4 w-large">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-black my-4 text-center text-2xl font-bold leading-tight tracking-tight md:text-4xl">
              Retrouver <span className="surligne">{appartementData.name}</span>{" "}
              dans notre agence
            </h1>
            <div className="z-10 my-4 grid h-80 w-full  sm:h-[50vh] md:px-0 lg:w-2/3">
              <div className="grid-area-1-1 relative h-full w-full overflow-hidden rounded-lg">
                <Image
                  src={`${appartementData.picture}`}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center center"
                  loading="eager"
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="mx-auto flex flex-col gap-2 lg:w-2/3">
            <h2 className="text-black text-2xl font-bold leading-tight tracking-tight md:text-4xl">
              {appartementData.name}
            </h2>
            <div>{appartementData.description}</div>
            <div>{appartementData.surface} m²</div>
            <div className="block font-bold md:text-2xl">
              {appartementData.price} €
            </div>
            {appartementData.adress && (
              <div className="sticky top-0 mx-2 h-96 w-full space-y-8 p-2 py-4 ">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  allowFullScreen
                  className="rounded"
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${appartementData?.adress}`}
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Article;
