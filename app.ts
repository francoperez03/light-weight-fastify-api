
import { fastify } from 'fastify';
import pino from 'pino';
import quotesRoutes from './routes/quotes.route';

const server = fastify({
    logger: pino({ level: 'info' })
});

server.register(quotesRoutes);

server.listen({ port: 3000 }, (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})