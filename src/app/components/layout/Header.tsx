"use client"
import { useState } from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu"
import Image from "next/image"
import { Input } from "../ui/input"
import { X } from 'lucide-react';
import { Menu } from 'lucide-react';
import { headerOptions } from '../../assets/data'
import { ShoppingCartButton } from "../ShoppingCartButton"

function Header() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(true)
  return (
    <NavigationMenu className="flex flex-row stciky top-0 left-0 bg-white z-[11] px-4 py-2" >
      <Link href={'/'} className={'col-span-2 md:col-span-6'}>
        <Image src={'/images/DineMarketLogo.svg'} alt={'Dine Market Logo'} height={200} width={200} />
      </Link>
      <div className=" block relative md:hidden md:relative  "> {isOpen ? <Menu onClick={() => setIsOpen(false)} /> : <X onClick={() => setIsOpen(true)} />}</div>
      <div className={`absolute top-10 right-0 flex flex-col items-start gap-2 bg-gray-50 p-4 rounded-lg ${isOpen ? 'hidden' : "blcok"} md:top-0 md:bg-transparent md:p-0  md:flex md:flex-row  transition-all md:relative`}>

        <NavigationMenuList >
          {headerOptions.map((x, i) => {

            return <NavigationMenuItem key={i}>
              <Link href={x.linkTo} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {x.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          })}


        </NavigationMenuList>

        <Input placeholder="Search Something" />
        <ShoppingCartButton setShowSideMenu={setShowSideMenu} showSideMenu={showSideMenu} />
      </div>

    </NavigationMenu>
  )
}

export default Header

