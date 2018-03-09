export interface News {
  id: number,
  guid:string,
  published_on: number,
  imageurl: string,
  title: string,
  url: string,
  source: string,
  body: string,
  tags: string,
  categories: string,
  lang: string,
  source_info:SourceInfo
}


export interface SourceInfo {
  name:string,
  lang:string,
  img: string
}
