export interface Leaderboard {
  id: string;
  date: Date;
  link: string;
}
export type LeaderboardContextType = {
  leaderboards: Leaderboard[];
  selectedLeaderboard: Leaderboard | null;
  setLeaderboards: (newLeaderboards: Leaderboard[]) => void;
  setSelectedLeaderboard: (newSelectedLeaderboard: Leaderboard) => void;
};
