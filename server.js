const fastify = require('fastify');

const app = fastify({ logger: true });
const studentRoutes = require('./src/routes/studentRoutes');

studentRoutes(app);

const startServer = async () => {
    try {
        await app.listen(8080);
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
}

startServer();