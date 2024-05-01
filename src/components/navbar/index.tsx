"use client";

import { Badge, Button, DropdownMenu, TextField } from "@/subframe";
import * as SubframeCore from "@subframe/core";
import LenguageFilter from "./lenguageFilter";
import DateFilter from "./filters/dateFilter";

const Navbar = () => {
  return (
    <>
      <div className="flex w-full items-center gap-2 pt-6 pr-6 pb-2 pl-6">
        {/* Top navbar */}
        <div className="flex w-full grow shrink-0 basis-0 items-center gap-2">
          <SubframeCore.Icon
            className="text-heading-2 font-heading-2 text-default-font"
            name="FeatherCat"
          />
          <span className="text-heading-1 font-heading-1 text-default-font">
            DeckHunter
          </span>
          <Badge>Beta</Badge>
        </div>
        <div className="items-center">
          <Button variant="brand-primary" size="medium">
            Buy us a coffee ☕
          </Button>
          <a className="text-caption">
            Made with 💛 by{" "}
            <a
              href="https://github.com/My-Tech-Laboratory"
              target="_blank"
              className="underline"
            >
              Hunters Labs
            </a>
          </a>
        </div>
      </div>
      {/* Down navbar  */}
      <div className="flex w-full items-center gap-6 border-b border-solid border-neutral-border pt-2 pr-6 pb-2 pl-6">
          <DateFilter/>
        <div className="flex w-full grow shrink-0 basis-0 items-center justify-end gap-6">
          <LenguageFilter/>
          <TextField variant="filled" label="" helpText="" icon="FeatherSearch">
            <TextField.Input placeholder="Searchbar not avialable :(" />
          </TextField>
        </div>
      </div>
    </>
  );
};

export default Navbar;
