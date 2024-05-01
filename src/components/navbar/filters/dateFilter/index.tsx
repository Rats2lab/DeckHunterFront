"use client";

import { Button, DropdownMenu, TextField } from "@/subframe";
import * as SubframeCore from "@subframe/core";
import { useState } from "react";

const dateLocaleOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
} as const;
const lastWeekDays: Date[] = [];

for (let i = 1; i < 7; i++) {
  let day = new Date(new Date().setDate(new Date().getDate() - i));
  lastWeekDays.push(day);
}

const DateFilter = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(lastWeekDays[0]);

  const dropdownDateItems = lastWeekDays.map((day) => (
    <DropdownMenu.DropdownItem
      icon="FeatherCalendar"
      key={day.valueOf()}
      onClick={() => {
        setSelectedDate(day);
      }}
    >
      {day.toLocaleDateString(undefined, dateLocaleOptions)}
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
                  {selectedDate.toLocaleDateString(
                    undefined,
                    dateLocaleOptions
                  )}
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
