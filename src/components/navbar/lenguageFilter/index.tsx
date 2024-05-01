"use client";

import { Button, DropdownMenu } from "@/subframe";
import * as SubframeCore from "@subframe/core";
import { useState } from "react";

const avialableLenguage: any[] = [
  { code: "es", title: "Español", flagEmoji: "🇪🇸" },
  { code: "en", title: "English", flagEmoji: "🇬🇧" },
  { code: "de", title: "Deutschland", flagEmoji: "🇩🇪" },
];

const LenguageFilter = () => {
  const [selectedLenguage, setSelectedLenguage] = useState<any>(
    avialableLenguage[0]
  );

  const dropdownLenguageItems = avialableLenguage.map((lenguage) => (
    <DropdownMenu.DropdownItem
      key={lenguage.code}
      icon="FeatherFlag"
      onClick={() => {
        setSelectedLenguage(lenguage);
      }}
    >
      {lenguage.title + " " + lenguage.flagEmoji}
    </DropdownMenu.DropdownItem>
  ));
  return (
    <>
      <SubframeCore.DropdownMenu.Root>
        <SubframeCore.DropdownMenu.Trigger asChild={true}>
          <Button
            variant="neutral-tertiary"
            icon="FeatherFlag"
            iconRight="FeatherChevronDown"
          >
            {selectedLenguage.title}
          </Button>
        </SubframeCore.DropdownMenu.Trigger>
        <SubframeCore.DropdownMenu.Portal>
          <SubframeCore.DropdownMenu.Content
            side="bottom"
            align="start"
            sideOffset={4}
            asChild={true}
          >
            <DropdownMenu>{dropdownLenguageItems}</DropdownMenu>
          </SubframeCore.DropdownMenu.Content>
        </SubframeCore.DropdownMenu.Portal>
      </SubframeCore.DropdownMenu.Root>
    </>
  );
};

export default LenguageFilter;
