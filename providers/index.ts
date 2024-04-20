import { QuoteProvider } from "./quotes.provider";
import logger from "../utils/logger";
import { Container } from "typedi";


export default async () => {
  Container.set("QuoteProvider", new QuoteProvider());
  logger.info("Websocket client connected");
};
