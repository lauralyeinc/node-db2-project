const server = require('./server.js');

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`✨ Magic Happening on port ${PORT} ✨`)
});
