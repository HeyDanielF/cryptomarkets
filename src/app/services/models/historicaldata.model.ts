

export interface HistoricalData {
  timeTo: Date,
  timeFrom:Date,
  data: Data
}



export interface Data {
  time: Date,
  close: number,
  high: number,
  low: number,
  open:number,
  volumefrom:number,
  volumeto:number


}
