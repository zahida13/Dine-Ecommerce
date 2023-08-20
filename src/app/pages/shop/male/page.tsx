import React from 'react';
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url'
import {dataset, projectId} from "../../../../../sanity/env";
import Link from "next/link";
import { client } from '../../../../../sanity/lib/client';
import Spinner from '@/app/components/layout/Spinner';

async function getData() {
  const query = `*[type == "male"]`;
  const res = await client.fetch(query, { next: { revalidate: 600 } })
  return res;
}


async function Page() {
  const data = await getData();
  const config = {
    baseUrl: 'https://cdn.sanity.io',
    projectId: projectId,
    dataset: dataset,
  }

  const builder = imageUrlBuilder(config)
  const urlFor = (source: string) => builder.image(source)

  return (
    <div className={'container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'}>
    {
       !data ?
        <Spinner /> :
        data.map((product: any) => {
          return (
            <Link href={`pages/shop/${product._id}`} className={' flex flex-col h-fit  w-full rounded-lg '} key={product._id}>
              <div className='h-auto  rounded-lg w-[300px] overflow-hidden'>
              <Image src={urlFor(product.images[0]).toString()} alt={'Product Image'} className='hover:scale-110 transition-all duration-300' height={400} width={300}/>
              </div>
              <h2 className={'font-semibold text-lg'}>{product.title}</h2>
              <label className={'font-semibold  text-gray-500'}>{product.subTitle}</label>
              <label className={'font-semibold '}>${product.price}</label>
            </Link>
          )
        })
      }
    </div>
  );
}

export default Page;
