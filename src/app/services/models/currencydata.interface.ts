

export interface CurrencyData {
  rank:number,
  name:any,
  marketCap: number,
  price: number,
  volume:number,
  circulatingSupply:number,
  change: number
}


export interface ICurrencyData{
  id: string,
  name: string,
  symbol: string,
  rank: number,
  price_usd: number,
  price_btc: number,
  "24h_volume_usd": number,
  market_cap_usd: number,
  available_supply: number,
  total_supply: number,
  max_supply: number,
  percent_change_1h: number,
  percent_change_24h: number,
  percent_change_7d: number,
  last_updated: number,
}
