export const getTimeSpan = (season: Month[], language: Language): string => {
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

  const germanMonths: Record<Month, string> = {
    January: "Januar",
    February: "Februar",
    March: "März",
    April: "April",
    May: "Mai",
    June: "Juni",
    July: "Juli",
    August: "August",
    September: "September",
    October: "Oktober",
    November: "November",
    December: "Dezember",
  };

  const separator = language === "DE" ? "bis" : "to";

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
      ranges.push(`${rangeStart} ${separator} ${sortedMonths[i - 1].month}`);
      rangeStart = current.month;
    }

    previousIndex = current.index;
  }

  ranges.push(
    `${rangeStart} ${separator} ${sortedMonths[sortedMonths.length - 1].month}`
  );

  // Check if ranges wrap around the year
  if (
    ranges.length > 1 &&
    monthIndices[sortedMonths[0].month] === 1 &&
    monthIndices[sortedMonths[sortedMonths.length - 1].month] === 12
  ) {
    const firstRange = ranges.shift()!;
    const lastRange = ranges.pop()!;
    ranges.unshift(
      `${lastRange.split(` ${separator} `)[0]} ${separator} ${
        firstRange.split(` ${separator} `)[1]
      }`
    );
  }

  let result = ranges.join(" and ");

  // Translate to German if the language is DE
  if (language === "DE") {
    result = result
      .replace(/([A-Za-z]+)/g, (month) => germanMonths[month as Month] || month)
      .replace("and", "und");
  }

  return result;
};
