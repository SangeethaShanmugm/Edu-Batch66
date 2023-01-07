const os = require("os");
console.log(os.platform());
console.log(os.arch());
console.log("Free memory", os.freemem() / 1024 / 1024);
console.log("Total memory", os.totalmem() / 1024 / 1024 / 1024);
console.log("Cpus", os.cpus());
console.log("uptime", os.uptime());
console.log("userinfo", os.userInfo());
// 1kb -> 1024 bytes -> 1mb -> 1024 Kb -> 1024 mb -> 1gb
