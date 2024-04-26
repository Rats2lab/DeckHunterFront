"use client";

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Badge, Button, DropdownMenu, TextField } from "@/subframe";
// import { DropdownMenu } from "@/subframe/components/DropdownMenu";

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
        <SubframeCore.DropdownMenu.Root>
          <SubframeCore.DropdownMenu.Trigger asChild={true}>
            <div className="flex items-start gap-1">
              <SubframeCore.DropdownMenu.Root>
                <SubframeCore.DropdownMenu.Trigger asChild={true}>
                  <Button
                    variant="neutral-tertiary"
                    iconRight="FeatherChevronDown"
                  >
                    Ayer, jueves 17 de febrero
                  </Button>
                </SubframeCore.DropdownMenu.Trigger>
                <SubframeCore.DropdownMenu.Portal>
                  <SubframeCore.DropdownMenu.Content
                    side="bottom"
                    align="start"
                    sideOffset={4}
                    asChild={true}
                  >
                    <DropdownMenu>
                      <DropdownMenu.DropdownItem icon="FeatherPlus">
                        Add filter
                      </DropdownMenu.DropdownItem>
                    </DropdownMenu>
                  </SubframeCore.DropdownMenu.Content>
                </SubframeCore.DropdownMenu.Portal>
              </SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Root>
                <SubframeCore.DropdownMenu.Trigger asChild={true}>
                  <Button
                    className="hidden"
                    variant="neutral-tertiary"
                    iconRight="FeatherChevronDown"
                  >
                    Group by
                  </Button>
                </SubframeCore.DropdownMenu.Trigger>
                <SubframeCore.DropdownMenu.Portal>
                  <SubframeCore.DropdownMenu.Content
                    side="bottom"
                    align="start"
                    sideOffset={4}
                    asChild={true}
                  >
                    <DropdownMenu>
                      <DropdownMenu.DropdownItem icon="FeatherCircleDot">
                        Status
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem icon="FeatherUser">
                        Owner
                      </DropdownMenu.DropdownItem>
                      <DropdownMenu.DropdownItem icon="FeatherDollarSign">
                        Amount
                      </DropdownMenu.DropdownItem>
                    </DropdownMenu>
                  </SubframeCore.DropdownMenu.Content>
                </SubframeCore.DropdownMenu.Portal>
              </SubframeCore.DropdownMenu.Root>
              <Button
                className="hidden"
                variant="neutral-tertiary"
                icon="FeatherSettings2"
              >
                Customize
              </Button>
              <Button
                className="hidden"
                variant="neutral-tertiary"
                icon="FeatherDownload"
              >
                Download
              </Button>
            </div>
          </SubframeCore.DropdownMenu.Trigger>
          <SubframeCore.DropdownMenu.Portal>
            <SubframeCore.DropdownMenu.Content
              side="bottom"
              align="start"
              sideOffset={4}
              asChild={true}
            >
              <DropdownMenu>
                <DropdownMenu.DropdownItem
                  className="h-8 w-auto flex-none"
                  icon={null}
                >
                  Miércoles 16 de febrero
                </DropdownMenu.DropdownItem>
                <DropdownMenu.DropdownItem
                  className="h-8 w-auto flex-none"
                  icon={null}
                >
                  Martes 15 de febrero
                </DropdownMenu.DropdownItem>
                <DropdownMenu.DropdownItem
                  className="h-8 w-auto flex-none"
                  icon={null}
                >
                  Lunes 14 de febrero
                </DropdownMenu.DropdownItem>
                <DropdownMenu.DropdownItem
                  className="h-8 w-auto flex-none"
                  icon={null}
                >
                  Domingo 13 de febrero
                </DropdownMenu.DropdownItem>
              </DropdownMenu>
            </SubframeCore.DropdownMenu.Content>
          </SubframeCore.DropdownMenu.Portal>
        </SubframeCore.DropdownMenu.Root>
        <div className="flex w-full grow shrink-0 basis-0 items-center justify-end gap-6">
          <SubframeCore.DropdownMenu.Root>
            <SubframeCore.DropdownMenu.Trigger asChild={true}>
              <Button
                variant="neutral-tertiary"
                icon="FeatherFlag"
                iconRight="FeatherChevronDown"
              >
                Lenguage
              </Button>
            </SubframeCore.DropdownMenu.Trigger>
            <SubframeCore.DropdownMenu.Portal>
              <SubframeCore.DropdownMenu.Content
                side="bottom"
                align="start"
                sideOffset={4}
                asChild={true}
              >
                <DropdownMenu>
                  <DropdownMenu.DropdownItem icon="FeatherPlus">
                    Español
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon="FeatherPlus">
                    English
                  </DropdownMenu.DropdownItem>
                  <DropdownMenu.DropdownItem icon="FeatherPlus">
                    Indioario
                  </DropdownMenu.DropdownItem>
                </DropdownMenu>
              </SubframeCore.DropdownMenu.Content>
            </SubframeCore.DropdownMenu.Portal>
          </SubframeCore.DropdownMenu.Root>
          <TextField variant="filled" label="" helpText="" icon="FeatherSearch">
            <TextField.Input placeholder="Search" />
          </TextField>
        </div>
      </div>
    </>
  );
};

export default Navbar;
