const os = require("os");

// info abour current user
const user = os.userInfo();
// console.log(user);

// method returrns the system updime in seconds
console.log(`systme uptime is ${os.uptime()}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
