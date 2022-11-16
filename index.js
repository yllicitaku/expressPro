const express = require('express');
const mongoose = require('mongoose');

const keys = require('./config/key')
require('./models/User')

require('./models/User')

const passport = require('passport');

// require('./services/passport');

mongoose.connect(keys.mongoose,
    {
        useNewUrlParser:true,
        useUnifiedTopology: true
    })

const app = express();
app.use(passport.initialize())


const port = 5000;
app.listen(port)