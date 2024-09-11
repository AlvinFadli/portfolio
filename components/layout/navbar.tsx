"use client";

import { usePathname } from "next/navigation";
import { SunIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex justify-between items-center py-8">
        <div className="flex gap-10">
          <Link
            href={"/"}
            className="font-bold flex items-center text-primary-600 text-xl leading-none"
          >
            <h1 className="">Alvin Fadli</h1>
          </Link>
          {pathname === "/" ? (
            <div className="flex gap-5 text-base">
              <Link href="#about">About</Link>
              <Link href="#portfolio">Portfolio</Link>
              {/* <Link href="#contact">Contact</Link> */}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div>
          <div className="flex gap-5 text-base">
            <Button className="hover:bg-transparent group" variant={"ghost"}>
              <SunIcon
                size={20}
                className="text-primary-600 group-hover:rotate-90 duration-300 transition-all"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
