const express = require('express');
const fav = require('./fav');
const app = express();
app.use(fav);



app.use((req, res) => res.send('<h1>Express is working!</h1>'));
app.listen(3000);