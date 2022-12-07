const log = console.log;

// ESM ✅
// import Add from './esm-module.mjs';
// import {Add as add} from './esm-module.mjs';
// log(`Add =`, Add);
// // Add = [Function: Add]
// log(`add =`, add);
// // add = [Function: Add]

import ESM from './esm-module.mjs';
import {Add as add} from './esm-module.mjs';
log(`ESM =`, ESM);
// ESM = { Add: [Function: Add] }
log(`add =`, add);
// add = [Function: Add]

const test1 = ESM.Add(3,4);
const test2 = add(3,4);

if(test1 === 7 && test2 === 7) {
  log(`🚀✅ ESM.Add(3,4) && add(3,4) =`, test1, test2);
} else {
  log(`🚀❌ error`, test);
}


// use CJS as ESM ✅
import obj from './cjs-module.cjs';
import {sum} from './cjs-module.cjs';

log(`obj =`, obj);
// obj = { sum: [Function: sum] }
log(`sum =`, sum);
// sum = [Function: sum]

const result = sum(1,2);

if(result === 3) {
  log(`✅ sum(1,2) =`, result);
} else {
  log(`❌ error`, result);
}