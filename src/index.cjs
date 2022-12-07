const log = console.log;

/* 
const sum = require('./cjs-module.cjs');
log(`sum =`, sum)
// sum = [Function: sum]
const result = sum(1,2);
 */

/* 
const obj = require('./cjs-module.cjs');
log(`obj =`, obj);
// obj = { sum: [Function: sum] }
const sum = obj.sum;
 */

const obj = require('./cjs-module.cjs');
log(`obj =`, obj);

const {sum} = require('./cjs-module.cjs');
log(`sum =`, sum);
// sum = [Function: sum]

const result = sum(1,2);

if(result === 3) {
  log(`✅ sum(1,2) =`, result);
} else {
  log(`❌ error`, result);
}
