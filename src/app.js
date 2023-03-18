const express = require('express');
const app = express();
const database = require('./config/database');
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');

//Middleware Importation
const { logRequest } = require('./middlewares/general.middleware');

//Models Importation
const User = require('./models/user.model');

//Routed Importation
const testRoutes = require('./routes/test.routes');

app.use(cors());
app.use(express.json({ limit : '100mb' }))
app.use(express.urlencoded({ limit : '100mb' }));

database.sync({ alter : true }).then(()=>{
    console.log('Database Connected...');
    app.listen(process.env.PORT, ()=>{ console.log(`Server running on :${process.env.PORT}`) });
}).catch(err=>{ console.error(err); });

app.use(logRequest);
app.use('/test', testRoutes);


module.exports = app;