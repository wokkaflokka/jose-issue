import { doStuff } from '../src/common.js';

async function myScript() {
    console.log('Script starting...');
    doStuff();
    console.log('Script complete.');
}

myScript();