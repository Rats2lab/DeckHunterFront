import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <>
      <div className="z-10 w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <Button>Buy us a coffe! </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;