const crypto = require('crypto');
password = 'teamlog is best';
console.log(crypto.hash('sha-256', password));