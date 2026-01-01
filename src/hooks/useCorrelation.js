import { caffeineCorrelation } from "../utils/correlation";

export function useCorrelation(entries) {
  return {
    caffeineInsight: caffeineCorrelation(entries)
  };
}
