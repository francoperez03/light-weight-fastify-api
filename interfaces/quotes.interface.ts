export interface IQuoteProvider {
  getQuote({ data }: { data: string; }): any;
}