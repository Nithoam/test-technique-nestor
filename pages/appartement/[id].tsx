import Head from "next/head";
import type { NextPage, GetStaticProps } from "next";
import Image from "next/image";
import { Params } from "next/dist/server/router";
import data from "../../data.json";
import { dataAppartementProps } from "utils/interfaceProps";
import Layout from "components/Layout";
export const getStaticPaths = async () => {
  const appartementsData: dataAppartementProps[] = data;
  console.log("appartementsData", appartementsData);
  const paths = appartementsData?.map((path: any) => ({
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
  console.log("appartementData", appartementData);
  return (
    <>
      <Head>
        <title>{appartementData?.name}</title>
      </Head>
      <Layout>
        <div className="m-auto my-4 w-large">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-black my-2 text-center text-xl font-bold leading-tight tracking-tight md:text-4xl">
              Retrouver {appartementData.name} dans notre agence
            </h1>
            <div className="z-10 mt-2 grid h-80 w-full  sm:h-[50vh] md:px-0 lg:w-2/3">
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
          <div className="mt-4 flex flex-col gap-2">
            <h2 className="text-black text-xl font-bold leading-tight tracking-tight md:text-4xl">
              {appartementData.name}
            </h2>
            <div>{appartementData.description}</div>
            <div>{appartementData.surface} m²</div>
            <div className="text-black italic">{appartementData.price} €</div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Article;
