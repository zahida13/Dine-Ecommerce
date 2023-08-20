"use-client"
import './globals.css'
import {Inter} from 'next/font/google'
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import ReduxProvider from "@/app/store/ReduxProvider";
import {Toaster} from "react-hot-toast";
import {ClerkProvider} from "@clerk/nextjs";

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Dine Market',
  description: 'Hackathon One - Developed by Zahida Ilyas',
}

export default function RootLayout({
  children,
  }: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={`${inter.className} w-full overflow-x-hidden`}>
      <ReduxProvider>
        <Header/>
        {children}
        <Footer/>
        <Toaster/>
      </ReduxProvider>
      </body>
      </html>
    </ClerkProvider>
  )
}
