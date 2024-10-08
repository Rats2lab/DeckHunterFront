"use client";

import { Badge, Button, TextField } from "@/subframe";
import * as SubframeCore from "@subframe/core";
import Link from "next/link";
import { useEffect, useState } from "react";
import DateFilter from "./filters/dateFilter";
import LenguageFilter from "./lenguageFilter";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const updateScreen = () => setScreenWidth(window.innerWidth);
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const isMobile = screenWidth < 768;

  return (
    <div className="fixed top-0 z-20 bg-white flex flex-col w-full">
      <div className="flex w-full items-center gap-2 pt-6 pr-6 pb-2 pl-6">
        {/* Top navbar */}
        <div className="flex w-full grow shrink-0 basis-0 items-center gap-2">
          {!isMobile && <img src="/icon.png" alt="deck-hunt" className="h-10" /> }
          <Link
            href={"/"}
            className="text-heading-1 font-heading-1 text-default-font"
          >
            DeckHunter
          </Link>
          <Badge>Beta</Badge>
        </div>
        <div className="items-center">
          <Button variant="brand-primary" size="medium" onClick={() => window.open("https://buymeacoffee.com/rats2lab")}>
            {isMobile ? "Buy us a ☕" : "Buy us a coffee ☕"}
          </Button>
          {!isMobile && (
            <a className="text-caption">
              Made with 💛 by{" "}
              <a
                href="https://github.com/Rats2lab"
                target="_blank"
                className="underline"
              >
                Rats 2 Lab
              </a>
            </a>
          )}
        </div>
      </div>
      {/* Down navbar  */}
      <div className="flex w-full items-center flex-col md:flex-row gap-6 border-b border-solid border-neutral-border pt-2 pr-6 pb-2 pl-6">
        <DateFilter />
        <div className="flex w-full grow shrink-0 basis-0 items-center justify-end gap-6 hidden">
          <LenguageFilter />
          <TextField variant="filled" label="" helpText="" icon="FeatherSearch">
            <TextField.Input placeholder="Searchbar not available :(" />
          </TextField>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
function useMediaQuery(arg0: string) {
  throw new Error("Function not implemented.");
}
