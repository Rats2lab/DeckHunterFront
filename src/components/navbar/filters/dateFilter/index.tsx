"use client";

import { useLeaderboardContext } from "@/app/hooks/useLeaderboard";
import { useProductContext } from "@/app/hooks/useProduct";
import { fetchProducts } from "@/lib/utils";
import { Button, DropdownMenu } from "@/subframe";
import * as SubframeCore from "@subframe/core";

const dateLocaleOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
} as const;


const DateFilter = () => {
  const { leaderboards, selectedLeaderboard, setSelectedLeaderboard } =
    useLeaderboardContext();
    const {setProducts} = useProductContext();

  const dropdownDateItems = leaderboards.map((leaderboard) => (
    <DropdownMenu.DropdownItem
      icon="FeatherCalendar"
      key={leaderboard.id}
      onClick={() => {
        setSelectedLeaderboard(leaderboard);
        fetchProducts(leaderboard.id).then((products) => {
          setProducts(products);
        })
      }}
    >
      {new Date(leaderboard.date).toLocaleDateString(
        undefined,
        dateLocaleOptions
      )}
    </DropdownMenu.DropdownItem>
  ));

  return (
    <>
      <SubframeCore.DropdownMenu.Root>
        <SubframeCore.DropdownMenu.Trigger asChild={true}>
          <div className="flex items-start gap-1">
            <SubframeCore.DropdownMenu.Root>
              <SubframeCore.DropdownMenu.Trigger asChild={true}>
                <Button
                  variant="neutral-tertiary"
                  iconRight="FeatherChevronDown"
                  icon="FeatherCalendarDays"
                >
                  {selectedLeaderboard
                    ? new Date(selectedLeaderboard.date).toLocaleDateString(
                        undefined,
                        dateLocaleOptions
                      )
                    : "Select date"}
                </Button>
              </SubframeCore.DropdownMenu.Trigger>
              <SubframeCore.DropdownMenu.Portal>
                <SubframeCore.DropdownMenu.Content
                  side="bottom"
                  align="start"
                  sideOffset={4}
                  asChild={true}
                >
                  <DropdownMenu>{dropdownDateItems}</DropdownMenu>
                </SubframeCore.DropdownMenu.Content>
              </SubframeCore.DropdownMenu.Portal>
            </SubframeCore.DropdownMenu.Root>
          </div>
        </SubframeCore.DropdownMenu.Trigger>
      </SubframeCore.DropdownMenu.Root>
    </>
  );
};

export default DateFilter;
