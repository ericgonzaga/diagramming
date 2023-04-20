import { server } from './server';

import 'dotenv/config';

const express_port = process.env.EXPRESS_PORT || 4000;
server.listen(express_port, () => {
    console.log(`Express server running at http://localhost:${express_port}`);
});
