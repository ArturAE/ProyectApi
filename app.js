const express = require('express');
const sequelize = require('./config/db.js');
const routes = require('./routes/index.js');

const app = express();
app.use(express.json());
app.use('/', routes);

try {
    sequelize.authenticate();
    sequelize.sync();
    console.log('Connected to DB');
} catch (error) {
    console.log('Unable to connect to DB: ', error);
}

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on PORT ${port}`);
});

