import { doStuff } from './common';
import * as http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

(async () => {
    const server = http.createServer((req, res) => {
        doStuff();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World');
    });
    
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
})();