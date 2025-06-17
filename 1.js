const os = require("os");
console.log(`current platform : ${os.platform()}`);
console.log(`memory : ${os.freemem()}${os.totalmem()}`);
console.log(`cpu count : ${os.cpus().length}`)