import React from 'react';
import {Sora} from "next/font/google";
import Overview from "@/app/components/Overview";
import ImagesBox from "@/app/components/ImagesBox";
import Quantity from "@/app/components/Quantity";
import AddToCart from "@/app/components/AddToCart";
import {TypographyH2} from "@/app/components/ui/TypographyH2";
import { client } from '../../../../../sanity/lib/client';

const sora = Sora({subsets: ['latin']})

async function getData(id : string) {
  const query = `*[_id == '${id}']`;
  const res = await client.fetch(query, { next: { revalidate: 600 } })
  return res;
}

async function Page
({
   params,
 }: {
  params: {
    productID: string;
  };
}) {

  const productID = params.productID
  const data = await getData(productID);

  return (
    <main className={`${sora.className} container flex flex-col min-h-[90%] my-16`}>
      <div className={'grid grid-cols-12 w-full gap-x-3'}>
        <ImagesBox images={data[0].images}/>
        {/*Info*/}
        <div
          className={'mt-16 md:mt-0 md:px-6 col-span-12 md:col-span-4 flex flex-col justify-center gap-y-6'}>
          <div>
            <h1 className={'text-3xl'}>{data[0].title}</h1>
            <h2 className={'text-xl font-semibold text-gray-500'}>{data.subTitle}</h2>
          </div>
          <Quantity/>
          <div className={'flex items-center gap-x-4'}>
          <AddToCart product={data[0]}/>
          <TypographyH2 className={'mt-0 p-0'} text={'$' + data[0].price}/>
          </div>
        </div>
      </div>
      <div>
        <Overview/>
        <div className={'flex flex-col items-center'}>
          <div
            className={'grid grid-cols-12 gap-5 sm:max-w-[80%] justify-items-center border-t border-t-black pt-5 px-5'}>

            <div className={'col-span-12 sm:col-span-4 flex items-center justify-center sm:justify-start w-full'}>
              <label className={'uppercase text-gray-500 text-lg font-semibold'}>Product Details</label>
            </div>
            <div className={'col-span-12 sm:col-span-8'}>
              <p className={'uppercase text-gray-500 text-[16px] font-light text-justify'}>
                {data[0].productDetails}
              </p>
            </div>

           
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;

