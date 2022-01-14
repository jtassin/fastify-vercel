import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';


const mongoPlugin: FastifyPluginAsync = async (instance) => {
    console.log('init mongodb')
}

export const MongoPlugin = fp(mongoPlugin);
