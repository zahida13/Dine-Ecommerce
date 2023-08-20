import React from 'react'
import { Button } from '../ui/button'
import { ShoppingBag } from 'lucide-react';
import model from '../../assets/model.webp'
import Image from 'next/image';
import bazar from '../../assets/brands/bazar.webp'
import bustle from '../../assets/brands/bustle.webp'
import vercase from '../../assets/brands/versace.webp'
import instyle from '../../assets/brands/instyle.webp'


const Hero = () => {
    return (
        <div className='w-full flex justify-between mt-20 overflow-hidden'>
            <div className='flex-1 md:flex-[0.5] space-y-8 mt-8 px-0 md:px-4'>
                <p className='text-md font-semibold italic text-blue-600 bg-blue-200 w-28 h-10 text-center rounded-md items-center flex justify-center'>
                    Sale 70%
                </p>
                <h1 className=' w-full md:w-[400px]  text-text_primary text-[44px] leading-[40px] md:leading-[56px] md:text-[56px] font-bold font-Sora'>An Industrial Take on Streetwear</h1>
                <p className='w-full md:w-[300px] font-semibold text-[16px] text-text_secondary'>
                    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
                </p>
                <div className='bg-text_primary px-4 py-2 gap-4 w-[150px] text-white flex justify-between '>
                    <ShoppingBag className='width-[42px] text-[28px] ' size={"38"} />
                    Start Shopping</div>

                <ul className='flex gap-3'>
                    <li>
                        <Image src={bazar} width={100} alt='bazar'/>
                    </li>
                    <li>
                        <Image src={bustle} width={100} alt='bazar'/>
                    </li>
                    <li>
                        <Image src={vercase} width={100} alt='bazar'/>
                    </li>
                    <li>
                        <Image src={instyle} width={100} alt='bazar'/>
                    </li>
                </ul>
            </div>
            <div className='relative hidden md:block'>
                <div className='  rounded-full bg-red-100 w-[550px] h-[550px]'></div>
                <img src={model.src} width={600} alt="model" className='right-0 top-6 mb-0 absolute z-[1]' />
            </div>
        </div>
    )
}

export default Hero