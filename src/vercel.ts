console.time('import')
import { VercelRequest, VercelResponse } from '@vercel/node';
import { app } from './server';
console.timeEnd('import')


export default async (req: VercelRequest, res: VercelResponse) => {
    console.time('appReady')
    await app.ready();
    console.timeEnd('appReady')
    console.time('request')
    app.server.emit('request', req, res);
    console.timeEnd('request')
}
