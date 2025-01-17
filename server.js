const express = require('express');
const app = express();
const sequelize = require('./config/database');
const routes = require('./routes/index')

app.use(express.json());
app.use('/api', routes);

sequelize.sync().then(() => {
    app.listen(8080, () => {
        console.log('Server is running on port 8080');
    });
});