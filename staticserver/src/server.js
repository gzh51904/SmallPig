const express = require("express");

const { PORT } = require('./config.json');
const app = express();

let allRouter = require('./routers');
app.use(allRouter);

app.use(express.static('./'))

app.listen(1904, () => {
    console.log('server is running on 3010');
})