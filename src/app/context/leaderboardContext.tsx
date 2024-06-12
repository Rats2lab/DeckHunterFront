"use client";
// Settings Context - src/context/Settings
import {
  Leaderboard,
  LeaderboardContextType,
} from "@/interfaces/leaderboard.interface";
import { createContext, useState } from "react";
export const LeaderboardContext = createContext<LeaderboardContextType | null>(
  null
);

const LeaderboardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentLeaderboards, setCurrentLeaderboards] = useState<Leaderboard[]>(
    []
  );
  const [selectedCurrentLeaderboard, setSelectedCurrentLeaderboard] =
    useState<Leaderboard | null>(null);

  const setLeaderboards = (newLeaderboards: Array<Leaderboard>) => {
    setCurrentLeaderboards(newLeaderboards);
    setSelectedCurrentLeaderboard(newLeaderboards[0]);
  };

  const setSelectedLeaderboard = (newSelectedLeaderboard: Leaderboard) => {
    setSelectedCurrentLeaderboard(newSelectedLeaderboard);
  };

  return (
    <LeaderboardContext.Provider
      value={{
        leaderboards: currentLeaderboards,
        selectedLeaderboard: selectedCurrentLeaderboard,
        setSelectedLeaderboard,
        setLeaderboards,
      }}
    >
      {children}
    </LeaderboardContext.Provider>
  );
};

export const LeaderboardConsumer = LeaderboardContext.Consumer;
export default LeaderboardProvider;
