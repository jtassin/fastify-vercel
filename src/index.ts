// used only for local test

import { app } from './server';

app.listen(process.env.PORT ?? 3000, '0.0.0.0');
