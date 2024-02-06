import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";


const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
           <Logo />
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/landing">
                  <p>Landing page</p>
                </Link>
              </li>
              <li>
              </li>
            </ul>
            <Button>Buy us a coffe! </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;