export const calculatedRemainingTime = (startTime: Date|string): string => {
  const now = new Date();
  const date = new Date(startTime);
  const timeInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const timeInMinutes = Math.floor(timeInSeconds / 60);
  const timeInHours = Math.floor(timeInMinutes / 60);
  const timeInDays = Math.floor(timeInHours / 24);
  if (timeInHours < 1) return "Just now";
  if (timeInHours < 24) return `${timeInHours}h ago`;
  if (timeInDays < 7) return `${timeInDays}d ago`;

  return date.toLocaleDateString();
};
