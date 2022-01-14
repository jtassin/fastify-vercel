# fastify vercel

POC de fastify sur vercel

* besoin de dir public a la racine, c'est con mais c'est la vie ...
* les functions serverless sont dans /api, pas posisble de les mettre ailleurs

dev en local sur vercel

```bash
npm run start:vercel
```
## Cons 
* node 14 only
* deploy meme si CI red
* 100 deploys par jour (contourné par `ignore-step.sh` si besoin)




