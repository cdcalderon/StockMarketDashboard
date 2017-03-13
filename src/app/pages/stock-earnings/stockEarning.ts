export interface IStockEarning {
  id: string,
  symbol: string,
  reportTimeStr: string,
  periodEnding: string,
  eps: number,
  reportedEPS: number,
  consensus: number,
  bpConsensus: number,
  ratingPriceTarget: number,
  ratingNumBuys: number,
  ratingNumHolds: number,
  ratingNumSells: number,
  bpRatingPriceTarget: number,
  bpRatingNumBuys: number,
  bpRatingNumHolds: number,
  bpRatingNumSells: number,
  marketCap: number,
  sector: number,
  surprise: number,
  timeOfDay: number,
  isConfirmed: false,
  reportDateStr: string
}


// {
// _id: "58b290dea9e339001120310e",
// symbol: "XLRN",
// reportTimeStr: "amc",
// periodEnding: "Dec 2016",
// eps: "-0.01",
// reportedEPS: null,
// consensus: null,
// bpConsensus: null,
// ratingPriceTarget: null,
// ratingNumBuys: 0,
// ratingNumHolds: 0,
// ratingNumSells: 0,
// bpRatingPriceTarget: null,
// bpRatingNumBuys: 0,
// bpRatingNumHolds: 0,
// bpRatingNumSells: 0,
// marketCap: 50697300,
// sector: 17343,
// surprise: null,
// timeOfDay: 2,
// isConfirmed: false,
// __v: 0,
// reportDateStr: "2017-3-1"
// }