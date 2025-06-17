const fs = require('fs');
fs.writeFile('./input.txt', 'asdfasdf', (err) => {
    if (err) throw err;
});
fs.readFile('./input.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data)
})