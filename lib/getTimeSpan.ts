export const getTimeSpan = (season: Month[]): string => {
  if (!season || season.length === 0) return "";

  const monthIndices: Record<Month, number> = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };

  // Sort the months by their indices
  const sortedMonths = season
    .map((month) => ({ month, index: monthIndices[month] }))
    .sort((a, b) => a.index - b.index);

  const ranges: string[] = [];
  let rangeStart: Month = sortedMonths[0].month;
  let previousIndex = sortedMonths[0].index;

  for (let i = 1; i < sortedMonths.length; i++) {
    const current = sortedMonths[i];

    if (current.index !== previousIndex + 1) {
      ranges.push(`${rangeStart} - ${sortedMonths[i - 1].month}`);
      rangeStart = current.month;
    }

    previousIndex = current.index;
  }

  ranges.push(`${rangeStart} - ${sortedMonths[sortedMonths.length - 1].month}`);

  return ranges.join(" and ");
};

// Example usage
const item = {
  season: [
    "March",
    "April",
    "May",
    "June",
    "September",
    "October",
    "November",
  ] as Month[],
};
