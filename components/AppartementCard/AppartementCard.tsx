import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface AppartementCardProps {
  price: number;
  title: string;
  picture: string;
  id: number;
  description?: string;
  surface?: number;
}

const AppartementCard: React.VFC<AppartementCardProps> = ({
  title,
  picture,
  price,
  description,
  surface,
  id,
}) => {
  return (
    <Link href={`/appartement/${id}`}>
      <a className="">
        <div
          className={`duration-250 relative grid transform grid-rows-2 overflow-hidden rounded-lg bg-white shadow transition-all ease-out hover:scale-105 hover:shadow-md lg:grid-cols-2/3 lg:grid-rows-1`}
        >
          <div className="text-nightBlue order-2 flex flex-col justify-center gap-y-2 px-4 lg:order-first">
            <h2 className="text-xl font-bold leading-tight tracking-tight md:text-3xl">
              {title}
            </h2>
            <div>{description}</div>
            <div className="md:text-xl">{surface} m²</div>
            <div className="">
              <div className="text-nightBlue font-bold md:text-2xl">{price} €</div>
            </div>
            <div className="text-black font-bold">
              En savoir plus{" "}
              <span className="text-orange font-bold">&#62;</span>
            </div>
          </div>
          <div className="z-10 grid h-72 w-full md:px-0">
            <div className="grid-area-1-1 relative order-first h-full w-full overflow-hidden rounded-t-lg">
              <Image
                src={picture}
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
      </a>
    </Link>
  );
};

export default AppartementCard;
