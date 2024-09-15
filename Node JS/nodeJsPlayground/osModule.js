const os = require("os");

const platform = os.platform();
console.log("Operating System Platform", platform);

const totalMemory = os.totalmem();
const freeMemory = os.freemem();
console.log("Total memory:", totalMemory);
console.log("Free memory:", freeMemory);
