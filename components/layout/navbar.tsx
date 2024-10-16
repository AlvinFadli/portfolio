"use client";

import Link from "next/link";

const Navbar = () => {
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
          <div className="flex gap-5 text-base">
            <Link href="/about">About</Link>
            <Link href="/project">Project</Link>
            {/* <Link href="/blog">Blog</Link> */}
          </div>
        </div>
        <div>
          <div className="flex gap-5 text-base">
            {/* <Button className="hover:bg-transparent group" variant={"ghost"}>
              <SunIcon
                size={20}
                className="text-primary-600 group-hover:rotate-90 duration-300 transition-all"
              />
            </Button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
