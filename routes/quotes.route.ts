import { Service, Inject } from "typedi";
import logger from "../utils/logger";
import { IQuoteProvider } from "../interfaces/quotes.interface";

@Service()
export class QuoteService {
  constructor(
    @Inject("QuoteProvider")
    private quoteProvider: IQuoteProvider
  ) {}

  async getBestQuote(params: { data: string;}) {
    try {
      const quotes = this.quoteProvider.getQuote(params)
      return quotes;
    } catch (e) {
      logger.error((e as Error).message);
      return { delivered: 0, status: "error" };
    }
  }
}