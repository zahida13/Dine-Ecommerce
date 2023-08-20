import Image from 'next/image'
import Hero from "@/app/components/layout/Hero";
import NewsLetter from "@/app/components/NewsLetter";
import {Sora} from "next/font/google";
import Promotions from "@/app/components/Promotions";
import Products from "@/app/components/Products";
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { connectToDatabase } from './databaseConnection';

const sora = Sora({subsets: ['latin']})

export default async function Home() {



  return (
    <main className={`${sora.className} px-4 flex min-h-screen flex-col items-center justify-between `}>
      <Hero/>
      <Promotions/>
      <Products/>
      <NewsLetter/>
    </main>
  )
}
