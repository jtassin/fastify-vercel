import fastify from "fastify";
import { mongoClient, MongoPlugin } from "./fastify/plugins/mongodb";

export const app = fastify({
  logger: {
    level: "debug",
  },
});

app.get('/', async (req, reply) => {
    reply.send('success')
})

app.get('/demo', async (req, res) => {
    const user = await mongoClient.db().collection('users').findOne({});
    if(!user) {
        throw new Error('no user found')
    }
    return { id: user._id, firstname: user.firstname }
})

app.register(MongoPlugin);
