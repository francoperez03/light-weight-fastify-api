export default async function routes(server: any) {
    server.get('/quotes', async (request: any, reply: any) => {
        return { message: "This is the quotes endpoint" };
    });
}
