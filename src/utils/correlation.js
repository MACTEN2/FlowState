function average(arr, key) {
  if (!arr.length) return 0;
  return arr.reduce((sum, e) => sum + e[key], 0) / arr.length;
}

export function caffeineCorrelation(entries) {
  if (entries.length < 3) return null;

  const low = entries.filter(e => e.caffeine < 200);
  const high = entries.filter(e => e.caffeine >= 200);

  const lowAvg = average(low, "study");
  const highAvg = average(high, "study");

  if (!low.length || !high.length) return null;

  const diff = ((lowAvg - highAvg) / highAvg) * 100;

  return `You study ${Math.abs(diff).toFixed(1)}% more effectively when drinking less than 2 cups of coffee.`;
}
