const sum = (a, b) => a + b;

// export = sum;
// 'export =' can only be used in TypeScript files.ts(8003)

// ❌
// exports = sum;
// obj = {}
// sum = undefined

// ✅
// exports.sum = sum;
// console.log(`module inner sum`, sum);

// ✅
// module.exports = sum;
// ✅
module.exports = {sum};