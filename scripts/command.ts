import { doStuff } from '../src/common';

async function myScript() {
    console.log('Script starting...');
    doStuff();
    console.log('Script complete.');
}

myScript();