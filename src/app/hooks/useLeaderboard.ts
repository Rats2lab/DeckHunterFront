// Settings Hook - src/hooks/useLeaderboard
import { useContext } from "react";
import { LeaderboardContext } from "../context/leaderboardContext";

export const useLeaderboardContext = () => {
  const context = useContext(LeaderboardContext);

  if (!context) {
    throw new Error('useLeaderboardContext must be used inside the LoaderboardProvider');
  }

  return context;
};