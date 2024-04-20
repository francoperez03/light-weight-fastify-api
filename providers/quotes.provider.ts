import { IQuoteProvider } from '../interfaces/quotes.interface';
import logger from "../utils/logger";

export class QuoteProvider implements IQuoteProvider {
  constructor(){
  }
  getQuote({ data }: { data: string; }) {
    try {
      return {ok:'ok'};
    } catch (error) {
      logger.error('Error fetching quote from Quote', error);
      throw error;
    }
  }
}

