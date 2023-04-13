const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 8080;
app.use(express.json());
app.get('/', (req, res) => res.send('Hello World!'));
routerApi(app)

app.listen(port, () => { console.log(`listening on port ${port}`) });


