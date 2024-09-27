"use client";

import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";
import Link from "next/link";
import { Button } from "./ui/button";
import LoadingBar from 'react-top-loading-bar'

import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [progress , setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    
    setProgress(10)

    setTimeout(() => {
      setProgress(70)
    }, 400);

    setTimeout(() => {
      setProgress(100)
    }, 500);

  }, [pathname])

  useEffect(() => {
    setTimeout(()=> {
      setProgress(0)
    }, 700 )
  } , [])
  

  return (
    <nav className="flex items-center h-14 border-b justify-between px-20 py-2 bg-background/50 backdrop-blur sticky top-0 z-10 sm:px-4">
       <LoadingBar
        color='#69afdc'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <div className="text-2xl font-bold flex items-center sm:ml-10">
      <Link href={"/"}>Never.io</Link>
    </div>
    {/* Menu Icon for Mobile */}
    <Sheet>
      <SheetTrigger>
        <div
          className="md:hidden cursor-pointer text-2xl"
          onClick={toggleMenu}
        >
          &#9776;
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex ">
            <Link href={"/"}>Never.io</Link>
          </SheetTitle>
          <SheetDescription>
            <ul className="md:hidden flex flex-col items-center justify-between absolute top-16 left-0 right-0 bg-opacity-5 backdrop-blur-md">
              <li className="py-2 text-xl font-bold ">
                <Link
                  href="/"
                  className="block w-full text-center hover:text-gray-300"
                >
                  Home
                </Link>
              </li>
              <li className="py-2 text-xl font-bold ">
                <Link
                  href="/blogs"
                  className="block w-full text-center hover:text-gray-300"
                >
                  Blogs
                </Link>
              </li>
              <li className="py-2 text-xl font-bold ">
                <Link
                  href="/contact"
                  className="block w-full text-center hover:text-gray-300"
                >
                  Contact
                </Link>
              </li>
              <li className="py-2 text-xl font-bold ">
                <Link
                  href="/about"
                  className="block w-full text-center hover:text-gray-300"
                >
                  About
                </Link>
              </li>
              <div className="mb-3 flex flex-col gap-3">
                <Button><Link href={'/signup'}>Register</Link></Button>
                <Button><Link href={'/login'}>Login</Link></Button>
              </div>
              <ModeToggle />
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  
    {/* Navbar Links for Mobile */}
    <ul className="hidden md:flex space-x-5 items-center h-full">
      <li>
        <Link href="/" className="hover:text-gray-300">
          Home
        </Link>
      </li>
      <li>
        <Link href="/blogs" className="hover:text-gray-300">
          Blogs
        </Link>
      </li>
      <li>
        <Link href="/contact" className="hover:text-gray-300">
          Contact
        </Link>
      </li>
      <li>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
      </li>
      <li>
      
                <Button><Link href={'/signup'}>Register</Link></Button>
      </li>
      <li>
      <Button><Link href={'/login'}>Login</Link></Button>
      </li>
      <ModeToggle />
    </ul>
  </nav>
  
  );
};

export default Navbar;
