

export interface HistoricalData {
  timeTo: Date,
  timeFrom:Date,
  data: TimePeriodData[]
}



export interface TimePeriodData {
  time: Date,
  close: number,
  high: number,
  low: number,
  open:number,
  volumefrom:number,
  volumeto:number


}
