import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import { MongoClient } from 'mongodb';

export const mongoClient = new MongoClient(process.env.MONGO_URI!)

const mongoPlugin: FastifyPluginAsync = async (instance) => {
    console.log('init mongodb')
    await mongoClient.connect()
}

export const MongoPlugin = fp(mongoPlugin);
