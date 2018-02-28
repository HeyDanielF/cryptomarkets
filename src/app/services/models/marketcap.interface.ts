
export interface Change {
  day: number,
  hour:number,
  week:number,
}

export interface MarketCap {
  marketcap: number,
  change:Change,
  dayVolume: number
}

